import { Education, Profile } from '../models/portfolio.models';

/** Update your name, contact details and social links here. */
export const PROFILE: Profile = {
  name: 'Ravi Dhileeban',
  title: 'Full Stack .NET & Angular Developer',
  tagline:
    'I build scalable, maintainable web applications with Angular, .NET, SQL Server and Microsoft Azure.',
  location: 'Tindivanam, India',
  email: 'dhileeban07@gmail.com',
  resumePath: 'assets/resume/Ravi-Dhileeban-Resume.pdf',
  summary: [
    'I am a full stack developer with 3+ years of professional experience building enterprise web applications end to end — from Angular interfaces through ASP.NET Core services down to the relational database and the Azure services around them.',
    'Day to day this means designing REST APIs, writing business and service layers in C#, modelling data with Entity Framework Core and Dapper, and writing the SQL that keeps those screens fast. I have delivered features across HRMS, CRM, insurance, port billing and NGO/trust products, which has made me comfortable picking up an unfamiliar domain and turning requirements into working, reviewable code.',
    'I care about code that the next developer can read: clear service boundaries, reusable Angular components, consistent DTOs, sensible validation and error handling. I enjoy the debugging side of the job as much as the building side — reproducing an issue, tracing it through the layers and fixing the actual cause.',
  ],
  highlights: [
    'Full stack delivery across Angular, ASP.NET Core, SQL Server and Azure',
    'Secure REST API design, CRUD workflows and third-party API integration',
    'Database design, stored procedures and query optimisation',
    'Agile/Scrum delivery — sprint planning, stand-ups and retrospectives',
  ],
  social: [
    {
      label: 'GitHub',
      url: 'https://github.com/ravidhileeban',
      handle: 'github.com/ravidhileeban',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ravi-dhileeban-kb-577a9118b/',
      handle: 'linkedin.com/in/ravi-dhileeban-kb',
    },
  ],
};

export const EDUCATION: Education[] = [
  {
    degree: 'M.Sc. Information Technology',
    institution: 'SRM University',
    year: '2023',
    result: 'CGPA 8.7',
  },
  {
    degree: 'B.Sc. Mathematics',
    institution: 'Loyola College',
    year: '2020',
    result: 'CGPA 5.7',
  },
];
