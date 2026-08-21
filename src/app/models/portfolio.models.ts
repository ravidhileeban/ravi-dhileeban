/** Shared content models. All portfolio copy lives in `src/app/data`. */

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  resumePath: string;
  summary: string[];
  highlights: string[];
  social: SocialLink[];
}

export interface SkillGroup {
  id: string;
  name: string;
  note: string;
  level: 'core' | 'foundational';
  skills: string[];
}

export interface EngineeringGroup {
  name: string;
  items: string[];
}

export interface ExperienceRole {
  position: string;
  company: string;
  period: string;
  stage: string;
  current: boolean;
  domains: string[];
  responsibilities: string[];
  contributions: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  category: string;
  summary: string;
  role: string;
  responsibilities: string[];
  highlights: string[];
  architecture: string[];
  technologies: string[];
  repoUrl: string | null;
  demoUrl: string | null;
}

export interface ArchitectureLayer {
  name: string;
  detail: string;
  tech: string;
}

export interface CloudService {
  name: string;
  description: string;
  usage: string;
}

export interface DatabaseGroup {
  name: string;
  detail: string;
  items: string[];
}

export interface WorkflowStep {
  step: string;
  detail: string;
  tools: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  result: string;
}
