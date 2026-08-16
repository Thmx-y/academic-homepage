import type { Profile } from './types';

/**
 * Confirmed profile data. Unprovided fields remain examples or are left empty.
 */
export const profile: Profile = {
  name: '唐德军',
  role: 'Mathematics and Applied Mathematics Undergraduate · Sophomore',
  university: 'Anhui University',
  introduction: '',
  about: [],
  email: {
    user: 'a124300084',
    domain: 'stu.ahu.edu.cn',
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/192qq-maker' },
  ],
  cvUrl: 'cv.pdf',
  canonicalUrl: 'https://192qq-maker.github.io/academic-homepage/en/',
  education: [
    {
      university: 'Anhui University',
      degree: 'Undergraduate',
      major: 'Mathematics and Applied Mathematics',
      startYear: 'Sophomore',
      endYear: 'September 2028 (expected)',
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
