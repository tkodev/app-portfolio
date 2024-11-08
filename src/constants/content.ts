import { Company, Job } from '@/types/content'

const companies: Record<string, Company> = {
  airCanada: {
    name: 'Air Canada',
    src: 'https://www.aircanada.com/',
    baseSrc: '/images/companies/air-canada/base@1x.png',
    lightSrc: '/images/companies/air-canada/light@1x.png',
    darkSrc: '/images/companies/air-canada/dark@1x.png'
  },
  airMiles: {
    name: 'Air Miles',
    src: 'https://www.airmiles.ca/',
    baseSrc: '/images/companies/air-miles/base@1x.png',
    lightSrc: '/images/companies/air-miles/light@1x.png',
    darkSrc: '/images/companies/air-miles/dark@1x.png'
  },
  babyJogger: {
    name: 'Baby Jogger',
    src: 'https://babyjogger.ca/',
    baseSrc: '/images/companies/baby-jogger/base@1x.png',
    lightSrc: '/images/companies/baby-jogger/light@1x.png',
    darkSrc: '/images/companies/baby-jogger/dark@1x.png'
  },
  badal: {
    name: 'Badal',
    src: 'https://badal.io/',
    baseSrc: '/images/companies/badal/base@1x.png',
    lightSrc: '/images/companies/badal/light@1x.png',
    darkSrc: '/images/companies/badal/dark@1x.png'
  },
  beyond: {
    name: 'Beyond',
    src: 'https://beyondmpd.com/',
    baseSrc: '/images/companies/beyond/base@1x.png',
    lightSrc: '/images/companies/beyond/light@1x.png',
    darkSrc: '/images/companies/beyond/dark@1x.png'
  },
  brandfire: {
    name: 'Brandfire',
    src: 'https://www.brandfire.ca/',
    baseSrc: '/images/companies/brandfire/base@1x.png',
    lightSrc: '/images/companies/brandfire/light@1x.png',
    darkSrc: '/images/companies/brandfire/dark@1x.png'
  },
  canadaDry: {
    name: 'Canada Dry',
    src: 'https://www.canadadry.com/',
    baseSrc: '/images/companies/canada-dry/base@1x.png',
    lightSrc: '/images/companies/canada-dry/light@1x.png',
    darkSrc: '/images/companies/canada-dry/dark@1x.png'
  },
  geAppliances: {
    name: 'GE Appliances',
    src: 'https://geappliances.ca/',
    baseSrc: '/images/companies/ge-appliances/base@1x.png',
    lightSrc: '/images/companies/ge-appliances/light@1x.png',
    darkSrc: '/images/companies/ge-appliances/dark@1x.png'
  },
  monogram: {
    name: 'Monogram',
    src: 'https://monogram.ca',
    baseSrc: '/images/companies/monogram/base@1x.png',
    lightSrc: '/images/companies/monogram/light@1x.png',
    darkSrc: '/images/companies/monogram/dark@1x.png'
  },
  peoplesGroup: {
    name: 'Peoples Group',
    src: 'https://www.peoplestrust.com/',
    baseSrc: '/images/companies/peoples-group/base@1x.png',
    lightSrc: '/images/companies/peoples-group/light@1x.png',
    darkSrc: '/images/companies/peoples-group/dark@1x.png'
  },
  quantumMob: {
    name: 'Quantum Mob',
    src: 'https://www.linkedin.com/company/quantumMob/',
    baseSrc: '/images/companies/quantum-mob/base@1x.png',
    lightSrc: '/images/companies/quantum-mob/light@1x.png',
    darkSrc: '/images/companies/quantum-mob/dark@1x.png'
  },
  rewardops: {
    name: 'RewardOps',
    src: 'https://www.rewardops.com/',
    baseSrc: '/images/companies/rewardops/base@1x.png',
    lightSrc: '/images/companies/rewardops/light@1x.png',
    darkSrc: '/images/companies/rewardops/dark@1x.png'
  },
  toffifee: {
    name: 'Toffifee',
    src: 'https://www.toffifee.ca/',
    baseSrc: '/images/companies/toffifee/base@1x.png',
    lightSrc: '/images/companies/toffifee/light@1x.png',
    darkSrc: '/images/companies/toffifee/dark@1x.png'
  },
  toyota: {
    name: 'Toyota',
    src: 'https://www.toyota.ca/',
    baseSrc: '/images/companies/toyota/base@1x.png',
    lightSrc: '/images/companies/toyota/light@1x.png',
    darkSrc: '/images/companies/toyota/dark@1x.png'
  },
  weiser: {
    name: 'Weiser Lock',
    src: 'https://ca.weiserlock.com/',
    baseSrc: '/images/companies/weiser/base@1x.png',
    lightSrc: '/images/companies/weiser/light@1x.png',
    darkSrc: '/images/companies/weiser/dark@1x.png'
  }
}

const companiesOrder = [
  'badal',
  'quantumMob',
  'rewardops',
  'brandfire',
  'beyond',
  'peoplesGroup',
  'airCanada',
  'airMiles',
  'toyota',
  'geAppliances',
  'monogram',
  'canadaDry',
  'weiser',
  'toffifee',
  'babyJogger'
]

const jobs: Job[] = [
  {
    companyKey: 'badal',
    companyName: 'Badal.io',
    title: 'Staff Software Engineer',
    location: 'Toronto, Ontario, Canada · Remote',
    dateFrom: new Date('2023-05-01'),
    dateTo: new Date('2024-11-08'),
    skills: [
      'Docker',
      'Node.js',
      'I18n',
      'Express.js',
      'Monorepo',
      'Sales Engineering',
      'React.js',
      'Serverless Computing',
      'TypeScript',
      'Software Estimation',
      'Coaching & Mentoring',
      'Team Leadership',
      'Composable Headless',
      'React Native',
      'Project Management',
      'Solution Architecture',
      'Application Architecture',
      'Figma',
      'Next.js'
    ]
  },
  {
    companyKey: 'quantumMob',
    companyName: 'Quantum Mob',
    title: 'Staff Software Engineer',
    location: 'Toronto, Ontario, Canada · Hybrid',
    dateFrom: new Date('2022-11-01'),
    dateTo: new Date('2023-05-01'),
    skills: [
      'Docker',
      'Node.js',
      'I18n',
      'Express.js',
      'Monorepo',
      'Sales Engineering',
      'React.js',
      'Serverless Computing',
      'TypeScript',
      'Software Estimation',
      'Coaching & Mentoring',
      'Team Leadership',
      'Composable Headless',
      'React Native',
      'Project Management',
      'Solution Architecture',
      'Application Architecture',
      'Figma',
      'Next.js'
    ]
  },
  {
    companyKey: 'quantumMob',
    companyName: 'Quantum Mob',
    title: 'Senior Software Engineer',
    location: 'Toronto, Ontario, Canada',
    dateFrom: new Date('2021-11-01'),
    dateTo: new Date('2022-10-01'),
    skills: [
      'Docker',
      'Node.js',
      'I18n',
      'Express.js',
      'Monorepo',
      'CI/CD',
      'PWAs',
      'React Testing Library',
      'React.js',
      'Serverless Computing',
      'React Query',
      'OAuth',
      'AODA',
      'TypeScript',
      'Software Estimation',
      'Coaching & Mentoring',
      'WCAG',
      'Team Leadership',
      'JavaScript',
      'Jest',
      'Redux.js',
      'Composable Headless',
      'React Native',
      'Project Management',
      'Application Architecture',
      'Figma',
      'Next.js'
    ]
  },
  {
    companyKey: 'quantumMob',
    companyName: 'Quantum Mob',
    title: 'Software Engineer II',
    location: 'Toronto, Canada Area',
    dateFrom: new Date('2020-11-01'),
    dateTo: new Date('2021-10-01'),
    skills: [
      'Docker',
      'Node.js',
      'I18n',
      'Express.js',
      'Monorepo',
      'CI/CD',
      'PWAs',
      'React Testing Library',
      'React.js',
      'Serverless Computing',
      'Webpack',
      'React Query',
      'OAuth',
      'AODA',
      'TypeScript',
      'Software Estimation',
      'Coaching & Mentoring',
      'WCAG',
      'Team Leadership',
      'JavaScript',
      'Jest',
      'PostgreSQL',
      'MySQL',
      'Redux.js',
      'ORM',
      'React Native',
      'Project Management',
      'Application Architecture',
      'Figma',
      'Next.js'
    ]
  },
  {
    companyKey: 'quantumMob',
    companyName: 'Quantum Mob',
    title: 'Software Engineer I',
    location: 'Toronto, Ontario, Canada',
    dateFrom: new Date('2019-11-01'),
    dateTo: new Date('2020-10-01'),
    skills: [
      'Docker',
      'Node.js',
      'I18n',
      'Express.js',
      'Monorepo',
      'CI/CD',
      'React.js',
      'Webpack',
      'TypeScript',
      'JavaScript',
      'PostgreSQL',
      'MySQL',
      'Redux.js',
      'ORM',
      'Figma',
      'Next.js'
    ]
  },
  {
    companyKey: 'brandfire',
    companyName: 'Brandfire Marketing Group Inc.',
    title: 'Intermediate Front End Developer',
    location: 'Markham, Ontario',
    dateFrom: new Date('2017-04-01'),
    dateTo: new Date('2019-11-01'),
    skills: [
      'Node.js',
      'I18n',
      'Express.js',
      'CI/CD',
      'Software Estimation',
      'JavaScript',
      'PostgreSQL',
      'MySQL',
      'Adobe Creative Suite',
      'Project Management',
      'Vue.js',
      'Angular.js',
      'Ractive.js'
    ]
  },
  {
    companyKey: 'kos-interior-design',
    companyName: "Ko's Interior Design and Construction",
    title: 'Interior Designer',
    location: 'Toronto, Canada Area',
    dateFrom: new Date('2013-07-01'),
    dateTo: new Date('2016-09-01'),
    skills: ['Adobe Creative Suite']
  }
]

export { companies, companiesOrder, jobs }
