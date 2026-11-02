export type WorkStage =
  | 'Conference ready'
  | 'Data collection'
  | 'In preparation';

export const profile = {
  name: 'Wang (Steven) Liao',
  affiliation: 'University of Memphis',
  program: 'Management Information Systems',
  email: 'stevenl960823@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/wang-liao-0823/',
  github: 'https://github.com/stevenl0823',
  cvDownload: '/wang-liao-cv.docx',
  resumeDownload: '/wang-liao-resume.pdf',
  sourceCode: 'https://github.com/stevenl0823/personal_website',
  tagline:
    'Business analytics · Sports analytics · Data analytics',
  introduction:
    'I combine quantitative research with experience in sports business, venue finance, and data management. My work includes statistical modeling, an NBA player-performance and salary study, and communicating analytical findings. I use SQL, Python, R, Tableau, and Excel to investigate questions and explain results with their assumptions and limitations.',
} as const;

export const highlights = [
  {
    value: '4',
    label: 'works in progress',
    detail: 'Across AI, immersive technology, and digital behavior.',
  },
  {
    value: '2',
    label: 'MIS courses',
    detail: 'Foundations of Information Systems and Database Management.',
  },
  {
    value: '2025–26',
    label: 'ICIS service',
    detail: 'Volunteer and reviewer roles for the information systems community.',
  },
] as const;

export const researchThemes = [
  {
    number: '01',
    title: 'AI ethics & marketing strategy',
    description:
      'Algorithmic bias and transparency in AI-embedded recommender systems, consumer perceptions of AI-generated products, and AI anthropomorphism.',
    signal: 'Accountability',
  },
  {
    number: '02',
    title: 'Sports analytics & technology',
    description:
      'Generative AI and emerging technologies in online sports betting and sport management.',
    signal: 'Technology',
  },
  {
    number: '03',
    title: 'Future of work',
    description:
      'The implementation and business impact of the Metaverse and immersive technologies in the corporate workplace.',
    signal: 'Organizations',
  },
] as const;

export const workingPapers: Array<{
  title: string;
  collaborators: string;
  stage: WorkStage;
  status: string;
}> = [
  {
    title:
      'Metaverse in the Modern Workplace: A thematic review and future research agenda',
    collaborators: 'with Li, Y.',
    stage: 'Conference ready',
    status: 'Ready for conference submission.',
  },
  {
    title:
      'A literature review Metaverse Telework Platforms: Uncovering the Factors Influencing Workload and Team Productivity',
    collaborators: 'with Li, Y. & Mulgund, P.',
    stage: 'Data collection',
    status: 'Data collection.',
  },
  {
    title:
      'Exploring the factors that affecting algorithmic appreciation: in the context of online sports betting',
    collaborators: 'with Liang, H. & Raddatz, N.',
    stage: 'In preparation',
    status: 'Manuscript in preparation.',
  },
  {
    title:
      'The dark side of AI-powered personalization: how it reshapes users’ attitudes towards recommended content on social media',
    collaborators: 'with Liang, H.',
    stage: 'In preparation',
    status: 'Manuscript in preparation.',
  },
];

export const teaching = [
  {
    institution: 'University of Memphis',
    role: 'Graduate Teaching Assistant',
    dates: 'August 2025 – May 2026',
    courses: [
      {
        code: 'MIS 2749',
        title: 'Foundations of Information Systems',
        detail:
          'Designed curriculum, a full syllabus, and interactive activities; evaluated weekly assignments and provided targeted feedback.',
      },
      {
        code: 'MIS 7605',
        title: 'Database Management',
        detail:
          'Guided graduate students through ER-diagram interpretation and application, and provided feedback on database-design concepts.',
      },
    ],
  },
  {
    institution: 'University of Massachusetts Amherst',
    role: 'Graduate Teaching Assistant',
    dates: 'September 2021 – May 2022',
    courses: [
      {
        code: 'Management 770',
        title: 'Human Resources',
        detail:
          'Assisted and led in-class group activities with Professor Emily Heaphy.',
      },
      {
        code: 'SOM 640',
        title: 'Corporate Finance',
        detail:
          'Held office hours twice weekly to support questions on assignments and lectures with Professor Hossein Kazemi.',
      },
    ],
  },
] as const;

export const experience = [
  {
    dates: 'August 2023 – Present',
    organization: 'University of Memphis',
    title: 'Graduate Research Assistant',
    detail:
      'Analyze Wikipedia search behavior using difference-in-differences; develop regression-based driver and forecasting models, test group differences with ANOVA, apply multivariate methods, and visualize findings for faculty teams.',
  },
  {
    dates: 'September 2022 – May 2023',
    organization: 'Global Spectra at the Mullins Center',
    title: 'Financial Assistant',
    detail:
      'Prepared monthly financial statements and budget estimates using Sage 100 and Excel, processed background checks through ADP, and supported box-office ticket sales and game-day operations for UMass hockey and basketball.',
  },
  {
    dates: 'September 2022 – November 2022',
    organization: '4am Chinese Student Basketball Club',
    title: 'Club Head Coach and Team Captain',
    detail:
      'Led weekly training and developed game plans for a collegiate club team, including 2-3 and 3-2 zone defenses; guided the team to the playoffs.',
  },
  {
    dates: 'April 2022 – May 2022',
    organization: 'Sport Analytics Independent Study Project',
    title: 'Independent Researcher',
    detail:
      'Analyzed the relationship between NBA player performance and annual salary using Python in Google Colab and 2019–2020 season data.',
  },
  {
    dates: 'January 2022 – May 2022',
    organization: 'University of Massachusetts Amherst',
    title: 'Student Consultant',
    detail:
      'Led work on a new U.S. Open Cup tournament format and developed organizational, marketing, operations, and event-planning strategies for U.S. Soccer and CONCACAF.',
  },
  {
    dates: 'June 2021 – August 2021',
    organization: 'Naismith Memorial Basketball Hall of Fame',
    title: 'Development Office Intern',
    detail:
      'Transferred, cleaned, and processed client data in Excel; updated the Raiser’s Edge donor database for the Annual Giving Manager; supported the Coach Circle initiative and Enshrinement Weekend.',
  },
  {
    dates: 'January 2021 – May 2021',
    organization: 'University of Massachusetts Amherst',
    title: 'Student Consultant',
    detail:
      'Led the information-systems portion of a consulting team and delivered an IS strategy aligned to a client’s organizational objectives.',
  },
] as const;

export const education = [
  {
    date: 'Expected August 2027',
    institution: 'University of Memphis',
    school: 'Fogelman College of Business and Economics',
    credential: 'PhD Candidate in Management Information Systems',
    note: 'Expected completion: August 2027',
  },
  {
    date: 'May 2022',
    institution: 'University of Massachusetts Amherst',
    school:
      'Isenberg School of Management · Mark H. McCormack Department of Sport Management',
    credential: 'M.B.A/M.S. in Sport Management',
    note: 'Overall GPA: 3.85',
  },
  {
    date: 'December 2018',
    institution: 'The Ohio State University',
    school: 'College of Education and Human Ecology',
    credential: 'Bachelor of Science in Education, Sport Industry',
    note: 'Minor in Business · Overall GPA: 3.75',
  },
] as const;

export const service = [
  {
    year: '2026',
    role: 'Reviewer',
    organization: 'International Conference on Information Systems (ICIS)',
  },
  {
    year: '2025',
    role: 'Volunteer',
    organization: 'International Conference on Information Systems (ICIS)',
  },
  {
    year: 'Member',
    role: 'Professional affiliation',
    organization: 'Association for Information Systems',
  },
] as const;

export const methodsAndTools = [
  'Advanced Excel',
  'RStudio',
  'Python in Google Colab',
  'SQL',
  'Tableau',
  'MS Access',
  'Teradata SQL Assistant',
  'ERDPlus',
  'SAP Business Objects Analysis',
  'SAP BEx Query Designer',
] as const;

// Keep future announcements here. No public news items were provided in the CV.
export const newsItems: Array<{
  date: string;
  title: string;
  description: string;
  category: string;
}> = [];
