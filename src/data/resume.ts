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
  id: string
  company: string
  role: string
  period: string
  location?: string
  tech: string[]
}

export const experience: Experience[] = [
  {
    id: 'serverless',
    company: 'Serverless Solutions',
    role: 'Senior Software Engineer',
    period: 'Aug 2022 — Present',
    location: 'Costa Rica / USA (Remote)',
    tech: ['Azure Service Bus', 'Azure Container Apps', 'SAP/ERP', 'OAuth2', 'Entity Framework', 'React Native', 'TypeScript'],
  },
  {
    id: 'ibm',
    company: 'IBM / Kyndryl',
    role: 'Senior Software Engineer / DevOps Engineer',
    period: 'Feb 2021 — Aug 2022',
    location: 'Costa Rica, Heredia',
    tech: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Ansible', 'AWS', 'Azure', 'GCP', 'Terraform'],
  },
  {
    id: 'midware',
    company: 'Midware',
    role: 'Software Engineer',
    period: 'Sep 2020 — Feb 2021',
    location: 'Costa Rica, San José',
    tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'React'],
  },
  {
    id: 'grupoAsesor',
    company: 'Grupo Asesor',
    role: 'QA & Software Developer',
    period: 'Jul 2020 — Sep 2021',
    location: 'Costa Rica, San José',
    tech: ['.NET Core', 'C#'],
  },
  {
    id: 'ucr',
    company: 'University of Costa Rica',
    role: 'Senior Software Engineer',
    period: 'Jul 2018 — Jul 2019',
    location: 'Costa Rica, San José',
    tech: ['MongoDB', 'Express', 'Angular', 'Node.js'],
  },
  {
    id: 'tekExperts',
    company: 'Tek Experts',
    role: 'Software Specialist',
    period: 'Jan 2018 — Jul 2018',
    location: 'Costa Rica, San José',
    tech: ['Linux', 'Bash'],
  },
]

export interface Project {
  i18nKey: string
  name: string
  tech: string[]
  github?: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    i18nKey: 'oilTerminal',
    name: 'Oil Terminal Management Platform',
    tech: ['Azure Service Bus', 'Azure Container Apps', 'SAP/ERP', 'OAuth2', '.NET', 'TypeScript', 'Entity Framework'],
    featured: true,
  },
  {
    i18nKey: 'heavyEquipment',
    name: 'Heavy Equipment Rental App',
    tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Azure'],
    featured: true,
  },
  {
    i18nKey: 'hospitality',
    name: 'Hospitality Loyalty Platform',
    tech: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Azure'],
    featured: true,
  },
  {
    i18nKey: 'mcmp',
    name: 'Multi-Cloud Management Platform',
    tech: ['Kubernetes', 'ArgoCD', 'GitHub Actions', 'Ansible', 'Terraform', 'AWS', 'Azure', 'GCP'],
    featured: false,
  },
  {
    i18nKey: 'ucr',
    name: 'UCR MEAN Stack Application',
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
