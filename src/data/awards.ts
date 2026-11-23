import type { Award } from './types';

// Real awards are ordered newest first. Retained examples use hidden: true.
export const awards: Award[] = [
  {
    name: 'National Second Prize',
    competition: '2026 China Undergraduate Mathematical Contest in Modeling (CUMCM)',
    level: 'National',
    date: '2026',
  },
  {
    name: 'Provincial Third Prize',
    competition: '17th Chinese Mathematics Competitions (CMC), Mathematics Category A',
    level: 'Provincial',
    date: '2025',
  },
  {
    name: 'Award Result Placeholder',
    hidden: true,
    competition: 'Chinese Mathematics Competitions',
    level: 'Level / Category',
    date: '2026',
    description: 'Add the division, result, and a concise factual description here.',
  },
  {
    name: 'Modeling Competition Placeholder',
    hidden: true,
    competition: 'Undergraduate Mathematical Contest in Modeling',
    level: 'Team award / participation',
    date: '2025',
    description: 'Briefly state the problem area and your contribution to the team.',
  },
  {
    name: 'Scholarship Placeholder',
    hidden: true,
    competition: 'University Name',
    date: '2025',
    description: 'Replace this entry with the official scholarship name and basis.',
  },
];
