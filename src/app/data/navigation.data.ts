export interface NavItem {
  id: string;
  label: string;
}

/** Section anchors used by the header navigation and scroll-spy. */
export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'azure', label: 'Azure' },
  { id: 'database', label: 'Database' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];
