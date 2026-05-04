export interface Track {
  title: string;
  artist: string;
  album: string;
  cover: string;
  src: string;
}

export const PLAYLIST: Track[] = [
  {
    title: 'Track 1',
    artist: 'Artist 1',
    album: 'Album 1',
    cover: 'https://placehold.co/400x400/1a1a2e/e8a0a8?text=%E2%99%AA',
    src: '/music/track1.mp3',
  },
  {
    title: 'Track 2',
    artist: 'Artist 2',
    album: 'Album 2',
    cover: 'https://placehold.co/400x400/1a1a2e/a8c8d8?text=%E2%99%AB',
    src: '/music/track2.mp3',
  },
  {
    title: 'Track 3',
    artist: 'Artist 3',
    album: 'Album 3',
    cover: 'https://placehold.co/400x400/1a1a2e/d4956a?text=%E2%99%AC',
    src: '/music/track3.mp3',
  },
];
