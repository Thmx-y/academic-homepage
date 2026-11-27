import type { Award } from '../types';

// 真实奖项按年份倒序排列；保留的占位示例使用 hidden: true 隐藏。
export const awardsZh: Award[] = [
  {
    name: '全国二等奖',
    competition: '2026 年高教社杯全国大学生数学建模竞赛',
    level: '国家级',
    date: '2026',
  },
  {
    name: '优秀个人',
    competition: '暑期社会实践',
    date: '2026',
  },
  {
    name: '国家励志奖学金',
    competition: '奖学金',
    level: '国家级',
    date: '2025—2026 学年',
  },
  {
    name: '省级三等奖',
    competition: '第十七届全国大学生数学竞赛（数学 A 类）',
    level: '省级',
    date: '2025',
  },
  {
    name: '国家励志奖学金',
    competition: '奖学金',
    level: '国家级',
    date: '2024—2025 学年',
  },
  {
    name: '获奖结果占位',
    hidden: true,
    competition: '全国大学生数学竞赛',
    level: '级别 / 组别',
    date: '2026',
    description: '请在这里填写参赛组别、获奖结果及一句简短的事实说明。',
  },
  {
    name: '数学建模竞赛占位',
    hidden: true,
    competition: '全国大学生数学建模竞赛',
    level: '团队奖项 / 参赛经历',
    date: '2025',
    description: '简要说明所选问题、采用的方法以及你在团队中的具体工作。',
  },
  {
    name: '奖学金占位',
    hidden: true,
    competition: '大学名称',
    date: '2025',
    description: '请替换为正式奖学金名称及评定依据。',
  },
];
