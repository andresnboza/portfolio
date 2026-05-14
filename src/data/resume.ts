export const personal = {
  name: 'Andres Navarrete Boza',
  title: 'Software Architect & Senior Software Engineer',
  tagline: 'Building intelligent systems that scale — from architecture to deployment.',
  email: 'andresnboza92@gmail.com',
  github: 'https://github.com/andresnboza',
  linkedin: 'https://linkedin.com/in/andresnboza',
  location: 'Remote',
}

export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  description: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    company: 'Serverless Solutions',
    role: 'Senior Software Engineer',
    period: 'Aug 2022 — Present',
    location: 'Costa Rica / USA (Remote)',
    description: [
      'Led deployment and stabilization of a microservices system for a global oil terminal management client, implementing async communication via Azure Service Bus with dead-lettering.',
      'Architected secure SAP/ERP integrations using Azure App Registrations and OAuth2 to manage critical invoice and inventory flows.',
      'Reduced cloud infrastructure costs by optimizing Azure Monitor telemetry and logging; performed deep-dive troubleshooting of Azure Container Apps, networking, and deployment pipelines.',
      'Reverse-engineered a mission-critical application in 3 months, transitioning it to production by optimizing long-running Stored Procedures and Entity Framework commits.',
      'Delivered a mobile application for heavy equipment rental through full iOS and Android app store lifecycles.',
      'Built a loyalty web and mobile platform with scalable backend services and high-performance frontend interfaces.',
      'Acted as technical bridge for QA teams through pair programming and initiated comprehensive project documentation with architectural flowcharts.',
    ],
    tech: ['Azure Service Bus', 'Azure Container Apps', 'SAP/ERP', 'OAuth2', 'Entity Framework', 'React Native', 'TypeScript'],
  },
  {
    company: 'IBM / Kyndryl',
    role: 'Senior Software Engineer / DevOps Engineer',
    period: 'Feb 2021 — Aug 2022',
    location: 'Costa Rica, Heredia',
    description: [
      'Advanced the Multi-Cloud Management Platform (MCMP) by implementing GitOps practices using ArgoCD and maintaining Kubernetes clusters.',
      'Engineered automated CI/CD pipelines with GitHub Actions and Ansible for consistent multi-cloud asset deployments across global tenants.',
      'Created standardized Infrastructure-as-Code templates for cloud resource provisioning with security and compliance across AWS, Azure, and GCP.',
    ],
    tech: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Ansible', 'AWS', 'Azure', 'GCP', 'Terraform'],
  },
  {
    company: 'Midware',
    role: 'Software Engineer',
    period: 'Sep 2020 — Feb 2021',
    location: 'Costa Rica, San José',
    description: [
      'Reduced data migration time from one week to two hours through rigorous database optimization.',
      'Developed full-stack features for US-based e-commerce companies using modern JavaScript frameworks.',
    ],
    tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'React'],
  },
  {
    company: 'Grupo Asesor',
    role: 'QA & Software Developer',
    period: 'Jul 2020 — Sep 2021',
    location: 'Costa Rica, San José',
    description: [
      'Contributed to a proprietary .NET Core framework, enhancing backend templates and interface development.',
    ],
    tech: ['.NET Core', 'C#'],
  },
  {
    company: 'University of Costa Rica',
    role: 'Senior Software Engineer',
    period: 'Jul 2018 — Jul 2019',
    location: 'Costa Rica, San José',
    description: [
      'Independently designed and deployed a comprehensive MEAN stack application, leading the entire SDLC.',
    ],
    tech: ['MongoDB', 'Express', 'Angular', 'Node.js'],
  },
  {
    company: 'Tek Experts',
    role: 'Software Specialist',
    period: 'Jan 2018 — Jul 2018',
    location: 'Costa Rica, San José',
    description: [
      'Provided advanced Linux server troubleshooting, resolving critical system crashes and performance bottlenecks.',
    ],
    tech: ['Linux', 'Bash'],
  },
]

export interface Project {
  name: string
  description: string
  longDescription?: string
  highlights?: string[]
  tech: string[]
  github?: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    name: 'Oil Terminal Management Platform',
    description: 'Microservices system for a global oil terminal client with async messaging and SAP/ERP integrations.',
    longDescription:
      'A complex, distributed microservices platform for a global oil terminal management client. Brought in to drive production readiness — stabilizing the system, eliminating critical bugs, improving response times, and delivering new features while owning end-to-end deployment.',
    highlights: [
      'Led production readiness: resolved critical bugs, stabilized deployment pipelines, and reduced system downtime',
      'Evaluated and improved API response times through profiling, query optimization, and caching strategies',
      'Implemented async communication via Azure Service Bus with dead-letter queue handling and retry policies',
      'Architected OAuth2-secured SAP/ERP integrations managing invoice and inventory flows',
      'Developed new product features from design to deployment on Azure Container Apps',
      'Reduced cloud costs by optimizing Azure Monitor telemetry and restructuring logging strategies',
    ],
    tech: ['Azure Service Bus', 'Azure Container Apps', 'SAP/ERP', 'OAuth2', '.NET', 'TypeScript', 'Entity Framework'],
    featured: true,
  },
  {
    name: 'Heavy Equipment Rental App',
    description: 'Cross-platform mobile application for heavy equipment rental, shipped through iOS and Android stores.',
    longDescription:
      'A full-lifecycle mobile application for a heavy equipment rental company, enabling customers to browse inventory, manage reservations, and track equipment availability in real time.',
    highlights: [
      'Managed the full app lifecycle from development to publication on both iOS and Android stores',
      'Built scalable backend services to handle real-time equipment availability and booking flows',
      'Integrated push notifications and in-app tracking for rental status updates',
    ],
    tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Azure'],
    featured: true,
  },
  {
    name: 'Hospitality Loyalty Platform',
    description: 'Web and mobile loyalty platform for a hospitality brand with high-performance frontend and scalable backend.',
    longDescription:
      'A loyalty and rewards platform for a hospitality brand, enabling guests to accumulate points, redeem rewards, and manage their profile across web and mobile surfaces.',
    highlights: [
      'Designed scalable backend services supporting thousands of concurrent loyalty transactions',
      'Built high-performance frontend interfaces with smooth UX for web and mobile',
      'Implemented secure authentication and points ledger with audit trails',
    ],
    tech: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Azure'],
    featured: true,
  },
  {
    name: 'Multi-Cloud Management Platform',
    description: 'GitOps-driven platform managing Kubernetes clusters and CI/CD pipelines across AWS, Azure, and GCP.',
    longDescription:
      'Contributed to IBM/Kyndryl\'s Multi-Cloud Management Platform (MCMP), enabling enterprise clients to provision, manage, and monitor cloud resources across multiple providers from a single control plane.',
    highlights: [
      'Implemented GitOps workflows using ArgoCD for declarative, version-controlled deployments',
      'Engineered automated CI/CD pipelines with GitHub Actions and Ansible across global tenants',
      'Created standardized IaC templates for cloud resource provisioning with security and compliance guardrails',
    ],
    tech: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Ansible', 'Terraform', 'AWS', 'Azure', 'GCP'],
    featured: false,
  },
  {
    name: 'UCR MEAN Stack Application',
    description: 'End-to-end MEAN stack application designed and deployed independently for the University of Costa Rica.',
    longDescription:
      'A comprehensive full-stack application built for the University of Costa Rica, independently leading the entire Software Development Life Cycle from requirements gathering to production deployment.',
    highlights: [
      'Led the full SDLC independently — architecture, development, testing, and deployment',
      'Built RESTful APIs with Node.js/Express and a dynamic Angular frontend',
      'Deployed on cloud infrastructure with CI/CD automation',
    ],
    tech: ['MongoDB', 'Express', 'Angular', 'Node.js'],
    featured: false,
  },
]

export const education = {
  degree: "Bachelor's in Computer Engineering",
  emphasis: 'Software Development Emphasis',
  school: 'University of Costa Rica',
  year: 'December 2020',
}

export const certifications = [
  {
    name: 'AZ-104 Microsoft Azure Administrator',
    issuer: 'Microsoft',
    date: 'December 2024',
  },
  {
    name: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    date: 'March 2021',
  },
]

export const skills = {
  'AI / ML': ['LangChain', 'OpenAI API', 'RAG', 'Agents', 'Fine-tuning', 'Vector DBs'],
  'Languages': ['TypeScript', 'Python', 'Go', 'Javascript', "C#"],
  'Frontend': ['React', 'Angular', 'Tailwind CSS'],
  'Backend': ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', '.NET', 'C#'],
  'Cloud & Infra': ['Azure', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
}
