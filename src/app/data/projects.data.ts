import { Project } from '../models/portfolio.models';

/** Featured projects. Replace `repoUrl` / `demoUrl` with real links when available. */
export const PROJECTS: Project[] = [
  {
    name: 'GeoConnect',
    category: 'Port Call Billing Platform',
    summary:
      'An enterprise platform for managing port calls, vessel services and the invoicing that follows them, built on the ABP Framework with an Angular frontend.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Built modules for port call creation, vessel services and invoice workflows.',
      'Implemented CRUD operations and backend services for port-related transactions.',
      'Developed Angular screens against .NET Core Web API endpoints.',
    ],
    highlights: [
      'Workflow-driven modules covering the path from port call to invoice.',
      'Service and data access layers structured around ABP Framework conventions.',
      'Relational schema and queries in SQL Server backing transactional records.',
    ],
    architecture: [
      'Angular UI',
      'REST API (ABP application services)',
      '.NET Core domain & service layer',
      'Entity Framework Core',
      'SQL Server',
    ],
    technologies: [
      'ABP Framework',
      'Angular',
      '.NET Core',
      'C#',
      'Entity Framework Core',
      'SQL Server',
    ],
    repoUrl: null,
    demoUrl: null,
  },
  {
    name: 'ElasticInsite',
    category: 'CRM & Sales Automation',
    summary:
      'A CRM product for lead management and customer tracking, with LinkedIn OAuth sign-in and Razorpay payment integration.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developed lead management and customer-tracking features across the stack.',
      'Integrated the LinkedIn OAuth API for authentication.',
      'Integrated the Razorpay payment gateway for transaction handling.',
      'Built Angular UI screens and reusable components backed by a secure .NET Core API.',
    ],
    highlights: [
      'OAuth2 authorisation flow wired into the application login path.',
      'Application secrets and configuration held in Azure Key Vault rather than source control.',
      'Reusable Angular components shared across CRM screens.',
    ],
    architecture: [
      'Angular 15 UI',
      'ASP.NET Core 6 Web API',
      'Service layer + Entity Framework',
      'SQL Server',
      'Azure Key Vault for secrets',
    ],
    technologies: [
      '.NET Core 6',
      'Angular 15',
      'C#',
      'Entity Framework',
      'Web API',
      'Azure Key Vault',
      'LinkedIn OAuth',
      'Razorpay',
    ],
    repoUrl: null,
    demoUrl: null,
  },
  {
    name: 'MyHR',
    category: 'Human Resource Management System',
    summary:
      'An HRMS covering the core people-operations modules an organisation runs on — employee records, attendance, leave and documents.',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developed the core HR modules: employee records, attendance, leave and documents.',
      'Built CRUD screens in Angular against ASP.NET Core Web API endpoints.',
      'Delivered sprint features on schedule within an Agile team.',
    ],
    highlights: [
      'All application secrets stored in Azure Key Vault.',
      'Entity Framework data model covering employee, attendance and leave records.',
      'Document handling attached to employee records.',
    ],
    architecture: [
      'Angular 15 UI',
      'ASP.NET Core 6 Web API',
      'Entity Framework data layer',
      'SQL Server',
      'Azure Key Vault for secrets',
    ],
    technologies: [
      '.NET Core 6',
      'Angular 15',
      'C#',
      'Entity Framework',
      'Web API',
      'Azure Key Vault',
    ],
    repoUrl: null,
    demoUrl: null,
  },
];
