import type { Profile } from './types';

/**
 * Placeholder profile data — replace these values with your real information.
 * The page layout does not need to be edited when this file changes.
 */
export const profile: Profile = {
  name: 'Your Name',
  role: 'Mathematics Undergraduate',
  university: 'University Name',
  location: 'City, Country',
  introduction:
    'Mathematics undergraduate interested in analysis, probability, mathematical modeling, and computational mathematics.',
  about: [
    'I am an undergraduate student studying mathematics. My current interests include rigorous analysis, probability, optimization, and the use of computation to investigate mathematical problems.',
    'Alongside coursework, I am exploring mathematical competitions, modeling projects, and research-oriented reading. This website records selected academic work as it develops.',
  ],
  email: {
    user: 'your.name',
    domain: 'example.edu',
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/192qq-maker' },
  ],
  cvUrl: 'cv.pdf',
  canonicalUrl: 'https://192qq-maker.github.io/academic-homepage/en/',
  education: [
    {
      university: 'University Name',
      degree: 'B.Sc. in Mathematics',
      major: 'Mathematics',
      startYear: '2024',
      endYear: '2028 (expected)',
      location: 'City, Country',
      coursework: [
        'Mathematical Analysis',
        'Advanced Algebra',
        'Probability Theory',
      ],
    },
  ],
  academicInterests: [
    'Mathematical Analysis',
    'Linear Algebra',
    'Probability Theory',
    'Mathematical Modeling',
    'Optimization',
    'Numerical Methods',
    'Computational Mathematics',
  ],
  coursework: [
    'Mathematical Analysis',
    'Advanced Algebra',
    'Probability Theory',
    'Ordinary Differential Equations',
    'Numerical Analysis',
    'Mathematical Modeling',
  ],
};
