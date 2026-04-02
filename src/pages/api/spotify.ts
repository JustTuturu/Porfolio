import type { APIRoute } from 'astro';

export const prerender = false;

type SpotifyTokenResponse = {
  access_token?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
};

type SpotifyCurrentlyPlayingResponse = {
  is_playing?: boolean;
  item?: {
    id?: string;
    name?: string;
    album?: {
      name?: string;
      images?: Array<{ url?: string }>;
    };
    artists?: Array<{ name?: string }>;
    external_urls?: {
      spotify?: string;
    };
  } | null;
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

var cachedAccessToken = '';
var cachedAccessTokenExpiresAt = 0;

async function getAccessToken() {
  if (cachedAccessToken && Date.now() < cachedAccessTokenExpiresAt) {
    return cachedAccessToken;
  }

  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = import.meta.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify environment variables');
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const data = (await response.json()) as SpotifyTokenResponse;

  if (!response.ok || !data.access_token) {
    throw new Error(data.error_description || data.error || 'Failed to refresh Spotify token');
  }

  cachedAccessToken = data.access_token;
  cachedAccessTokenExpiresAt = Date.now() + Math.max((data.expires_in || 3600) - 60, 60) * 1000;

  return cachedAccessToken;
}

async function getCurrentlyPlaying(accessToken: string) {
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    throw new Error('Failed to fetch current Spotify track');
  }

  return (await response.json()) as SpotifyCurrentlyPlayingResponse;
}

export const GET: APIRoute = async () => {
  try {
    const accessToken = await getAccessToken();
    const current = await getCurrentlyPlaying(accessToken);

    if (!current || !current.is_playing || !current.item) {
      return json({ isPlaying: false });
    }

    const item = current.item;
    const artists = (item.artists || [])
      .map(function(artist) { return artist.name; })
      .filter(Boolean)
      .join(', ');

    return json({
      isPlaying: true,
      song: item.name || 'Untitled',
      artist: artists || 'Unknown artist',
      album: item.album && item.album.name ? item.album.name : '',
      albumArtUrl: item.album && item.album.images && item.album.images[0] ? item.album.images[0].url || '' : '',
      trackId: item.id || '',
      url: item.external_urls && item.external_urls.spotify ? item.external_urls.spotify : '',
    });
  } catch (error) {
    console.error('Spotify endpoint error:', error);
    return json({ isPlaying: false, error: 'spotify_unavailable' }, 500);
  }
};
