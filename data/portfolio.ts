// Publish completed case studies only after their source artifacts are reviewed.
// Future entries render automatically below the selected experience section.
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

export const selectedExperience = [
  {
    title: 'Quantitative research & data visualization',
    type: 'Academic research',
    organization: 'University of Memphis',
    description:
      'Research experience involving regression, ANOVA, structural equation modeling, and visualization of difference-in-differences analysis of Wikipedia search data.',
    contribution:
      'Supported faculty research and the interpretation and visualization of statistical analysis across information systems contexts.',
    tags: ['Statistical analysis', 'Research methods', 'Visualization'],
  },
  {
    title: 'Sports venue finance & operations',
    type: 'Professional experience',
    organization: 'Mullins Center · Global Spectra',
    description:
      'Experience connecting financial reporting with the day-to-day operations of a sports venue.',
    contribution:
      'Assisted with monthly financial statements and budget estimates using Sage 100 and Excel, and supported ticket sales and game-day operations.',
    tags: ['Excel', 'Financial reporting', 'Ticketing operations'],
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
    items: ['Tableau', 'Advanced Excel', 'Sage 100'],
    detail:
      'Experience also includes SAP Business Objects Analysis and SAP BEx Query Designer.',
  },
  {
    title: 'Statistical methods',
    items: ['Regression', 'ANOVA', 'Structural equation modeling'],
    detail:
      'Research support includes visualization of difference-in-differences analysis.',
  },
] as const;
