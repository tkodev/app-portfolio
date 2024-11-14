import { CompanyEntry, CompanyKey, JobEntry, Project, ProjectKey } from '@/types/works'

const companyEntries: Record<string, CompanyEntry> = {
  airCanada: {
    name: 'Air Canada',
    href: 'https://www.aircanada.com/',
    baseSrc: '/images/companies/air-canada/base@1x.png',
    lightSrc: '/images/companies/air-canada/light@1x.png',
    darkSrc: '/images/companies/air-canada/dark@1x.png'
  },
  airMiles: {
    name: 'Air Miles',
    href: 'https://www.airmiles.ca/',
    baseSrc: '/images/companies/air-miles/base@1x.png',
    lightSrc: '/images/companies/air-miles/light@1x.png',
    darkSrc: '/images/companies/air-miles/dark@1x.png'
  },
  babyJogger: {
    name: 'Baby Jogger',
    href: 'https://babyjogger.ca/',
    baseSrc: '/images/companies/baby-jogger/base@1x.png',
    lightSrc: '/images/companies/baby-jogger/light@1x.png',
    darkSrc: '/images/companies/baby-jogger/dark@1x.png'
  },
  badal: {
    name: 'Badal',
    href: 'https://badal.io/',
    baseSrc: '/images/companies/badal/base@1x.png',
    lightSrc: '/images/companies/badal/light@1x.png',
    darkSrc: '/images/companies/badal/dark@1x.png'
  },
  beyond: {
    name: 'Beyond',
    href: 'https://beyondmpd.com/',
    baseSrc: '/images/companies/beyond/base@1x.png',
    lightSrc: '/images/companies/beyond/light@1x.png',
    darkSrc: '/images/companies/beyond/dark@1x.png'
  },
  brandfire: {
    name: 'Brandfire',
    href: 'https://www.brandfire.ca/',
    baseSrc: '/images/companies/brandfire/base@1x.png',
    lightSrc: '/images/companies/brandfire/light@1x.png',
    darkSrc: '/images/companies/brandfire/dark@1x.png'
  },
  canadaDry: {
    name: 'Canada Dry',
    href: 'https://www.canadadry.com/',
    baseSrc: '/images/companies/canada-dry/base@1x.png',
    lightSrc: '/images/companies/canada-dry/light@1x.png',
    darkSrc: '/images/companies/canada-dry/dark@1x.png'
  },
  geAppliances: {
    name: 'GE Appliances',
    href: 'https://geappliances.ca/',
    baseSrc: '/images/companies/ge-appliances/base@1x.png',
    lightSrc: '/images/companies/ge-appliances/light@1x.png',
    darkSrc: '/images/companies/ge-appliances/dark@1x.png'
  },
  monogram: {
    name: 'Monogram',
    href: 'https://monogram.ca',
    baseSrc: '/images/companies/monogram/base@1x.png',
    lightSrc: '/images/companies/monogram/light@1x.png',
    darkSrc: '/images/companies/monogram/dark@1x.png'
  },
  peoplesGroup: {
    name: 'Peoples Group',
    href: 'https://www.peoplestrust.com/',
    baseSrc: '/images/companies/peoples-group/base@1x.png',
    lightSrc: '/images/companies/peoples-group/light@1x.png',
    darkSrc: '/images/companies/peoples-group/dark@1x.png'
  },
  quantumMob: {
    name: 'Quantum Mob',
    href: 'https://www.linkedin.com/company/quantumMob/',
    baseSrc: '/images/companies/quantum-mob/base@1x.png',
    lightSrc: '/images/companies/quantum-mob/light@1x.png',
    darkSrc: '/images/companies/quantum-mob/dark@1x.png'
  },
  rewardops: {
    name: 'RewardOps',
    href: 'https://www.rewardops.com/',
    baseSrc: '/images/companies/rewardops/base@1x.png',
    lightSrc: '/images/companies/rewardops/light@1x.png',
    darkSrc: '/images/companies/rewardops/dark@1x.png'
  },
  toffifee: {
    name: 'Toffifee',
    href: 'https://www.toffifee.ca/',
    baseSrc: '/images/companies/toffifee/base@1x.png',
    lightSrc: '/images/companies/toffifee/light@1x.png',
    darkSrc: '/images/companies/toffifee/dark@1x.png'
  },
  toyota: {
    name: 'Toyota',
    href: 'https://www.toyota.ca/',
    baseSrc: '/images/companies/toyota/base@1x.png',
    lightSrc: '/images/companies/toyota/light@1x.png',
    darkSrc: '/images/companies/toyota/dark@1x.png'
  },
  weiser: {
    name: 'Weiser Lock',
    href: 'https://ca.weiserlock.com/',
    baseSrc: '/images/companies/weiser/base@1x.png',
    lightSrc: '/images/companies/weiser/light@1x.png',
    darkSrc: '/images/companies/weiser/dark@1x.png'
  }
}

const companyKeys: CompanyKey[] = [
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

const jobEntries: JobEntry[] = [
  {
    companyKey: 'badal',
    companyName: 'Badal.io',
    title: 'Staff Software Engineer',
    location: 'Toronto, Ontario, Canada · Remote',
    startDate: new Date('2023-05-01'),
    endDate: new Date('2024-11-08'),
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
      'Preview Management',
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
    startDate: new Date('2022-11-01'),
    endDate: new Date('2023-05-01'),
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
      'Preview Management',
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
    startDate: new Date('2021-11-01'),
    endDate: new Date('2022-10-01'),
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
      'Preview Management',
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
    startDate: new Date('2020-11-01'),
    endDate: new Date('2021-10-01'),
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
      'Preview Management',
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
    startDate: new Date('2019-11-01'),
    endDate: new Date('2020-10-01'),
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
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-11-01'),
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
      'Preview Management',
      'Vue.js',
      'Angular.js',
      'Ractive.js'
    ]
  },
  {
    companyKey: 'kosInteriorDesign',
    companyName: "Ko's Interior Design and Construction",
    title: 'Interior Designer',
    location: 'Toronto, Canada Area',
    startDate: new Date('2013-07-01'),
    endDate: new Date('2016-09-01'),
    skills: ['Adobe Creative Suite']
  }
]

const projectKeys: ProjectKey[] = [
  'beyondModernization',
  'paypowerReloadablePrepaidMastercardMobileApp',
  'aeroplanShoppingButtonBrowserExtension',
  'aeroplanEstoreRetailerAndCatalogRedesign',
  'rocMarEngineeringEmployeeDashboard',
  'aeroplanEstoreAodaAaWtagCompliance',
  'modaMatchVirtualFittingRoom',
  'quantumMobCatalogAppProjectMobCiCdIntegrations',
  'quantumMobCoreUtilitiesAuthModule',
  'aeroplanEstoreInitialArchitectureAndMvp',
  'airMilesLandingPortalDevelopment',
  'petsAboveReactModernization',
  'cardinalMeatsFoodServiceWebsiteAndCms',
  'toyotaSalesReportingDashboard',
  'weiserCanadianCatalogWebsite',
  'canadaChiropracticProtectiveAssociationWebsiteAndCms',
  'canadaDryEnterPinContest',
  'canadaDryWebsite',
  'monogramCanadianCatalogWebsite',
  'parentsCanadaMagazineWebsite',
  'toffifeeSpinToWinContest',
  'toyotaBringYourToyotaHomeContest',
  'toyotaMakeADateContest',
  'babyJoggerCanadianCatalogWebsite'
]

const projects: Record<ProjectKey, Project> = {
  beyondModernization: {
    projectKey: 'beyondModernization',
    src: '/images/works/beyond.png',
    title: 'Beyond - Modernization',
    subtitle: 'Transforming oil rig systems into a modern, data-driven architecture.',
    tagline:
      'Contracted to co-lead the modernization of Beyond MPD at Badal.io, transforming legacy oil rig systems into a next-generation event-driven architecture with real-time data visualization, robust back-end solutions, and a consistent design system for improved control and operational integrity.',
    desc: 'As a Staff Engineer at Badal.io, I co-led the transformation of the Beyond MPD platform. The project entailed transitioning legacy oil rig systems to an event-driven architecture, enhancing operational integrity with real-time data visualization and a custom design system. This modernization also integrated back-end solutions for essential data management, reinforcing reliability in high-stakes environments.',
    companyKey: 'badal',
    startDate: new Date('2023-05-01'),
    endDate: new Date('2024-11-01'),
    skills: [
      'Node.js',
      'Software Infrastructure',
      'RabbitMQ',
      'tRPC',
      'gRPC',
      'Canvas',
      'SVG',
      'Jest',
      'Design Systems'
    ],
    isFeatured: true
  },
  paypowerReloadablePrepaidMastercardMobileApp: {
    projectKey: 'paypowerReloadablePrepaidMastercardMobileApp',
    src: '/images/works/paypower.png',
    title: 'Paypower - Reloadable Prepaid Mastercard - Mobile App',
    subtitle: 'Empowering users with mobile control over prepaid Mastercards.',
    tagline:
      'Developed a white-label React Native iOS and Android app enabling users to manage prepaid Mastercards, with tRPC replacing a legacy Redux system for efficient data handling, enhanced by multi-currency support, precise financial calculations with big integers, and real-time push notifications for alerts.',
    desc: 'I played a key role in developing Paypower’s mobile app, enabling users to manage prepaid Mastercards efficiently. My contributions included a shift from Redux to tRPC, implementing multi-currency support, and creating CI/CD pipelines. The project also involved real-time push notifications and enhanced UX features like dark/light modes to elevate user engagement and operational reliability.',
    companyKey: 'quantumMob',
    startDate: new Date('2021-10-01'),
    endDate: new Date('2023-04-01'),
    skills: [
      'React Native',
      'tRPC',
      'CI/CD',
      'Multi-language',
      'Currency Precision',
      'Push Notifications',
      'UX Design System',
      'Agile Process'
    ],
    isFeatured: true
  },
  aeroplanShoppingButtonBrowserExtension: {
    projectKey: 'aeroplanShoppingButtonBrowserExtension',
    src: '/images/works/aeroplan-ext.jpg',
    title: 'Aeroplan Shopping Button - Browser Extension',
    subtitle: 'Enabling rewards with Aeroplan’s cross-browser shopping extension.',
    tagline:
      "Aeroplan's first cross-browser web extension, supporting hundreds of sites, was architected and implemented with an SWR-based query system to bypass CORS limitations, a navigation tracking system for multi-domain purchase sessions, and a multi-level caching solution to reduce backend load.",
    desc: 'As lead developer, I architected Aeroplan’s first cross-browser extension. Utilizing SWR to manage CORS, I created a navigation tracking system for multi-domain purchase sessions and a caching solution to optimize performance. This innovative approach supported users in earning Aeroplan points seamlessly across hundreds of retailer sites, aligning with high user engagement standards.',
    companyKey: 'quantumMob',
    startDate: new Date('2021-07-01'),
    endDate: new Date('2022-01-01'),
    skills: [
      'SWR',
      'CORS',
      'Multi-domain Navigation',
      'Caching',
      'Browser Extension',
      'PRDs',
      'Client Management'
    ]
  },
  aeroplanEstoreRetailerAndCatalogRedesign: {
    projectKey: 'aeroplanEstoreRetailerAndCatalogRedesign',
    src: '/images/works/aeroplan.png',
    title: 'Aeroplan eStore - Retailer & Catalog Redesign',
    subtitle: 'Redesigning the Aeroplan eStore for streamlined user experiences.',
    tagline:
      'Redesign implementation for catalog filtering and Aeroplan earn opportunities on affiliate pages.',
    desc: 'Tasked with enhancing the Aeroplan eStore’s usability, I spearheaded the redesign of catalog filtering and points-earning integrations on affiliate pages. This project improved the store’s visual appeal and functionality, allowing users to more easily locate retailers and earn points, thus fostering greater user satisfaction and engagement.',
    companyKey: 'quantumMob',
    startDate: new Date('2021-04-01'),
    endDate: new Date('2021-07-01'),
    skills: [
      'React',
      'Redux',
      'Monorepos',
      'Cache & Query Management',
      'UX Design',
      'Design Systems',
      'Whitelabel Theming'
    ],
    isFeatured: true
  },
  rocMarEngineeringEmployeeDashboard: {
    projectKey: 'rocMarEngineeringEmployeeDashboard',
    src: '/images/works/rocmar.png',
    title: 'RocMar Engineering - Employee Dashboard',
    subtitle: 'Bringing productivity and design harmony to RocMar Engineering.',
    tagline: 'Designer, developer, and client relations for architectural productivity dashboard.',
    desc: 'I led the development of an employee dashboard for RocMar Engineering, balancing design and functionality to optimize productivity. From design to deployment, this project required close collaboration with stakeholders, translating complex workflows into a user-friendly, visually cohesive interface that met architectural productivity needs.',
    companyKey: 'quantumMob',
    startDate: new Date('2020-11-01'),
    endDate: new Date('2021-03-01'),
    skills: ['Design Systems', 'React', 'UI/UX', 'OAuth', 'OICD', 'Postgres', 'Client Management']
  },
  aeroplanEstoreAodaAaWtagCompliance: {
    projectKey: 'aeroplanEstoreAodaAaWtagCompliance',
    src: '/images/works/aeroplan.png',
    title: 'Aeroplan eStore - AODA AA / WTAG 2.0 Compliance',
    subtitle: 'Enhancing accessibility for the Aeroplan eStore.',
    tagline:
      'Lead developer for AODA AA compliance team, ensuring the eStore meets accessibility standards.',
    desc: 'As the lead developer, I directed Aeroplan’s AODA AA and WCAG 2.0 compliance efforts. This initiative involved implementing accessibility standards across the eStore, ensuring it was user-friendly and compliant with regulatory standards, enhancing usability for all customers.',
    companyKey: 'quantumMob',
    startDate: new Date('2020-10-01'),
    endDate: new Date('2020-11-01'),
    skills: ['Accessibility', 'AODA Compliance', 'WCAG 2.0', 'React']
  },
  quantumMobCatalogAppProjectMobCiCdIntegrations: {
    projectKey: 'quantumMobCatalogAppProjectMobCiCdIntegrations',
    title: 'Quantum Mob - Catalog App, Preview Mob, CI/CD Integrations',
    subtitle: 'Driving infrastructure and CI/CD innovation at Quantum Mob.',
    tagline:
      'Team Lead for whitelabel product catalog, new project infrastructure creation tool with CI/CD pipelines generation.',
    desc: 'As Team Lead, I developed infrastructure for Quantum Mob’s product catalog and introduced a streamlined CI/CD tool for efficient project setup. This tool automated pipeline generation, enhancing development workflows and enabling faster product iteration, contributing to the firm’s commitment to efficient, modern development processes.',
    companyKey: 'quantumMob',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2020-10-01'),
    skills: ['CI/CD', 'Pipeline Development', 'Product Catalog', 'Team Leadership']
  },
  quantumMobCoreUtilitiesAuthModule: {
    projectKey: 'quantumMobCoreUtilitiesAuthModule',
    title: 'Quantum Mob - Core Utilities, Auth Module',
    subtitle: 'Creating scalable, reusable modules with Quantum Mob’s core utilities.',
    tagline:
      'Monorepo-style reusable modules for internal and client projects, focusing on authentication utilities.',
    desc: 'At Quantum Mob, I developed core authentication utilities within a monorepo structure, enabling reuse across multiple projects. These modules provided robust, secure authentication solutions for both internal and client applications, enhancing scalability and reducing development time on future projects.',
    companyKey: 'quantumMob',
    startDate: new Date('2020-07-01'),
    endDate: new Date('2020-10-01'),
    skills: ['Monorepo', 'Authentication', 'Node.js', 'Modular Development']
  },
  aeroplanEstoreInitialArchitectureAndMvp: {
    projectKey: 'aeroplanEstoreInitialArchitectureAndMvp',
    src: '/images/works/aeroplan.png',
    title: 'Aeroplan eStore - Initial Architecture & MVP',
    subtitle: 'Laying the foundation for Aeroplan’s eStore MVP.',
    tagline:
      'Lead developer for front-end, state management, and server model design for Aeroplan eStore MVP.',
    desc: 'As lead developer, I crafted the Aeroplan eStore’s foundational architecture, establishing front-end design, state management, and server infrastructure. This scalable design supported Aeroplan’s expansion in online redemption, creating a streamlined experience for users and a robust foundation for future iterations.',
    companyKey: 'quantumMob',
    startDate: new Date('2020-01-01'),
    endDate: new Date('2020-06-01'),
    skills: ['React', 'Redux', 'Node.js', 'Server Architecture', 'Front-End Development']
  },
  airMilesLandingPortalDevelopment: {
    projectKey: 'airMilesLandingPortalDevelopment',
    src: '/images/works/airmiles.png',
    title: 'Air Miles - Landing Portal Development',
    subtitle: 'Developing a cohesive experience for the Air Miles landing portal.',
    tagline:
      'Developed monorepo React components for Air Miles landing website as part of a large team.',
    desc: 'As part of the Air Miles team, I contributed to the landing portal’s development using a monorepo structure with reusable React components. This project focused on creating a consistent, modular experience for users, integrating components that provided an intuitive interface and aligned with Air Miles branding.',
    companyKey: 'airMiles',
    startDate: new Date('2020-01-01'),
    endDate: new Date('2020-01-31'),
    skills: ['React', 'Monorepo', 'Component Development', 'Team Collaboration'],
    isFeatured: true
  },
  petsAboveReactModernization: {
    projectKey: 'petsAboveReactModernization',
    title: 'Pets Above - React Modernization',
    subtitle: 'Bringing modern standards to the Pets Above app.',
    tagline:
      'Refactored and modernized an early React, Redux, RabbitMQ, and MySQL-based application.',
    desc: 'I led the modernization of the Pets Above application, updating the codebase from legacy React and Redux to a more maintainable and efficient structure. This overhaul included enhancements in messaging with RabbitMQ and improvements in data handling with MySQL, aligning the app with modern standards for performance and usability.',
    companyKey: 'quantumMob',
    startDate: new Date('2019-11-01'),
    endDate: new Date('2019-12-01'),
    skills: ['React', 'Redux', 'RabbitMQ', 'MySQL', 'Application Modernization']
  },
  cardinalMeatsFoodServiceWebsiteAndCms: {
    projectKey: 'cardinalMeatsFoodServiceWebsiteAndCms',
    src: '/images/works/cardinal.png',
    title: 'Cardinal Meats & Food Service - Website & CMS',
    subtitle: 'Delivering a streamlined CMS and website for Cardinal Meats.',
    tagline:
      'Developed an Express-based landing site with an integrated custom CMS for Cardinal Meats.',
    desc: 'For Cardinal Meats, I developed a custom CMS integrated with their Express-based website. This project included creating user-friendly content management tools, providing the client with an accessible platform for content updates and ensuring the site remained engaging and efficient for end-users.',
    companyKey: 'quantumMob',
    startDate: new Date('2019-04-01'),
    endDate: new Date('2019-11-01'),
    skills: ['Express.js', 'CMS Development', 'Web Development', 'Node.js']
  },
  canadaChiropracticProtectiveAssociationWebsiteAndCms: {
    projectKey: 'canadaChiropracticProtectiveAssociationWebsiteAndCms',
    src: '/images/works/ccpa.png',
    title: 'Canada Chiropractic Protective Association - Website & CMS',
    subtitle: 'Building a client management platform for Canada Chiropractic.',
    tagline:
      'Developed a Microsoft Dynamics 365 CRM-based website for client case and plan management.',
    desc: 'For the Canada Chiropractic Protective Association, I developed a Microsoft Dynamics 365 CRM-integrated website. This project allowed the client to manage case information and plans effectively, enhancing their administrative capabilities and supporting better client service through a centralized, accessible platform.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['Microsoft Dynamics 365', 'CRM Integration', 'Web Development', 'Client Management']
  },
  canadaDryEnterPinContest: {
    projectKey: 'canadaDryEnterPinContest',
    title: 'Canada Dry - Enter PIN Contest',
    subtitle: 'Creating an interactive PIN-based contest for Canada Dry.',
    tagline: 'Developed a PHP & Ractive.js time and entry-based contest for user engagement.',
    desc: 'I designed and developed an entry-based contest for Canada Dry using PHP and Ractive.js. This interactive project allowed users to enter PIN codes for a chance to win, engaging customers and promoting Canada Dry’s brand in a fun, user-driven way.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['PHP', 'Ractive.js', 'User Engagement', 'Contest Development']
  },
  canadaDryWebsite: {
    projectKey: 'canadaDryWebsite',
    src: '/images/works/canadadry.png',
    title: 'Canada Dry - Website',
    subtitle: 'Designing an immersive web experience for Canada Dry.',
    tagline: 'Developed a PHP landing site with parallax and interactive animations.',
    desc: 'I developed a dynamic landing site for Canada Dry that featured parallax effects and interactive animations. Built with PHP, this visually engaging site supported Canada Dry’s branding and offered an interactive experience for users, enhancing the brand’s digital presence.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['PHP', 'Parallax', 'Animation', 'Web Development']
  },
  monogramCanadianCatalogWebsite: {
    projectKey: 'monogramCanadianCatalogWebsite',
    src: '/images/works/monogram.png',
    title: 'Monogram - Canadian Catalog Website',
    subtitle: 'Delivering a responsive catalog experience for Monogram.',
    tagline: 'Developed a Koa.js & Ractive.js catalog site using modern responsive frameworks.',
    desc: 'For Monogram, I developed a responsive catalog website using Koa.js and Ractive.js. This project showcased Monogram’s offerings through a clean, accessible interface that adapted seamlessly across devices, enhancing user engagement and accessibility.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  modaMatchVirtualFittingRoom: {
    projectKey: 'modaMatchVirtualFittingRoom',
    src: '/images/works/modamatch.png',
    title: 'Moda Match - Virtual Fitting Room',
    subtitle: 'Bringing virtual try-ons to e-commerce with Moda Match.',
    tagline:
      'White-label plugin for Shopify and WooCommerce allows users to virtually try on clothes on predefined models, adjusting for model and clothing dimensions.',
    desc: 'Moda Match transforms online apparel shopping by enabling customers to virtually try on clothing using predefined models. Integrated as a white-label plugin, it’s compatible with Shopify and WooCommerce, easily installed by store owners to enhance customer engagement. With support for thousands of items, Moda Match helps users visualize fit and dimensions, driving a more personalized shopping experience.',
    companyKey: 'quantumMob',
    startDate: new Date('2022-05-01'),
    endDate: new Date('2023-02-01'),
    skills: [
      'MongoDB',
      'Shopify Plugins',
      'WooCommerce Plugins',
      'DOM Injection',
      'Templates',
      'React',
      'Next.js'
    ]
  },
  parentsCanadaMagazineWebsite: {
    projectKey: 'parentsCanadaMagazineWebsite',
    src: '/images/works/parents.png',
    title: 'Parents Canada - Magazine Website',
    subtitle: 'Building a custom WordPress theme for Parents Canada.',
    tagline: 'Created a custom WordPress theme for the Parents Canada magazine website.',
    desc: 'I developed a custom WordPress theme for Parents Canada’s magazine website, providing a content-rich platform that aligned with the publication’s brand and met the needs of its diverse readership. This theme allowed for easy content updates and a visually engaging user experience.',
    companyKey: 'brandfire',
    startDate: new Date('2018-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['WordPress', 'Theme Development', 'Content Management', 'Web Design']
  },
  toffifeeSpinToWinContest: {
    projectKey: 'toffifeeSpinToWinContest',
    title: 'Toffifee - Spin to Win Contest',
    subtitle: 'Engaging users with an interactive "spin to win" contest for Toffifee.',
    tagline:
      'Implemented an interactive "spin to win" mechanic for a contest using Express.js and Ractive.js.',
    desc: 'For Toffifee, I created a "spin to win" contest using Express.js and Ractive.js. This engaging, animation-driven contest offered users a fun way to interact with the brand, increasing engagement and enhancing Toffifee’s digital marketing strategy.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['Express.js', 'Ractive.js', 'Animation', 'User Engagement']
  },
  toyotaBringYourToyotaHomeContest: {
    projectKey: 'toyotaBringYourToyotaHomeContest',
    title: 'Toyota - Bring Your Toyota Home Contest',
    subtitle: 'Creating an immersive contest experience with parallax for Toyota.',
    tagline:
      'Developed an Express.js-based contest with interactive parallax animations for Toyota.',
    desc: 'I developed a contest for Toyota, integrating interactive Apple-style parallax animations with Express.js. This project offered users an immersive experience, showcasing Toyota’s commitment to innovative digital engagement.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['Express.js', 'Parallax', 'Animation', 'Web Development']
  },
  toyotaMakeADateContest: {
    projectKey: 'toyotaMakeADateContest',
    title: 'Toyota - Make a Date Contest',
    subtitle: 'Enhancing user interaction with Toyota’s Make a Date contest.',
    tagline:
      'Developed a contest for Toyota featuring date-based entries and interactive elements.',
    desc: 'I developed a date-driven contest for Toyota that engaged users with interactive elements. This project combined Toyota’s branding with an engaging user interface, encouraging customers to participate and connect with the brand in a unique way.',
    companyKey: 'brandfire',
    startDate: new Date('2018-04-01'),
    endDate: new Date('2019-04-01'),
    skills: ['Express.js', 'Interactive Design', 'Contest Development', 'User Engagement']
  },
  babyJoggerCanadianCatalogWebsite: {
    projectKey: 'babyJoggerCanadianCatalogWebsite',
    src: '/images/works/babyjogger.png',
    title: 'BabyJogger - Canadian Catalog Website',
    subtitle: 'Delivering a catalog site experience for BabyJogger.',
    tagline: 'Developed a Koa.js and Ractive.js-based catalog website for BabyJogger.',
    desc: 'I created a responsive catalog website for BabyJogger using Koa.js and Ractive.js, offering a seamless browsing experience for customers. This site presented BabyJogger’s products in a user-friendly format, helping customers make informed purchasing decisions.',
    companyKey: 'brandfire',
    startDate: new Date('2017-04-01'),
    endDate: new Date('2018-04-01'),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  toyotaSalesReportingDashboard: {
    projectKey: 'toyotaSalesReportingDashboard',
    title: 'Toyota - Sales Reporting Dashboard',
    subtitle: 'Streamlining Toyota’s sales reporting with a custom dashboard.',
    tagline: 'Developed an internal sales reporting dashboard for Toyota using Koa.js.',
    desc: 'For Toyota, I developed an internal sales dashboard using Koa.js to simplify sales reporting processes. This dashboard provided real-time data visualization, making it easier for teams to track sales metrics and make informed business decisions.',
    companyKey: 'toyota',
    startDate: new Date('2019-04-01'),
    endDate: new Date('2019-11-01'),
    skills: ['Koa.js', 'Data Visualization', 'Dashboard Development', 'Sales Reporting']
  },
  weiserCanadianCatalogWebsite: {
    projectKey: 'weiserCanadianCatalogWebsite',
    src: '/images/works/weiser.png',
    title: 'Weiser - Canadian Catalog Website',
    subtitle: 'Creating a robust, catalog-driven website for Weiser.',
    tagline: 'Lead developer for an Express & Vue.js-based catalog site for Weiser.',
    desc: 'I led the development of a Canadian catalog website for Weiser, using Express and Vue.js to deliver a server-rendered, user-friendly experience. This site showcased Weiser’s products, providing a seamless browsing experience that supported the brand’s online presence.',
    companyKey: 'brandfire',
    startDate: new Date('2018-04-01'),
    endDate: new Date('2019-11-01'),
    skills: ['Express.js', 'Vue.js', 'Catalog Website', 'Server-Side Rendering']
  }
}

export { companyEntries, companyKeys, jobEntries, projects, projectKeys }
