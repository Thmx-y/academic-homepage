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
  cvUrl: string;
  canonicalUrl: string;
  education: Education[];
  academicInterests: string[];
  coursework: string[];
}

export interface Award {
  name: string;
  competition: string;
  level?: string;
  date: string;
  description?: string;
  url?: string;
}

export interface Experience {
  title: string;
  organization?: string;
  advisor?: string;
  date: string;
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
