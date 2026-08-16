import type { Profile } from '../types';

/** 中文占位资料：发布前请替换为经过确认的真实信息。 */
export const profileZh: Profile = {
  name: '你的姓名',
  role: '数学专业本科生',
  university: '大学名称',
  location: '城市，中国',
  introduction: '数学专业本科生，关注数学分析、概率论、数学建模与计算数学。',
  about: [
    '我是一名数学专业本科生。目前主要学习数学分析、概率论与优化，并尝试使用计算方法研究和理解数学问题。',
    '除课程学习外，我也在逐步参与数学竞赛、数学建模与研究导向的阅读项目。本网站用于整理和记录阶段性的学术经历。',
  ],
  email: {
    user: 'your.name',
    domain: 'example.edu',
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/192qq-maker' },
  ],
  cvUrl: 'cv.pdf',
  canonicalUrl: 'https://192qq-maker.github.io/academic-homepage/',
  education: [
    {
      university: '大学名称',
      degree: '理学学士',
      major: '数学与应用数学',
      startYear: '2024',
      endYear: '2028（预计）',
      location: '城市，中国',
      coursework: ['数学分析', '高等代数', '概率论'],
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
