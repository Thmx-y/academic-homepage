export interface SocialLink {
  label: string;
  url: string;
}

export interface Education {
  university: string;
  degree: string;
  major: string;
  startYear: string;
  endYear: string;
  location?: string;
  gpa?: string;
  ranking?: string;
  coursework?: string[];
}

export interface Profile {
  name: string;
  role: string;
  university: string;
  location?: string;
  introduction: string;
  about: string[];
  email: {
    user: string;
    domain: string;
  };
  socialLinks: SocialLink[];
  cvUrl?: string;
  canonicalUrl: string;
  education: Education[];
  academicInterests: string[];
  coursework: string[];
  currentCoursework?: string[];
  showPlaceholders?: boolean;
}

export interface Award {
  hidden?: boolean;
  name: string;
  competition: string;
  level?: string;
  date: string;
  description?: string;
  url?: string;
}

export interface Experience {
  hidden?: boolean;
  title: string;
  organization?: string;
  advisor?: string;
  date?: string;
  description: string;
  topics?: string[];
  url?: string;
}

export type ProjectKind =
  | 'Mathematical Modeling'
  | 'Mathematical Visualization'
  | 'Research'
  | 'Course Project'
  | 'Software'
  | '数学建模'
  | '数学可视化'
  | '科研项目'
  | '课程项目'
  | '软件项目';

export interface Project {
  hidden?: boolean;
  name: string;
  kind: ProjectKind;
  date: string;
  description: string;
  role?: string;
  topics?: string[];
  githubUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
}

export type ResourceCategory = 'past-exams' | 'notes' | 'other';

export interface StudyResource {
  title: { zh: string; en: string };
  category: ResourceCategory;
  description?: { zh: string; en: string };
  subject?: { zh: string; en: string };
  year?: string;
  format?: string;
  /** 支持外部资料链接；站内文件路径相对于 public/。 */
  url?: string;
  hidden?: boolean;
}
