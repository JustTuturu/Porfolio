import { describe, expect, it } from 'vitest';
import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  META,
  PROJECTS,
} from './index';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const isHttpsUrl = (value: unknown): boolean => {
  if (!isNonEmptyString(value)) return false;
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};

const isEmail = (value: unknown): boolean =>
  isNonEmptyString(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isNonEmptyStringArray = (value: unknown): boolean =>
  Array.isArray(value) && value.length > 0 && value.every(isNonEmptyString);

describe('META', () => {
  it('has all required string fields', () => {
    for (const key of [
      'name',
      'role',
      'email',
      'twitter',
      'github',
      'linkedin',
      'location',
    ] as const) {
      expect(isNonEmptyString(META[key]), `META.${key}`).toBe(true);
    }
  });

  it('exposes availability as a boolean', () => {
    expect(typeof META.available).toBe('boolean');
  });

  it('has a valid email address', () => {
    expect(isEmail(META.email)).toBe(true);
  });

  it('has valid https social URLs', () => {
    for (const key of ['twitter', 'github', 'linkedin'] as const) {
      expect(isHttpsUrl(META[key]), `META.${key}`).toBe(true);
    }
  });
});

describe('PROJECTS', () => {
  it('contains at least one project', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('has no duplicate titles', () => {
    const titles = PROJECTS.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('has at least one featured project', () => {
    expect(PROJECTS.some((project) => project.featured)).toBe(true);
  });

  it('has complete and valid data for every project', () => {
    for (const project of PROJECTS) {
      const label = `project "${project.title}"`;
      expect(isNonEmptyString(project.title), `${label}: title`).toBe(true);
      expect(
        isNonEmptyString(project.description),
        `${label}: description`,
      ).toBe(true);
      expect(isNonEmptyString(project.category), `${label}: category`).toBe(
        true,
      );
      expect(
        isNonEmptyString(project.categoryColor),
        `${label}: categoryColor`,
      ).toBe(true);
      expect(isNonEmptyString(project.label), `${label}: label`).toBe(true);
      expect(typeof project.featured, `${label}: featured`).toBe('boolean');
      expect(isNonEmptyStringArray(project.metrics), `${label}: metrics`).toBe(
        true,
      );
      expect(isNonEmptyStringArray(project.tech), `${label}: tech`).toBe(true);
      expect(isHttpsUrl(project.github), `${label}: github`).toBe(true);
      // demo is optional, but must be a valid https URL when present.
      expect(
        isNonEmptyString(project.demo) ? isHttpsUrl(project.demo) : true,
        `${label}: demo`,
      ).toBe(true);
    }
  });
});

describe('EDUCATION', () => {
  it('has all required fields', () => {
    for (const key of [
      'university',
      'degree',
      'major',
      'cgpa',
      'graduation',
    ] as const) {
      expect(isNonEmptyString(EDUCATION[key]), `EDUCATION.${key}`).toBe(true);
    }
  });

  it('lists at least one course', () => {
    expect(isNonEmptyStringArray(EDUCATION.courses)).toBe(true);
  });
});

describe('CERTIFICATIONS', () => {
  it('has complete and valid data for every certification', () => {
    for (const cert of CERTIFICATIONS) {
      const label = `certification "${cert.name}"`;
      expect(isNonEmptyString(cert.platform), `${label}: platform`).toBe(true);
      expect(isNonEmptyString(cert.name), `${label}: name`).toBe(true);
      expect(isNonEmptyString(cert.date), `${label}: date`).toBe(true);
      expect(typeof cert.featured, `${label}: featured`).toBe('boolean');
      // url is optional, but must be a valid https URL when present.
      expect(
        isNonEmptyString(cert.url) ? isHttpsUrl(cert.url) : true,
        `${label}: url`,
      ).toBe(true);
    }
  });
});

describe('EXPERIENCES', () => {
  it('has complete and valid data for every experience', () => {
    for (const experience of EXPERIENCES) {
      const label = `experience "${experience.company}"`;
      expect(isNonEmptyString(experience.company), `${label}: company`).toBe(
        true,
      );
      expect(isNonEmptyString(experience.role), `${label}: role`).toBe(true);
      expect(isNonEmptyString(experience.period), `${label}: period`).toBe(
        true,
      );
      expect(isNonEmptyString(experience.type), `${label}: type`).toBe(true);
      expect(typeof experience.seeking, `${label}: seeking`).toBe('boolean');
      expect(
        isNonEmptyStringArray(experience.achievements),
        `${label}: achievements`,
      ).toBe(true);
      expect(isNonEmptyStringArray(experience.tech), `${label}: tech`).toBe(
        true,
      );
    }
  });
});
