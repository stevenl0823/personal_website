// Add full case studies only after source artifacts and findings are reviewed.
export type PortfolioProject = {
  title: string;
  context: 'Independent project' | 'Course project' | 'Research project';
  question: string;
  finding: string;
  dataDisclosure: string;
  codeUrl?: string;
  dashboardUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [];

export const existingStudy = {
  title: 'NBA Player Performance & Salary',
  status: 'Existing study · portfolio materials pending',
  dates: 'April – May 2022',
  description:
    'Independent study using Python in Google Colab to examine player performance and annual salary in the 2019–2020 NBA season.',
  question: 'How does NBA player performance relate to annual salary?',
  contribution:
    'Conducted the analysis as an independent researcher. The study is documented in my résumé; the original notebook, data sources, and findings have not yet been added to this portfolio.',
  tags: ['Sports analytics', 'Python', 'Google Colab', 'NBA'],
  materials: [
    'Original notebook and reproducible analysis steps',
    'Performance metrics, salary source, and player matching rules',
    'Two or three charts with the actual findings',
    'Interpretation, limitations, and a basketball decision takeaway',
  ],
} as const;

export const projectBriefs = [
  {
    title: 'Sports Ticketing & Revenue Intelligence',
    category: 'Business analytics',
    question:
      'Which events, sales windows, and customer segments should a venue team prioritize?',
    tools: ['SQL', 'Tableau', 'Excel'],
    materials: [
      'Public or clearly labeled synthetic ticket transactions and a data dictionary',
      'SQL data model, reusable queries, and revenue reconciliation checks',
      'Dashboard covering sales pace, sell-through, net revenue, and customer segments',
      'A short pricing or marketing recommendation supported by the analysis',
    ],
  },
  {
    title: 'Customer Retention & Experiment Evaluation',
    category: 'Product analytics',
    question:
      'Does a product or campaign change improve customer outcomes enough to justify rollout?',
    tools: ['SQL', 'Python / R', 'Statistical analysis'],
    materials: [
      'Funnel and cohort definitions with SQL queries',
      'Public experiment data or a clearly labeled simulation',
      'Experiment design, sample-size reasoning, effect sizes, and uncertainty',
      'A launch, iterate, or stop recommendation with business guardrails',
    ],
  },
  {
    title: 'Demand Forecasting & Model Evaluation',
    category: 'Data science',
    question:
      'Can an event-demand forecast improve on a simple baseline and support planning?',
    tools: ['Python / R', 'Forecasting', 'Model validation'],
    materials: [
      'Documented historical data and a clear forecast horizon',
      'Time-based training and test sets with leakage checks',
      'A baseline, model comparison, error metrics, and diagnostic charts',
      'Reproducible code and an explanation of decision implications and limitations',
    ],
  },
  {
    title: 'Data Quality & Reporting Pipeline',
    category: 'Data analytics',
    question:
      'How can messy records be transformed into reliable reporting tables?',
    tools: ['SQL', 'Python', 'Data validation'],
    materials: [
      'Public or synthetic raw records and a data dictionary',
      'Documented cleaning, joining, and transformation rules',
      'Before-and-after quality checks and automated validation',
      'Reusable reporting tables, code, and a concise explanation of the workflow',
    ],
  },
] as const;

export const selectedExperience = [
  {
    title: 'Quantitative research & data visualization',
    type: 'Academic research',
    organization: 'University of Memphis',
    description:
      'Research experience involving regression-based driver and forecasting models, ANOVA, multivariate methods, and difference-in-differences analysis of Wikipedia search data.',
    contribution:
      'Analyze research data, develop statistical models, and visualize findings for faculty teams while communicating assumptions and analytical limitations.',
    tags: ['Statistical analysis', 'Research methods', 'Visualization'],
  },
  {
    title: 'Sports venue finance & operations',
    type: 'Professional experience',
    organization: 'Mullins Center · Global Spectra',
    description:
      'Experience connecting financial reporting with the day-to-day operations of a sports venue.',
    contribution:
      'Prepared monthly financial statements and budget estimates using Sage 100 and Excel, and supported ticket sales and game-day operations.',
    tags: ['Excel', 'Financial reporting', 'Ticketing operations'],
  },
  {
    title: 'Data quality & donor database support',
    type: 'Internship',
    organization: 'Naismith Memorial Basketball Hall of Fame',
    description:
      'Hands-on experience cleaning and processing client data and maintaining donor records in a sports organization.',
    contribution:
      'Transferred, cleaned, and processed records in Excel and updated Raiser’s Edge for the Annual Giving Manager; supported fundraising programs.',
    tags: ['Excel', 'Data cleaning', 'Raiser’s Edge'],
  },
  {
    title: 'Sport strategy & information systems',
    type: 'Student consulting',
    organization: 'University of Massachusetts Amherst',
    description:
      'Student consulting experience on U.S. Soccer Federation and CONCACAF strategy, alongside a separate information systems consulting engagement.',
    contribution:
      'Contributed to sport marketing and event planning recommendations; led the information systems portion of a separate consulting team.',
    tags: ['Sport management', 'Business strategy', 'IS strategy'],
  },
] as const;

export const capabilityGroups = [
  {
    title: 'Data & databases',
    items: ['SQL', 'Python · Google Colab', 'RStudio', 'MS Access', 'ERDPlus'],
    detail: 'Additional hands-on tools include Teradata SQL Assistant.',
  },
  {
    title: 'Reporting & visualization',
    items: ['Tableau', 'Advanced Excel', 'Sage 100', 'Raiser’s Edge'],
    detail:
      'Experience also includes SAP Business Objects Analysis and SAP BEx Query Designer.',
  },
  {
    title: 'Statistical methods',
    items: ['Regression', 'Forecasting', 'ANOVA', 'Structural equation modeling'],
    detail:
      'Research support includes visualization of difference-in-differences analysis.',
  },
] as const;
