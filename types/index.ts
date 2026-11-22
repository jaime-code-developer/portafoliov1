// ============================================================
// TypeScript Interfaces & Types — Portfolio
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techs: string[];
  category: ProjectCategory;
  image?: string;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  client?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export type ProjectCategory =
  | "fullstack"
  | "frontend"
  | "backend"
  | "mobile"
  | "infrastructure"
  | "security"
  | "networking"
  | "tooling";

export interface SkillGroup {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind gradient classes
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export type SkillLevel = "expert" | "advanced" | "intermediate" | "learning";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  techs: string[];
  type: "full-time" | "freelance" | "contract" | "personal";
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string; // Lucide icon name
  username: string;
}

export type VideoCategory = "all" | "sysadmin" | "docker" | "redes" | "seguridad";

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  youtubeId?: string;
  category: "sysadmin" | "docker" | "redes" | "seguridad";
  categoryLabel: string;
  tags: string[];
  duration?: string;
  featured?: boolean;
  publishedAt?: string;
}
