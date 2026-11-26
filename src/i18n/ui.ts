export type SiteLanguage = 'zh' | 'en';

export interface UiText {
  htmlLang: 'zh-CN' | 'en';
  home: string;
  primaryNavigation: string;
  contactLinks: string;
  onThisPage: string;
  nav: {
    about: string;
    education: string;
    awards: string;
    experience: string;
    projects: string;
    cv: string;
    coursework: string;
    resources: string;
    contact: string;
  };
  selectedCoursework: string;
  completedCoursework: string;
  currentCoursework: string;
  awardsTitle: string;
  experienceTitle: string;
  projectsTitle: string;
  selectedCourseworkLabel: string;
  advisor: string;
  topics: string;
  methods: string;
  role: string;
  rank: string;
  github: string;
  liveDemo: string;
  report: string;
  downloadCv: string;
  cvEyebrow: string;
  cvTitle: string;
  cvDescription: string;
  contactDescription: string;
  footer: string;
  skipText: string;
  switchLanguage: string;
  switchTheme: string;
  lightTheme: string;
  darkTheme: string;
  pending: string;
  aboutPending: string;
  projectsPending: string;
  cvPendingTitle: string;
  cvPendingDescription: string;
  resourcesDescription: string;
  resourceRepository: string;
  resourcesCategories: {
    'past-exams': string;
    notes: string;
    other: string;
  };
  resourcesEmpty: string;
  resourcePending: string;
  viewResource: string;
  downloadResource: string;
}

export const ui: Record<SiteLanguage, UiText> = {
  zh: {
    htmlLang: 'zh-CN',
    home: '首页',
    primaryNavigation: '主导航',
    contactLinks: '联系方式与个人链接',
    onThisPage: '本页目录',
    nav: {
      about: '关于我',
      education: '教育经历',
      awards: '奖项与竞赛',
      experience: '科研与经历',
      projects: '项目',
      cv: '简历',
      coursework: '课程',
      resources: '学习资料',
      contact: '联系我',
    },
    selectedCoursework: '主要课程',
    completedCoursework: '已修课程',
    currentCoursework: '正在修读',
    awardsTitle: '奖项与竞赛',
    experienceTitle: '科研与相关经历',
    projectsTitle: '代表项目',
    selectedCourseworkLabel: '相关课程：',
    advisor: '指导教师',
    topics: '主题',
    methods: '方法',
    role: '我的工作',
    rank: '排名',
    github: 'GitHub',
    liveDemo: '在线演示',
    report: '项目报告',
    downloadCv: '下载简历',
    cvEyebrow: '个人简历',
    cvTitle: '一份简明的学术经历记录。',
    cvDescription: '集中展示教育经历、代表项目、竞赛奖项与相关经验。',
    contactDescription: '如需就学术交流、研究机会或项目进行联系，欢迎通过电子邮件与我沟通。',
    footer: '使用 Astro 构建，认真排版。',
    skipText: '跳至主要内容',
    switchLanguage: '切换语言',
    switchTheme: '切换配色模式',
    lightTheme: '切换至浅色模式',
    darkTheme: '切换至深色模式',
    pending: '待补充',
    aboutPending: '个人简介待补充。',
    projectsPending: '项目资料待补充。',
    cvPendingTitle: '简历待补充',
    cvPendingDescription: '暂未提供简历 PDF。',
    resourcesDescription: '资料保存在独立仓库，可按分类浏览和下载。',
    resourceRepository: '查看完整资料仓库',
    resourcesCategories: {
      'past-exams': '专业课往年真题',
      notes: '笔记与讲义',
      other: '教材与参考资料',
    },
    resourcesEmpty: '资料待上传。',
    resourcePending: '待上传',
    viewResource: '查看',
    downloadResource: '下载',
  },
  en: {
    htmlLang: 'en',
    home: 'Home',
    primaryNavigation: 'Primary navigation',
    contactLinks: 'Contact and profile links',
    onThisPage: 'On this page',
    nav: {
      about: 'About',
      education: 'Education',
      awards: 'Awards',
      experience: 'Experience',
      projects: 'Projects',
      cv: 'CV',
      coursework: 'Coursework',
      resources: 'Resources',
      contact: 'Contact',
    },
    selectedCoursework: 'Selected Coursework',
    completedCoursework: 'Completed',
    currentCoursework: 'In progress',
    awardsTitle: 'Awards & Competitions',
    experienceTitle: 'Research & Experience',
    projectsTitle: 'Selected Projects',
    selectedCourseworkLabel: 'Selected coursework:',
    advisor: 'Advisor',
    topics: 'Topics',
    methods: 'Methods',
    role: 'Role',
    rank: 'Rank',
    github: 'GitHub',
    liveDemo: 'Live demo',
    report: 'Report',
    downloadCv: 'Download CV',
    cvEyebrow: 'Curriculum Vitae',
    cvTitle: 'A concise record of my academic work.',
    cvDescription: 'Education, selected experience, awards, and projects in one document.',
    contactDescription: 'For academic correspondence, research opportunities, or project-related questions, email is the best way to reach me.',
    footer: 'Built with Astro. Typeset with care.',
    skipText: 'Skip to content',
    switchLanguage: 'Switch language',
    switchTheme: 'Switch color mode',
    lightTheme: 'Switch to light mode',
    darkTheme: 'Switch to dark mode',
    pending: 'To be added',
    aboutPending: 'Personal introduction to be added.',
    projectsPending: 'Project details to be added.',
    cvPendingTitle: 'CV to be added',
    cvPendingDescription: 'A CV PDF is not yet available.',
    resourcesDescription: 'Browse and download materials from a separate repository.',
    resourceRepository: 'View the full repository',
    resourcesCategories: {
      'past-exams': 'Past Examination Papers',
      notes: 'Notes & Handouts',
      other: 'Textbooks & References',
    },
    resourcesEmpty: 'Materials to be uploaded.',
    resourcePending: 'Upload pending',
    viewResource: 'View',
    downloadResource: 'Download',
  },
};
