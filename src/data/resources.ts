import type { StudyResource } from './types';

// 在 public/resources/ 放入真实文件后，在此添加资料。
// 没有 url 的条目仅显示“待上传”，不会生成空链接。
// 中英文标题共用一条记录，同一份文件只需维护一个下载地址。
export const resources: StudyResource[] = [];
