export type ThemeMode = 'light' | 'dark';

export type VerificationStatus = 'TERVERIFIKASI' | 'PERLU_VERIFIKASI' | 'TIDAK_DIGUNAKAN';

export interface VerifiedPhoto {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  year: string;
  date?: string;
  activityName: string;
  location: string;
  sourceName: string;
  sourceUrl: string;
  articleTitle?: string;
  photographer?: string;
  verified: boolean;
  verificationStatus: VerificationStatus;
  usageContext: string;
  licenseOrCreditNote: string;
  verificationProof: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  impactHighlight: string;
  beneficiaries: string;
  activitiesList: string[];
}

export type ActivityCategory = 
  | 'Semua' 
  | 'Literasi' 
  | 'Membaca' 
  | 'Anak' 
  | 'Seni' 
  | 'Budaya' 
  | 'Digital' 
  | 'Lingkungan' 
  | 'Relawan' 
  | 'Pelatihan' 
  | 'Kampung Membaca';

export interface Activity {
  id: string;
  title: string;
  date: string;
  location: string;
  category: ActivityCategory;
  summary: string;
  description: string;
  image: string;
  source: string;
  sourceUrl?: string;
  photographer?: string;
  verified: boolean;
  verificationProof?: string;
  tags: string[];
}

export type GalleryCategory = 
  | 'Semua' 
  | 'Membaca' 
  | 'Anak' 
  | 'Literasi' 
  | 'Komunitas' 
  | 'Seni' 
  | 'Budaya' 
  | 'Pojok Baca' 
  | 'Relawan';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  caption: string;
  year: string;
  attribution: string;
  sourceUrl?: string;
  sourceName?: string;
  photographer?: string;
  verified: boolean;
  verificationStatus?: VerificationStatus;
  featured?: boolean;
}

export type ArticleCategory = 
  | 'Semua' 
  | 'Literasi' 
  | 'Pendidikan' 
  | 'Komunitas' 
  | 'Anak' 
  | 'Digital' 
  | 'Budaya' 
  | 'Lingkungan' 
  | 'Sejarah';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  fullContent: string[];
  externalSourceUrl: string;
  externalSourceName: string;
  tags: string[];
  featured?: boolean;
}

export interface AcademicResearch {
  title: string;
  authors: string[];
  journal: string;
  volume: string;
  year: string;
  link: string;
  doi?: string;
  abstract: string;
  keyInsights: {
    title: string;
    description: string;
  }[];
  methodology: string;
}

export type AchievementCategory = 'komunitas' | 'individu' | 'pengelola';

export interface Achievement {
  id: string;
  title: string;
  category: AchievementCategory;
  categoryLabel: string;
  year: string;
  issuer: string;
  recipient: string;
  description: string;
  verifiedSource: string;
  badgeType: 'gold' | 'emerald' | 'amber';
}

export interface Figure {
  id: string;
  name: string;
  nickname: string;
  role: string;
  bio: string;
  quote: string;
  contribution: string;
  avatar: string;
  sourceUrl?: string;
  sourceName?: string;
  verified: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconType: 'founding' | 'saung' | 'award' | 'champion' | 'research' | 'expansion' | 'today';
}

export interface SupportOption {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  actionGuide: string;
  verifiedNote: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  whatsapp: string;
  domicile: string;
  interests: string[];
  skills: string;
  message: string;
}

