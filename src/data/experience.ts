import type { Experience } from './types';

// 按已确认的项目资料维护；未使用的占位示例继续隐藏。
export const experiences: Experience[] = [
  {
    title: 'Combination Forecasting Models Based on PROMETHEE II and Their Applications',
    organization: 'Anhui University · National Undergraduate Innovation Training Program (ongoing)',
    advisor: 'Ligang Zhou; Yuanyuan Zhou',
    date: 'Nov 2025 — Present',
    description: 'Developing a coronary heart disease risk prediction model using the Framingham dataset. The project compares logistic regression, support vector machines, random forests, and CatBoost, then uses PROMETHEE II and a Softmax mapping to determine ensemble weights. The resulting model is compared with individual models and a simple weighted-average ensemble. As project lead, responsible for mathematical modeling, manuscript writing, and coordinating team tasks and research progress.',
    topics: ['Ensemble prediction', 'Multicriteria decision analysis', 'Machine learning'],
  },
  {
    title: 'Reading Project Placeholder',
    hidden: true,
    organization: 'Department of Mathematics, University Name',
    date: 'Spring 2026',
    description:
      'A guided reading project on a selected topic. Replace this text with the question studied, the material covered, and the concrete outcome.',
    topics: ['Analysis', 'Proof writing', 'Literature review'],
  },
  {
    title: 'Mathematical Modeling Experience Placeholder',
    hidden: true,
    date: 'Autumn 2025',
    description:
      'Developed and evaluated a mathematical model for a sample problem, with attention to assumptions, sensitivity, and interpretation.',
    topics: ['Optimization', 'Simulation', 'Numerical methods'],
  },
];
