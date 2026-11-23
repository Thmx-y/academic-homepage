import type { StudyResource } from './types';

// 资料保存在独立仓库，主页只维护链接，不复制文件。
export const resourceRepositoryUrl = 'https://github.com/Thmx-y/ahu-math-resources';

// 中英文标题共用一条记录；中文目录名保持与资料仓库一致。
const directoryUrl = (directory: string) =>
  `${resourceRepositoryUrl}/tree/main/${encodeURIComponent(directory)}`;

export const resources: StudyResource[] = [
  {
    title: { zh: '浏览试卷、练习与答案', en: 'Browse papers, exercises, and solutions' },
    category: 'past-exams',
    url: directoryUrl('往年真题及练习'),
  },
  {
    title: { zh: '浏览笔记与讲义', en: 'Browse notes and handouts' },
    category: 'notes',
    url: directoryUrl('笔记与讲义'),
  },
  {
    title: { zh: '浏览教材与参考资料', en: 'Browse textbooks and references' },
    category: 'other',
    url: directoryUrl('教材与参考资料'),
  },
];
