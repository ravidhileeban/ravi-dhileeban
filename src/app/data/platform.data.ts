import {
  ArchitectureLayer,
  CloudService,
  DatabaseGroup,
  WorkflowStep,
} from '../models/portfolio.models';

/** Request path through a typical application I work on, top to bottom. */
export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    name: 'Presentation',
    detail: 'Component-driven screens, reactive forms and typed HTTP services.',
    tech: 'Angular · TypeScript',
  },
  {
    name: 'Transport',
    detail: 'HTTP requests carrying JSON payloads, with auth tokens on protected routes.',
    tech: 'HTTP / REST',
  },
  {
    name: 'API Surface',
    detail: 'Routed endpoints, model binding, validation and consistent error responses.',
    tech: 'ASP.NET Core Web API · Controllers',
  },
  {
    name: 'Business Logic',
    detail: 'Service layer holding the rules, mapped to and from DTOs.',
    tech: 'C# Services · DTOs',
  },
  {
    name: 'Data Access',
    detail: 'EF Core for the model-driven work, Dapper where a hand-written query is the better fit.',
    tech: 'Entity Framework Core · Dapper',
  },
  {
    name: 'Database',
    detail: 'Normalised schema, indexes, stored procedures and tuned queries.',
    tech: 'SQL Server · PostgreSQL',
  },
];

/** Azure services referenced alongside the request path. */
export const ARCHITECTURE_CLOUD: string[] = [
  'Azure Key Vault',
  'Azure Blob Storage',
  'Azure Queue Storage',
  'Azure Functions',
  'Azure Storage',
];

export const CLOUD_SERVICES: CloudService[] = [
  {
    name: 'Azure Key Vault',
    description: 'Secure application secrets and configuration.',
    usage: 'Connection strings, API keys and client secrets read at runtime instead of living in source control.',
  },
  {
    name: 'Azure Blob Storage',
    description: 'Store documents, files and application assets.',
    usage: 'Uploaded documents and generated files kept outside the database and served on demand.',
  },
  {
    name: 'Azure Queue Storage',
    description: 'Support asynchronous and decoupled processing.',
    usage: 'Work that does not need to block the request handed off to a queue for a consumer to pick up.',
  },
  {
    name: 'Azure Functions',
    description: 'Run event-driven or scheduled serverless workloads.',
    usage: 'Background and scheduled tasks kept out of the main API process.',
  },
  {
    name: 'Azure Storage',
    description: 'The storage account backing blobs and queues.',
    usage: 'Containers, access configuration and connection details managed per environment.',
  },
];

export const DATABASE_GROUPS: DatabaseGroup[] = [
  {
    name: 'Platforms',
    detail: 'The relational engines I build against.',
    items: ['SQL Server', 'PostgreSQL'],
  },
  {
    name: 'Schema & Modelling',
    detail: 'Designing the tables features are built on.',
    items: ['Database design', 'Normalisation', 'Relationships & constraints', 'Indexes'],
  },
  {
    name: 'Querying',
    detail: 'Reading data the way the screen actually needs it.',
    items: ['Joins', 'Subqueries', 'CTEs', 'Aggregation', 'Pagination', 'Filtering'],
  },
  {
    name: 'Programmability',
    detail: 'Logic that belongs in the database.',
    items: ['Stored procedures', 'Transactions', 'Views'],
  },
  {
    name: 'Performance',
    detail: 'Making existing queries faster rather than adding more of them.',
    items: ['Query optimisation', 'Execution plan review', 'Indexing strategy'],
  },
  {
    name: 'Data Access',
    detail: 'Connecting the database to the application layer.',
    items: ['Entity Framework Core', 'Dapper', 'Migrations', 'Repository pattern'],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 'Requirement',
    detail: 'Story picked up in sprint planning, acceptance criteria and edge cases clarified before coding.',
    tools: ['Agile / Scrum'],
  },
  {
    step: 'Development',
    detail: 'Feature built across the Angular UI, the API and the database layer.',
    tools: ['Angular', 'ASP.NET Core', 'SQL'],
  },
  {
    step: 'Version Control',
    detail: 'Work isolated on a feature branch with focused, readable commits.',
    tools: ['Git', 'GitHub', 'GitLab'],
  },
  {
    step: 'Code Review',
    detail: 'Pull request raised, feedback addressed before merge.',
    tools: ['Pull requests', 'Azure DevOps'],
  },
  {
    step: 'Build',
    detail: 'Application compiled and packaged for the target environment.',
    tools: ['.NET CLI', 'Angular CLI'],
  },
  {
    step: 'Testing',
    detail: 'Endpoints exercised and UI flows verified against the acceptance criteria.',
    tools: ['Postman', 'Manual verification'],
  },
  {
    step: 'CI/CD',
    detail: 'Automated pipelines run the build and deployment steps. Foundational knowledge for me.',
    tools: ['CI/CD', 'Azure DevOps', 'Docker'],
  },
  {
    step: 'Deployment',
    detail: 'Release promoted to the environment and verified after it lands.',
    tools: ['Azure'],
  },
];
