/**
 * Central portfolio data for Mohamed Amine Khouchaf.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Sources: his CV (Khouchaf_MohamedAmine_CV), the GitHub profile (github.com/MedAmine04), its profile README
 * and the README of each pinned repository.
 * Nothing here should be added unless it can be backed up by one of those sources.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export type Portrait = { src: string; srcSet: string; thumb: string; alt: string };

export const profile = {
  fullName: 'Mohamed Amine Khouchaf',
  displayName: 'Amine Khouchaf',
  /** Two letters shown as a monogram while no portrait is set. */
  initials: 'MA',
  role: 'Data & AI Engineering Student',
  tagline: ['Data Engineering', 'Machine Learning', 'GenAI & Agents'],
  intro:
    'A fifth-year engineering student at EMSI specializing in Data & AI, with a solid base in Python, machine learning and generative AI (RAG, agents), plus full-stack and data engineering skills.',
  location: 'Casablanca, Morocco',
  email: 'khouchafamine1@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mohamed-amine-khouchaf',
    github: 'https://github.com/MedAmine04',
  },
  githubHandle: 'github.com/MedAmine04',
  /** The CV in public/assets. Set to null to hide the download and show the designed sheet only. */
  resumePdf: (import.meta.env.VITE_NO_PDF ? null : '/assets/Khouchaf_MohamedAmine_CV.pdf') as string | null,
  resumeFileName: 'Khouchaf_MohamedAmine_CV.pdf',
  /** Portrait cutout built by `npm run images`. Set to null to fall back to the monogram. */
  portrait: {
    src: '/assets/portrait-768.webp',
    srcSet: '/assets/portrait-512.webp 512w, /assets/portrait-768.webp 768w, /assets/portrait-1024.webp 1024w',
    thumb: '/assets/portrait-512.webp',
    alt: 'Portrait of Mohamed Amine Khouchaf',
  } as Portrait | null,
  interests: ['Data Engineering', 'Analytics & BI', 'Machine Learning', 'Generative AI & Agents', 'Software Engineering'],
  motto: ['Learn by building.', 'Improve by testing.'],
  languages: ['Arabic (native)', 'French (fluent)', 'English (intermediate)'],
  softSkills: ['Autonomy', 'Rigor', 'Team spirit', 'Adaptability', 'Problem-solving'],
};

export const education = [
  {
    school: 'EMSI',
    place: 'Casablanca',
    degree: 'Engineering cycle — Computer & Network Engineering (IIR), Data & AI',
    period: '2024 – present · degree expected 2027',
    score: 'PFE internship 2027',
  },
  {
    school: 'EMSI',
    place: 'Casablanca',
    degree: 'Integrated Preparatory Classes (CPI)',
    period: '2022 – 2024',
    score: '',
  },
  {
    school: 'Lycée Bab Andalous',
    place: 'Casablanca',
    degree: 'Baccalauréat',
    period: '2022',
    score: '',
  },
];

export const experience = [
  {
    company: 'HPS (Hightech Payment Systems)',
    role: 'Data & AI Engineer Intern',
    place: 'Casablanca',
    period: 'July – September 2026 · 2 months',
    points: [
      'Developed, within the SWAM (Switch Al Maghrib) team, an intelligent transaction reporting assistant (Transaction Reporting Assistant) combining Text-to-SQL, LLM and RAG to make payment data analysis easier.',
      'Stack: Python, FastAPI, LLM, RAG, Text-to-SQL.',
    ],
  },
  {
    company: 'HPS (Hightech Payment Systems)',
    role: 'Software Development Intern',
    place: 'Casablanca',
    period: 'July – September 2025 · 2 months',
    points: [
      'Designed and built a complete user interface that eases the merchant onboarding process in a production environment.',
      'Stack: Java, Spring Boot, JavaScript, CSS, Thymeleaf, OracleDB.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Motif = 'pipeline' | 'bars' | 'magnifier' | 'route' | 'modal';

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: Motif;
};

export const projects: Project[] = [
  {
    id: 'global-supply-chain-intelligence',
    title: 'Global Supply Chain Intelligence',
    year: 'v1.0.0',
    genre: 'Data Engineering • ML • GenAI',
    logline: 'A platform that ingests supply-chain data, predicts shipment delay risk and answers questions through an AI copilot.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'PySpark', 'Kafka', 'Airflow', 'React', 'Docker'],
    build: [
      'Built a Bronze → Silver → Gold data platform: raw ingestion, strict validation that rejects invalid rows into audit reports, and a star-schema Gold layer served by a FastAPI backend and a React dashboard.',
      'Added Spark transformations, an idempotent Kafka producer and consumer for shipment status events, and an Airflow DAG that runs the pipeline from ingestion to Gold.',
      'Layered machine learning on top: delay prediction comparing Logistic Regression, Random Forest and XGBoost on a time-based split with leakage guards, TF-IDF incident classification, a CNN for damage detection, RAG over internal documents and a copilot limited to four whitelisted tools.',
      'Closed with production work: Prometheus metrics, GitHub Actions CI, a pip-audit security review and Terraform definitions for Azure.',
    ],
    features: [
      'Data-quality gates with audit reports',
      'Gold KPIs: supplier performance, regional and transport delays',
      'Shipment delay-risk prediction',
      'Incident classification and damage detection',
      'AI copilot with whitelisted tools',
      'RAG over internal documents',
      'Prometheus observability',
    ],
    metrics: [
      { value: '0–8', label: 'phases completed' },
      { value: '14', label: 'architecture decision records' },
      { value: 'v1.0.0', label: 'tagged release' },
      { value: '0.93', label: 'incident classifier accuracy (synthetic text)' },
      { value: '7/7', label: 'Airflow tasks in a full run' },
    ],
    github: 'https://github.com/MedAmine04/Global-Supply-Chain-Intelligence',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'pipeline',
  },
  {
    id: 'morocco-spending-intelligence',
    title: 'Morocco Public Spending Intelligence',
    year: 'MIT',
    genre: 'Data • RAG • AI Agents',
    logline: 'A data and AI platform that centralizes Moroccan public budget data and lets anyone question it in natural language.',
    stack: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Qdrant', 'Redis', 'Airflow', 'Docker'],
    build: [
      'Centralized the state budget, budget execution and socio-economic indicators from the official Citizen Budget (LF2025 and LF2026) in a PostgreSQL analytics schema, loaded by idempotent ETL pipelines with automated data-quality checks.',
      'Built a LangGraph agent that combines guarded text-to-SQL (a restricted database role), document RAG over Qdrant, statistics and charts to answer budget questions in natural language.',
      'Added a full BI + ML layer (anomaly detection on real growth rates, forecasting and clustering), framed as signals to investigate rather than accusations. The API is protected by role-based access control and the whole stack runs with Docker Compose.',
    ],
    features: [
      'Natural-language budget Q&A',
      'Guarded text-to-SQL agent',
      'Document-grounded RAG',
      'Anomaly detection, forecasting and clustering',
      'Idempotent ETL and data-quality checks',
      'Role-based API access with Swagger docs',
      'Optional Airflow and n8n orchestration',
    ],
    metrics: [
      { value: '44', label: 'automated tests' },
      { value: '2', label: 'budget laws analysed (LF2025, LF2026)' },
      { value: '4', label: 'analytics layers: BI, ML, RAG, data quality' },
      { value: 'MIT', label: 'open-source license' },
    ],
    github: 'https://github.com/MedAmine04/Morocco-Public-Spending-Policy-Intelligence-Platform',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'bars',
  },
  {
    id: 'incident-investigator',
    title: 'Incident Investigator',
    year: 'Java 21',
    genre: 'Java • GenAI • RAG',
    logline: 'An AI-assisted platform that helps technical teams investigate payment transaction incidents.',
    stack: ['Java 21', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'pgvector', 'Google Gemini', 'Flyway', 'Thymeleaf'],
    build: [
      'Built a Spring Boot application that manages payment incidents, tracks their status and correlates them with transactions and client contracts.',
      'Designed an agentic workflow in which an orchestrator coordinates technical and contract agents, turning their findings into an investigation result and an AI-generated PDF report.',
      'Implemented a RAG pipeline (ingest, chunk, embed, store in pgvector, similarity search) that feeds relevant technical and business knowledge to Google Gemini, with Flyway-managed database migrations.',
    ],
    features: [
      'Incident creation and status tracking',
      'Transaction search and failure detection',
      'Contract-aware investigation',
      'Orchestrator and specialized AI agents',
      'RAG over technical and business knowledge',
      'Investigation history and PDF reports',
    ],
    metrics: [
      { value: 'Java 21', label: 'Spring Boot backend' },
      { value: '10', label: 'feature packages' },
      { value: '5', label: 'specialized AI components' },
      { value: 'RAG', label: 'pgvector + Google Gemini' },
    ],
    github: 'https://github.com/MedAmine04/incident-invesigator',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'magnifier',
  },
  {
    id: 'casablanca-traffic-analytics',
    title: 'Casablanca Traffic Analytics',
    year: 'Docker',
    genre: 'Data • ML • Geospatial',
    logline: 'A data and AI platform that analyzes and forecasts road traffic across the city of Casablanca.',
    stack: ['Python', 'FastAPI', 'PostGIS', 'scikit-learn', 'Airflow', 'Leaflet', 'Docker Compose'],
    build: [
      'Modelled 73,920 hourly records from a real Casablanca traffic dataset (Waze trips: 22 communes, 110 points, 440 trips) in a PostGIS database behind a FastAPI backend.',
      'Trained a RandomForest to predict the Travel Time Index (R² 0.785, MAE 0.22) and flagged anomalies with a z-score of 2 or more against each trip’s usual pattern.',
      'Built a Leaflet map dashboard with three access roles and a daily Airflow DAG that retrains the model, detects anomalies and enriches trips with weather and routing, all running with Docker Compose.',
    ],
    features: [
      'Congestion by commune, day and hour',
      'Travel Time Index prediction',
      'Z-score anomaly detection',
      'Roles: decision maker, traffic analyst, admin',
      'OSRM routing and Open-Meteo weather enrichment',
      'Daily Airflow pipeline',
    ],
    metrics: [
      { value: '0.785', label: 'R² on the Travel Time Index' },
      { value: '73,920', label: 'hourly records' },
      { value: '22', label: 'communes' },
      { value: '440', label: 'trips mapped' },
    ],
    github: 'https://github.com/MedAmine04/casablanca-traffic-analytics',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'route',
  },
  {
    id: 'sentinelai',
    title: 'SentinalAI',
    year: 'Academic',
    genre: 'NLP • Computer Vision • XAI',
    logline: 'A multimodal fake-news detection platform that reads both the text and the images.',
    stack: ['Python', 'Flask', 'Azure SQL', 'NLP', 'Computer Vision', 'XAI'],
    build: [
      'Designed a web platform that detects fake news by combining textual analysis (NLP) and visual analysis (computer vision).',
      'Added explainability (XAI) mechanisms so each verdict can be justified, and stored results in Azure SQL.',
    ],
    features: ['Textual analysis (NLP)', 'Visual analysis (computer vision)', 'Explainability (XAI)', 'Persistence on Azure SQL'],
    metrics: [
      { value: '2', label: 'modalities: text and image' },
      { value: 'XAI', label: 'explainable verdicts' },
      { value: 'Azure SQL', label: 'persistence' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'modal',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'NVIDIA', name: 'Applications of AI for Anomaly Detection (Apr 2026)' },
  { issuer: 'IBM', name: 'IBM Data Engineering Professional Certificate (May 2026)' },
  { issuer: 'IBM', name: 'IBM Data Engineering Foundations Specialization' },
  { issuer: 'Google', name: 'Google Data Analytics Professional Certificate' },
  { issuer: 'University of Michigan', name: 'Python 3 Programming Specialization' },
  { issuer: 'Soft skills', name: 'People & Soft Skills Specialization' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python first, Java close behind',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C / C++', mono: 'C+' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Models, analysis and explainability',
    skills: [
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'Computer Vision', mono: 'Cv' },
      { name: 'Anomaly Detection', mono: 'Ad' },
      { name: 'XAI', mono: 'Xa' },
    ],
  },
  {
    id: 'dataeng',
    title: 'Data Engineering',
    subtitle: 'Pipelines, streaming and storage',
    skills: [
      { name: 'Apache Kafka', mono: 'Kf' },
      { name: 'Apache Spark', mono: 'Sp' },
      { name: 'Airflow', mono: 'Af' },
      { name: 'ETL / ELT', mono: 'Et' },
      { name: 'Data Lake', mono: 'Dl' },
      { name: 'Data Warehouse', mono: 'Dw' },
      { name: 'Hadoop', mono: 'Hd' },
    ],
  },
  {
    id: 'genai',
    title: 'GenAI & Agents',
    subtitle: 'Retrieval, agents and LLM apps',
    skills: [
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'LLM', mono: 'Ll' },
      { name: 'Text-to-SQL', mono: 'Ts' },
      { name: 'Spring AI', mono: 'Sa' },
      { name: 'Google Gemini', mono: 'Gm' },
    ],
  },
  {
    id: 'web',
    title: 'Web & APIs',
    subtitle: 'Backends and interfaces',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'React', mono: 'Re' },
      { name: 'Thymeleaf', mono: 'Th' },
      { name: 'REST API', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational, graph, document and cloud',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'PostGIS', mono: 'Pi' },
      { name: 'OracleDB', mono: 'Or' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Neo4j', mono: 'Nj' },
      { name: 'Cassandra', mono: 'Cs' },
      { name: 'Azure SQL', mono: 'Az' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Redis', mono: 'Rd' },
    ],
  },
  {
    id: 'infra',
    title: 'Cloud & Tools',
    subtitle: 'Shipping and running it',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Azure', mono: 'Au' },
      { name: 'Jupyter Notebook', mono: 'Jn' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Nginx', mono: 'Nx' },
      { name: 'GitHub Actions', mono: 'Ga' },
    ],
  },
  {
    id: 'interests',
    title: 'Focus Areas',
    subtitle: 'Where the next episodes go',
    skills: [
      { name: 'Data Engineering', mono: 'De' },
      { name: 'Analytics & BI', mono: 'Bi' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'GenAI & Agents', mono: 'Ai' },
      { name: 'Software Engineering', mono: 'Se' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the experience, projects or certifications.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['HPS internship 2026', 'Supply Chain Intelligence', 'Morocco Spending Intelligence', 'Casablanca Traffic Analytics', 'SentinalAI'],
  Java: ['HPS internship 2025', 'Incident Investigator'],
  JavaScript: ['HPS internship 2025'],
  'scikit-learn': ['Supply Chain Intelligence', 'Casablanca Traffic Analytics'],
  NLP: ['SentinalAI', 'Supply Chain Intelligence'],
  'Computer Vision': ['SentinalAI', 'Supply Chain Intelligence'],
  'Anomaly Detection': ['NVIDIA certificate', 'Casablanca Traffic Analytics', 'Morocco Spending Intelligence'],
  XAI: ['SentinalAI'],
  'Apache Spark': ['Supply Chain Intelligence'],
  'Apache Kafka': ['Supply Chain Intelligence'],
  Airflow: ['Supply Chain Intelligence', 'Morocco Spending Intelligence', 'Casablanca Traffic Analytics'],
  'ETL / ELT': ['Morocco Spending Intelligence', 'IBM Data Engineering'],
  RAG: ['HPS internship 2026', 'Supply Chain Intelligence', 'Morocco Spending Intelligence', 'Incident Investigator'],
  LangGraph: ['Morocco Spending Intelligence'],
  LLM: ['HPS internship 2026'],
  'Text-to-SQL': ['HPS internship 2026', 'Morocco Spending Intelligence'],
  'Spring AI': ['Incident Investigator'],
  'Google Gemini': ['Incident Investigator'],
  FastAPI: ['HPS internship 2026', 'Supply Chain Intelligence', 'Morocco Spending Intelligence', 'Casablanca Traffic Analytics'],
  Flask: ['SentinalAI'],
  'Spring Boot': ['HPS internship 2025', 'Incident Investigator'],
  Thymeleaf: ['HPS internship 2025', 'Incident Investigator'],
  React: ['Supply Chain Intelligence'],
  PostgreSQL: ['Supply Chain Intelligence', 'Morocco Spending Intelligence', 'Incident Investigator', 'Casablanca Traffic Analytics'],
  PostGIS: ['Casablanca Traffic Analytics'],
  OracleDB: ['HPS internship 2025'],
  'Azure SQL': ['SentinalAI'],
  Redis: ['Morocco Spending Intelligence'],
  Docker: ['Supply Chain Intelligence', 'Morocco Spending Intelligence', 'Casablanca Traffic Analytics'],
  'GitHub Actions': ['Supply Chain Intelligence'],
  'Data Engineering': ['IBM Data Engineering Professional Certificate', 'Supply Chain Intelligence'],
  'Analytics & BI': ['Google Data Analytics Professional Certificate', 'Morocco Spending Intelligence'],
  'Machine Learning': ['Casablanca Traffic Analytics', 'Supply Chain Intelligence'],
  'GenAI & Agents': ['HPS internship 2026', 'Morocco Spending Intelligence', 'Incident Investigator'],
};
