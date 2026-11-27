import type { Profile } from './types';

/**
 * Confirmed profile data. Unprovided fields remain examples or are left empty.
 */
export const profile: Profile = {
  showPlaceholders: true,
  name: 'Dejun Tang',
  role: 'Mathematics and Applied Mathematics Undergraduate · Junior',
  university: 'Anhui University',
  location: 'Hefei',
  introduction: '',
  about: [],
  email: {
    user: 'a124300084',
    domain: 'stu.ahu.edu.cn',
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Thmx-y' },
  ],
  cvUrl: '唐德军_升学简历.pdf',
  canonicalUrl: 'https://thmx-y.github.io/academic-homepage/en/',
  education: [
    {
      university: 'Anhui University',
      degree: 'Undergraduate',
      major: 'Mathematics and Applied Mathematics',
      startYear: 'September 2024',
      endYear: 'September 2028 (expected)',
      location: 'Hefei',
      gpa: '3.98 / 5.00',
      ranking: '3 / 110',
    },
  ],
  coursework: [
    'Mathematical Analysis',
    'Advanced Algebra',
    'Analytic Geometry',
    'Probability Theory',
    'Ordinary Differential Equations',
    'Real Analysis',
    'Abstract Algebra',
    'Complex Analysis',
    'Mathematical Statistics',
  ],
  currentCoursework: [
    'Functional Analysis',
    'Differential Geometry',
    'Topology',
    'Numerical Analysis',
    'Analytic Number Theory',
  ],
};
