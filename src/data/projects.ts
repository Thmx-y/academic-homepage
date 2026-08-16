import type { Project } from './types';

// Placeholder projects — do not present these as completed real work.
export const projects: Project[] = [
  {
    name: 'Mathematical Modeling Project',
    kind: 'Mathematical Modeling',
    date: '2026',
    description:
      'A placeholder computational study exploring optimization and simulation methods for a modeling problem. Replace this with the problem, method, and result.',
    role: 'Model formulation, implementation, and analysis',
    topics: ['Optimization', 'Simulation', 'Python'],
    githubUrl: 'https://github.com/192qq-maker',
  },
  {
    name: 'Interactive Mathematics Visualization',
    kind: 'Mathematical Visualization',
    date: '2025',
    description:
      'A placeholder interactive explanation of a mathematical concept using restrained web-based visualizations.',
    role: 'Independent design and development',
    topics: ['Geometry', 'Visualization', 'TypeScript'],
    demoUrl: 'https://example.com',
  },
  {
    name: 'Personal Software Project',
    kind: 'Software',
    date: '2025',
    description:
      'A placeholder for a small application designed and implemented independently. Summarize what it does and why it was built.',
    role: 'Independent developer',
    topics: ['Algorithms', 'Software design'],
  },
];
