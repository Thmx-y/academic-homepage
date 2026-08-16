import type { Profile } from '../types';

/** 已确认的个人资料；未提供的内容仍保留示例或留空。 */
export const profileZh: Profile = {
  name: '唐德军',
  role: '数学与应用数学专业本科生 · 大二',
  university: '安徽大学',
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
  canonicalUrl: 'https://192qq-maker.github.io/academic-homepage/',
  education: [
    {
      university: '安徽大学',
      degree: '本科在读',
      major: '数学与应用数学',
      startYear: '大二',
      endYear: '2028年9月（预计）',
    },
  ],
  academicInterests: [
    '数学分析',
    '线性代数',
    '概率论',
    '数学建模',
    '最优化方法',
    '数值方法',
    '计算数学',
  ],
  coursework: [
    '数学分析',
    '高等代数',
    '概率论',
    '常微分方程',
    '数值分析',
    '数学建模',
  ],
};
