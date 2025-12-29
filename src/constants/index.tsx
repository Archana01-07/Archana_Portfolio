/**
 * @copyright 2025 Archana
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ToolsType,
  CertificationType,
} from '@/types';

/**
 * Assets
 */
import {
  Home,
  Briefcase,
  User,
  FileText,
  Mail,
  Github,
  Linkedin,
  Trophy,
} from 'lucide-react';


// ====================== NAVIGATION ======================
const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'Projects', link: '#projects', icon: Briefcase },
  { label: 'About', link: '#about', icon: User },
  { label: 'Resume', link: '#resume', icon: FileText },
  { 
    label: 'Certifications & Achievements', 
    link: '#certifications',
    icon: Trophy,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];


// ====================== SOCIAL LINKS ======================
const socialLinks: LinksType[] = [
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/YOUR_GITHUB_USERNAME', // Update with your GitHub
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/YOUR_LINKEDIN', // Update with your LinkedIn
  },
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:your.email@gmail.com', // Update with your email
  },
];


// ====================== PROJECTS ======================
const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/projects/voicegap.jpg', // Add this image
    title: 'VoiceGap - Symptom Screener (Hackathon)',
    tags: ['AI', 'Healthcare', 'Speech'],
    projectLink: 'https://github.com/yourrepo/voicegap',
  },
  {
    imgSrc: '/images/projects/unbiashire.jpg', // Add this image
    title: 'Unbias Hire - AI Hiring Platform',
    tags: ['UI/UX', 'Frontend', 'Bias Detection'],
    projectLink: 'https://github.com/yourrepo/unbiashire',
  },
  {
    imgSrc: '/images/projects/portfolio.jpg', // Add this image
    title: 'Portfolio Website - React & Tailwind',
    tags: ['Frontend', 'Design', 'React'],
    projectLink: 'https://github.com/yourrepo/portfolio',
  },
  {
    imgSrc: '/images/projects/dashboard.jpg', // Add this image
    title: 'Student Dashboard Web App',
    tags: ['React', 'MySQL', 'Fullstack'],
    projectLink: 'https://github.com/yourrepo/dashboard',
  },
];


// ====================== EDUCATION ======================
const education: ExperienceType[] = [
  {
    year: '2024 - Present',
    title: 'B.Tech (Computer Science & Design)',
    institute: 'Easwari Engineering College',
    desc: 'Currently in 1st year, focusing on web development, UI/UX, and AI projects.',
  },
  {
    year: '2024 - Present',
    title: 'BS in Data Science (Parallel Degree)',
    institute: 'IIT Madras',
    desc: 'Learning programming, Python, data analytics & ML foundations.',
  },
];


// ====================== EXPERIENCE ======================
const experience: ExperienceType[] = [
  {
    year: '2025 (Hackathon)',
    title: 'VoiceGap - Symptom Screener (Team Member)',
    institute: 'Code Cubicle 4.0',
    desc: 'AI-based symptom analysis with voice input, triage suggestions & UI screens.',
  },
  {
    year: '2025',
    title: 'UI/UX & Frontend Learning',
    institute: 'Self Projects + Portfolio Work',
    desc: 'Learning Tailwind, React, and product design to build real projects.',
  },
];


// ====================== SKILLS & TOOLS ======================
const tools: ToolsType[] = [
  { label: 'Java', imgSrc: '/images/tools/java.svg' },
  { label: 'C', imgSrc: '/images/tools/c.svg' },
  { label: 'Python', imgSrc: '/images/tools/python.svg' },
  { label: 'HTML', imgSrc: '/images/tools/html5.svg' },
  { label: 'CSS', imgSrc: '/images/tools/css3.svg' },
  { label: 'JavaScript', imgSrc: '/images/tools/javascript.svg' },
  { label: 'React', imgSrc: '/images/tools/react.svg' },
  { label: 'MySQL', imgSrc: '/images/tools/mysql.svg' },
  { label: 'Figma', imgSrc: '/images/tools/figma.svg' },
  { label: 'Canva', imgSrc: '/images/tools/canva.svg' },
];


// ====================== CERTIFICATIONS / ACHIEVEMENTS ======================
const certifications: CertificationType[] = [
  {
    title: 'Participated in Code Cubicle 4.0 Hackathon',
    year: '2025',
    link: '#',
  },
  {
    title: 'UI/UX Fundamentals - Self Learning Path',
    year: '2024',
    link: '#',
  },
  {
    title: 'Portfolio Website & Personal Branding Started',
    year: '2025',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  navLinks,
  certifications,
};