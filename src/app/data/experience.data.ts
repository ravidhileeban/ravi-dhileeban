import { ExperienceRole } from '../models/portfolio.models';

/**
 * Career timeline, most recent first.
 * NOTE: the internship employer is not stated in the source resume — replace
 * the [COMPANY NAME] placeholder before publishing.
 */
export const EXPERIENCE: ExperienceRole[] = [
  {
    position: 'Full Stack Developer',
    company: 'Kloudping IT Solutions',
    period: 'April 2024 — Present',
    stage: 'Current role',
    current: true,
    domains: ['HRMS', 'CRM', 'Insurance', 'Port Billing', 'NGO / Trust'],
    responsibilities: [
      'Develop and maintain enterprise web applications using Angular 15+, TypeScript, .NET Core 6/8 and Entity Framework Core.',
      'Design and optimise RESTful APIs covering CRUD endpoints, business logic layers and microservice endpoints.',
      'Integrate Azure Key Vault, Blob Storage and Azure Functions for secret management, file storage and automation.',
      'Write and tune SQL Server queries and stored procedures supporting application features.',
      'Take part in Agile ceremonies — sprint planning, stand-ups and retrospectives.',
    ],
    contributions: [
      'Implemented OAuth2 and payment integrations including Google, Facebook, LinkedIn and Razorpay.',
      'Improved system throughput by optimising SQL Server queries and stored procedures.',
      'Delivered features across five product domains, from port call billing to HR and CRM modules.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      '.NET Core 6/8',
      'C#',
      'Entity Framework Core',
      'Web API',
      'SQL Server',
      'Azure Key Vault',
      'Azure Blob Storage',
      'Azure Functions',
      'ABP Framework',
    ],
  },
  {
    position: 'Junior Full Stack Developer',
    company: 'Kloudping IT Solutions',
    period: 'July 2023 — March 2024',
    stage: 'Progression',
    current: false,
    domains: ['HRMS', 'CRM'],
    responsibilities: [
      'Built Angular screens and reusable components against .NET Core Web APIs.',
      'Implemented CRUD operations and backend services for application modules.',
      'Wrote SQL Server queries and stored procedures for feature requirements.',
      'Tested and verified API endpoints with Postman during development.',
    ],
    contributions: [
      'Moved from supported tasks to owning end-to-end features across the Angular and .NET stack.',
      'Contributed sprint features on schedule within an Agile/Scrum team.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      '.NET Core',
      'C#',
      'Entity Framework',
      'Web API',
      'SQL Server',
      'Postman',
      'Git',
    ],
  },
  {
    position: 'Intern — Web Developer',
    company: '[COMPANY NAME]',
    period: 'March 2023 — June 2023',
    stage: 'Starting point',
    current: false,
    domains: ['Web application development'],
    responsibilities: [
      'Learned the full stack workflow used on live projects: Angular on the frontend, ASP.NET Core Web API on the backend and SQL Server for data.',
      'Worked on assigned development tasks under review from senior developers.',
    ],
    contributions: [
      'Built the foundation in C#, Angular and relational databases that the junior developer role was based on.',
    ],
    technologies: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server'],
  },
];
