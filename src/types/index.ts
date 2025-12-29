/**
 * @copyright 2025 Archana
 * @license Apache-2.0
 */

import type { JSX } from 'react';

export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};

/**
 * New: Certifications / Achievements
 */
export type CertificationType = {
  title: string;
  year: string;
  link?: string; // Optional link to certificate or badge
};
