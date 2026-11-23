import type { Profile } from '../types';

/** 已确认的个人资料；未提供的内容仍保留示例或留空。 */
export const profileZh: Profile = {
  name: '唐德军',
  role: '数学与应用数学专业本科生 · 大三',
  university: '安徽大学',
  location: '合肥',
  introduction: '',
  about: [],
  email: {
    user: 'a124300084',
    domain: 'stu.ahu.edu.cn',
  },
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Thmx-y' },
  ],
  // 将真实简历放入 public/ 后，添加 cvUrl: 'cv.pdf'。
  canonicalUrl: 'https://thmx-y.github.io/academic-homepage/',
  education: [
    {
      university: '安徽大学',
      degree: '本科在读',
      major: '数学与应用数学',
      startYear: '2024年9月',
      endYear: '2028年9月（预计）',
      location: '合肥',
      gpa: '3.98 / 5.00',
      ranking: '4 / 110',
    },
  ],
  academicInterests: [],
  coursework: [
    '数学分析',
    '高等代数',
    '解析几何',
    '概率论',
    '常微分方程',
    '实变函数',
    '近世代数',
    '复变函数',
    '数理统计',
  ],
  currentCoursework: [
    '泛函分析',
    '微分几何',
    '拓扑学',
    '数值分析',
    '解析数论',
  ],
};
