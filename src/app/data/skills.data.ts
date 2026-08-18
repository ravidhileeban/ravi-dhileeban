import { EngineeringGroup, SkillGroup } from '../models/portfolio.models';

/** Core technology groups. Add or remove entries without touching components. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    note: 'Building responsive, component-driven interfaces in Angular.',
    level: 'core',
    skills: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Angular Material',
      'PrimeNG',
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    note: 'REST APIs, business logic and service layers on .NET.',
    level: 'core',
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'ASP.NET MVC',
      'Web API',
      'Entity Framework Core',
      'Dapper',
      'REST APIs',
      'CRUD application development',
      'ABP Framework',
      'Postman / API testing',
    ],
  },
  {
    id: 'database',
    name: 'Database',
    note: 'Schema design, queries and performance work.',
    level: 'core',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'Database design',
      'Complex SQL queries',
      'Stored procedures',
      'Query optimisation',
    ],
  },
  {
    id: 'cloud',
    name: 'Azure & Cloud',
    note: 'Working experience with the Azure services used in my projects.',
    level: 'core',
    skills: [
      'Microsoft Azure',
      'Azure Key Vault',
      'Azure Storage',
      'Azure Blob Storage',
      'Azure Queue Storage',
      'Azure Functions',
    ],
  },
  {
    id: 'tooling',
    name: 'Tooling & Process',
    note: 'How the work gets tracked, reviewed and shipped.',
    level: 'core',
    skills: ['Git', 'GitHub', 'GitLab', 'Visual Studio 2022', 'Postman', 'Agile / Scrum'],
  },
  {
    id: 'foundational',
    name: 'Additional / Foundational Technologies',
    note: 'Working knowledge at a foundational level — not my primary specialisation.',
    level: 'foundational',
    skills: ['CI/CD', 'Docker', 'Kafka'],
  },
];

/** Practical engineering concepts applied in day-to-day development. */
export const ENGINEERING_GROUPS: EngineeringGroup[] = [
  {
    name: 'Language & Design',
    items: [
      'Object-Oriented Programming',
      'SOLID principles',
      'Dependency Injection',
      'Service layer',
      'Repository pattern',
      'DTOs',
    ],
  },
  {
    name: 'API Development',
    items: [
      'REST API design',
      'CRUD operations',
      'Authentication / Authorization',
      'Validation',
      'Exception handling',
      'Logging',
      'API integration',
    ],
  },
  {
    name: 'Data Access',
    items: [
      'Entity Framework Core',
      'Dapper',
      'Database design',
      'SQL optimisation',
      'Pagination',
      'Searching & filtering',
    ],
  },
  {
    name: 'Delivery',
    items: [
      'Git branching & pull requests',
      'Code review',
      'Debugging & root-cause analysis',
      'Agile / Scrum ceremonies',
    ],
  },
];
