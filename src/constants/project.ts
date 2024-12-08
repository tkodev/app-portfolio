import { appTimeZone } from '@/constants/date'
import { ProjectEntry, ProjectId } from '@/types/project'
import { fromZonedTime } from 'date-fns-tz'

const projectEntries: Record<ProjectId, ProjectEntry> = {
  beyondModernization: {
    id: 'beyondModernization',
    roles: ['development', 'design'],
    src: [
      {
        type: 'image',
        src: '/images/works/beyond.png',
        width: 1920,
        height: 1080,
        alt: 'Beyond Oil Rig Control Interface'
      }
    ],
    frames: [],
    title: 'Beyond Oil Rig Control Interface',
    desc: 'As a Staff Engineer at Badal.io, I co-led the transformation of the Beyond MPD platform. The project entailed transitioning legacy oil rig systems to an event-driven architecture, enhancing operational integrity with real-time data visualization and a custom design system. This modernization also integrated back-end solutions for essential data management, reinforcing reliability in high-stakes environments.',
    clientId: 'badal',
    profileIds: ['tony', 'tulio', 'zeena', 'harpreet'],
    startDate: fromZonedTime('2023-05-01', appTimeZone),
    endDate: fromZonedTime('2024-11-01', appTimeZone),
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
    id: 'paypowerReloadablePrepaidMastercardMobileApp',
    roles: ['development', 'design'],
    src: [
      {
        type: 'image',
        src: '/images/works/paypower.png',
        width: 512,
        height: 250,
        alt: 'Paypower Mastercard App'
      }
    ],
    frames: [],
    title: 'Paypower Mastercard App',
    desc: 'I played a key role in developing Paypower’s mobile app, enabling users to manage prepaid Mastercards efficiently. My contributions included a shift from Redux to tRPC, implementing multi-currency support, and creating CI/CD pipelines. The project also involved real-time push notifications and enhanced UX features like dark/light modes to elevate user engagement and operational reliability.',
    clientId: 'peoplesGroup',
    profileIds: ['tony', 'ben', 'leo', 'nikita'],
    startDate: fromZonedTime('2021-10-01', appTimeZone),
    endDate: fromZonedTime('2023-04-01', appTimeZone),
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
  techTalkMonoreposWithTurborepo: {
    id: 'techTalkMonoreposWithTurborepo',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/monorepos.png',
        width: 1200,
        height: 1200,
        alt: 'Monorepos with Turborepo'
      }
    ],
    frames: [],
    title: 'TechTalk - Monorepos with Turborepo @ React + Native Toronto x Quantum Mob',
    desc: 'This in-person event brought together developers at Quantum Mob’s head office to discuss cutting-edge topics in React and React Native development. Featuring talks on Redux to React Query migration, React integration in WordPress, and leveraging Turborepo for managing monorepos, the event provided actionable insights and facilitated meaningful discussions among attendees. The TechTalk showcased Quantum Mob’s commitment to fostering community and advancing developer knowledge.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2022-10-01', appTimeZone),
    endDate: fromZonedTime('2022-10-01', appTimeZone),
    skills: ['React', 'React Native', 'Turborepo', 'Community Engagement']
  },
  aeroplanShoppingButtonBrowserExtension: {
    id: 'aeroplanShoppingButtonBrowserExtension',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/aeroplan-ext.png',
        width: 2232,
        height: 936,
        alt: 'Aeroplan Shopping Button - Browser Extension'
      }
    ],
    frames: [],
    title: 'Aeroplan Shopping Button - Browser Extension',
    desc: 'As lead developer, I architected Aeroplan’s first cross-browser extension. Utilizing SWR to manage CORS, I created a navigation tracking system for multi-domain purchase sessions and a caching solution to optimize performance. This innovative approach supported users in earning Aeroplan points seamlessly across hundreds of retailer sites, aligning with high user engagement standards.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2021-07-01', appTimeZone),
    endDate: fromZonedTime('2022-01-01', appTimeZone),
    skills: [
      'SWR',
      'CORS',
      'Multi-domain Navigation',
      'Caching',
      'Browser Extension',
      'PRDs',
      'Client Management'
    ],
    isFeatured: true
  },
  aeroplanEstoreRetailerAndCatalogRedesign: {
    id: 'aeroplanEstoreRetailerAndCatalogRedesign',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/aeroplan.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Retailer & Catalog Redesign'
      }
    ],
    frames: [],
    title: 'Aeroplan eStore - Retailer & Catalog Redesign',
    desc: 'Tasked with enhancing the Aeroplan eStore’s usability, I spearheaded the redesign of catalog filtering and points-earning integrations on affiliate pages. This project improved the store’s visual appeal and functionality, allowing users to more easily locate retailers and earn points, thus fostering greater user satisfaction and engagement.',
    clientId: 'quantumMob',
    profileIds: ['tony', 'steven'],
    startDate: fromZonedTime('2021-04-01', appTimeZone),
    endDate: fromZonedTime('2021-07-01', appTimeZone),
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
    id: 'rocMarEngineeringEmployeeDashboard',
    roles: ['development', 'design'],
    src: [
      {
        type: 'image',
        src: '/images/works/rocmar.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard'
      }
    ],
    frames: [],
    title: 'RocMar Employee Dashboard',
    desc: 'I led the development of an employee dashboard for RocMar Engineering, balancing design and functionality to optimize productivity. From design to deployment, this project required close collaboration with stakeholders, translating complex workflows into a user-friendly, visually cohesive interface that met architectural productivity needs.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-11-01', appTimeZone),
    endDate: fromZonedTime('2021-03-01', appTimeZone),
    skills: ['Design Systems', 'React', 'UI/UX', 'OAuth', 'OICD', 'Postgres', 'Client Management'],
    isFeatured: true
  },
  aeroplanEstoreAodaAaWtagCompliance: {
    id: 'aeroplanEstoreAodaAaWtagCompliance',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/aeroplan.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - AODA AA / WTAG 2.0 Compliance'
      }
    ],
    frames: [],
    title: 'Aeroplan eStore - AODA AA / WTAG 2.0 Compliance',
    desc: 'As the lead developer, I directed Aeroplan’s AODA AA and WCAG 2.0 compliance efforts. This initiative involved implementing accessibility standards across the eStore, ensuring it was user-friendly and compliant with regulatory standards, enhancing usability for all customers.',
    clientId: 'quantumMob',
    profileIds: ['tony', 'steven'],
    startDate: fromZonedTime('2020-10-01', appTimeZone),
    endDate: fromZonedTime('2020-11-01', appTimeZone),
    skills: ['Accessibility', 'AODA Compliance', 'WCAG 2.0', 'React']
  },
  quantumMobCatalogAppProjectMobCiCdIntegrations: {
    id: 'quantumMobCatalogAppProjectMobCiCdIntegrations',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Quantum Mob - Catalog App, Media Mob, CI/CD Integrations',
    desc: 'As Team Lead, I developed infrastructure for Quantum Mob’s product catalog and introduced a streamlined CI/CD tool for efficient project setup. This tool automated pipeline generation, enhancing development workflows and enabling faster product iteration, contributing to the firm’s commitment to efficient, modern development processes.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-09-01', appTimeZone),
    endDate: fromZonedTime('2020-10-01', appTimeZone),
    skills: ['CI/CD', 'Pipeline Development', 'Product Catalog', 'Team Leadership']
  },
  quantumMobCoreUtilitiesAuthModule: {
    id: 'quantumMobCoreUtilitiesAuthModule',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Quantum Mob - Core Utilities, Auth Module',
    desc: 'At Quantum Mob, I developed core authentication utilities within a monorepo structure, enabling reuse across multiple projects. These modules provided robust, secure authentication solutions for both internal and client applications, reducing development time on future projects.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-07-01', appTimeZone),
    endDate: fromZonedTime('2020-10-01', appTimeZone),
    skills: ['Monorepo', 'Authentication', 'Node.js', 'Modular Development']
  },
  aeroplanEstoreInitialArchitectureAndMvp: {
    id: 'aeroplanEstoreInitialArchitectureAndMvp',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/aeroplan.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Initial Architecture & MVP'
      }
    ],
    frames: [],
    title: 'Aeroplan eStore - Initial Architecture & MVP',
    desc: 'As lead developer, I crafted the Aeroplan eStore’s foundational architecture, establishing front-end design, state management, and server infrastructure. This design supported Aeroplan’s expansion in online redemption, creating a streamlined experience for users and a robust foundation for future iterations.',
    clientId: 'quantumMob',
    profileIds: ['tony', 'nahuel'],
    startDate: fromZonedTime('2020-01-01', appTimeZone),
    endDate: fromZonedTime('2020-06-01', appTimeZone),
    skills: ['React', 'Redux', 'Node.js', 'Server Architecture', 'Front-End Development']
  },
  airMilesLandingPortalDevelopment: {
    id: 'airMilesLandingPortalDevelopment',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/airmiles.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles - Landing Portal Development'
      }
    ],
    frames: [],
    title: 'Air Miles - Landing Portal Development',
    desc: 'As part of the Air Miles team, I contributed to the landing portal’s development using a monorepo structure with reusable React components. This project focused on creating a consistent, modular experience for users, integrating components that provided an intuitive interface and aligned with Air Miles branding.',
    clientId: 'airMiles',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-01-01', appTimeZone),
    endDate: fromZonedTime('2020-01-31', appTimeZone),
    skills: ['React', 'Monorepo', 'Component Development', 'Team Collaboration'],
    isFeatured: true
  },
  petsAboveReactModernization: {
    id: 'petsAboveReactModernization',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Pets Above - React Modernization',
    desc: 'I led the modernization of the Pets Above application, updating the codebase from legacy React and Redux to a more maintainable and efficient structure. This overhaul included enhancements in messaging with RabbitMQ and improvements in data handling with MySQL, aligning the app with modern standards for performance and usability.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-11-01', appTimeZone),
    endDate: fromZonedTime('2019-12-01', appTimeZone),
    skills: ['React', 'Redux', 'RabbitMQ', 'MySQL', 'Application Modernization']
  },
  cardinalMeatsFoodServiceWebsiteAndCms: {
    id: 'cardinalMeatsFoodServiceWebsiteAndCms',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/cardinal.png',
        width: 1920,
        height: 1080,
        alt: 'Cardinal Meats & Food Service - Website & CMS'
      }
    ],
    frames: [],
    title: 'Cardinal Meats & Food Service - Website & CMS',
    desc: 'For Cardinal Meats, I developed a custom CMS integrated with their Express-based website. This project included creating user-friendly content management tools, providing the client with an accessible platform for content updates and ensuring the site remained engaging and efficient for end-users.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Express.js', 'CMS Development', 'Web Development', 'Node.js']
  },
  canadaChiropracticProtectiveAssociationWebsiteAndCms: {
    id: 'canadaChiropracticProtectiveAssociationWebsiteAndCms',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/ccpa.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Chiropractic Protective Association - Website & CMS'
      }
    ],
    frames: [],
    title: 'Canada Chiropractic Protective Association - Website & CMS',
    desc: 'For the Canada Chiropractic Protective Association, I developed a Microsoft Dynamics 365 CRM-integrated website. This project allowed the client to manage case information and plans effectively, enhancing their administrative capabilities and supporting better client service through a centralized, accessible platform.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Microsoft Dynamics 365', 'CRM Integration', 'Web Development', 'Client Management']
  },
  canadaDryEnterPinContest: {
    id: 'canadaDryEnterPinContest',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry - Enter PIN Contest'
      }
    ],
    frames: [],
    title: 'Canada Dry - Enter PIN Contest',
    desc: 'I designed and developed an entry-based contest for Canada Dry using PHP and Ractive.js. This interactive project allowed users to enter PIN codes for a chance to win, engaging customers and promoting Canada Dry’s brand in a fun, user-driven way.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['PHP', 'Ractive.js', 'ProfileEntry Engagement', 'Contest Development']
  },
  canadaDryWebsite: {
    id: 'canadaDryWebsite',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry - Website'
      }
    ],
    frames: [],
    title: 'Canada Dry - Website',
    desc: 'I developed a dynamic landing site for Canada Dry that featured parallax effects and interactive animations. Built with PHP, this visually engaging site supported Canada Dry’s branding and offered an interactive experience for users, enhancing the brand’s digital presence.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['PHP', 'Parallax', 'Animation', 'Web Development']
  },
  monogramCanadianCatalogWebsite: {
    id: 'monogramCanadianCatalogWebsite',
    roles: ['development', 'design'],
    src: [
      {
        type: 'image',
        src: '/images/works/monogram.png',
        width: 1920,
        height: 1080,
        alt: 'Monogram - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'Monogram - Canadian Catalog Website',
    desc: 'For Monogram, I developed a responsive catalog website using Koa.js and Ractive.js. This project showcased Monogram’s offerings through a clean, accessible interface that adapted seamlessly across frames, enhancing user engagement and accessibility.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  modaMatchVirtualFittingRoom: {
    id: 'modaMatchVirtualFittingRoom',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/modamatch.png',
        width: 1920,
        height: 1080,
        alt: 'Moda Match - Virtual Fitting Room'
      }
    ],
    frames: [],
    title: 'Moda Match - Virtual Fitting Room',
    desc: 'Moda Match transforms online apparel shopping by enabling customers to virtually try on clothing using predefined models. Integrated as a white-label plugin, it’s compatible with Shopify and WooCommerce, easily installed by store owners to enhance customer engagement. With support for thousands of items, Moda Match helps users visualize fit and dimensions, driving a more personalized shopping experience.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2021-04-01', appTimeZone),
    endDate: fromZonedTime('2021-05-01', appTimeZone),
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
    id: 'parentsCanadaMagazineWebsite',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/parents.png',
        width: 1920,
        height: 1080,
        alt: 'Parents Canada - Magazine Website'
      }
    ],
    frames: [],
    title: 'Parents Canada - Magazine Website',
    desc: 'I developed a custom WordPress theme for Parents Canada’s magazine website, providing a content-rich platform that aligned with the publication’s brand and met the needs of its diverse readership. This theme allowed for easy content updates and a visually engaging user experience.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['WordPress', 'Theme Development', 'Content Management', 'Web Design']
  },
  toffifeeSpinToWinContest: {
    id: 'toffifeeSpinToWinContest',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Toffifee - Spin to Win Contest',
    desc: 'For Toffifee, I created a "spin to win" contest using Express.js and Ractive.js. This engaging, animation-driven contest offered users a fun way to interact with the brand, increasing engagement and enhancing Toffifee’s digital marketing strategy.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Ractive.js', 'Animation', 'ProfileEntry Engagement']
  },
  toyotaBringYourToyotaHomeContest: {
    id: 'toyotaBringYourToyotaHomeContest',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Toyota - Bring Your Toyota Home Contest',
    desc: 'I developed a contest for Toyota, integrating interactive Apple-style parallax animations with Express.js. This project offered users an immersive experience, showcasing Toyota’s commitment to innovative digital engagement.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Parallax', 'Animation', 'Web Development']
  },
  toyotaMakeADateContest: {
    id: 'toyotaMakeADateContest',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Toyota - Make a Date Contest',
    desc: 'I developed a date-driven contest for Toyota that engaged users with interactive elements. This project combined Toyota’s branding with an engaging user interface, encouraging customers to participate and connect with the brand in a unique way.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Interactive Design', 'Contest Development', 'ProfileEntry Engagement']
  },
  babyJoggerCanadianCatalogWebsite: {
    id: 'babyJoggerCanadianCatalogWebsite',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/babyjogger.png',
        width: 1920,
        height: 1080,
        alt: 'BabyJogger - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'BabyJogger - Canadian Catalog Website',
    desc: 'I created a responsive catalog website for BabyJogger using Koa.js and Ractive.js, offering a seamless browsing experience for customers. This site presented BabyJogger’s products in a user-friendly format, helping customers make informed purchasing decisions.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2018-04-01', appTimeZone),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  toyotaSalesReportingDashboard: {
    id: 'toyotaSalesReportingDashboard',
    roles: ['development'],
    src: [],
    frames: [],
    title: 'Toyota - Sales Reporting Dashboard',
    desc: 'For Toyota, I developed an internal sales dashboard using Koa.js to simplify sales reporting processes. This dashboard provided real-time data visualization, making it easier for teams to track sales metrics and make informed business decisions.',
    clientId: 'toyota',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Koa.js', 'Data Visualization', 'Dashboard Development', 'Sales Reporting']
  },
  weiserCanadianCatalogWebsite: {
    id: 'weiserCanadianCatalogWebsite',
    roles: ['development'],
    src: [
      {
        type: 'image',
        src: '/images/works/weiser.png',
        width: 1920,
        height: 1080,
        alt: 'Weiser - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'Weiser - Canadian Catalog Website',
    desc: 'I led the development of a Canadian catalog website for Weiser, using Express and Vue.js to deliver a server-rendered, user-friendly experience. This site showcased Weiser’s products, providing a seamless browsing experience that supported the brand’s online presence.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Express.js', 'Vue.js', 'Catalog Website', 'Server-Side Rendering']
  }
}

const projectIds: ProjectId[] = [
  'beyondModernization',
  'paypowerReloadablePrepaidMastercardMobileApp',
  'techTalkMonoreposWithTurborepo',
  'aeroplanShoppingButtonBrowserExtension',
  'aeroplanEstoreRetailerAndCatalogRedesign',
  'aeroplanEstoreAodaAaWtagCompliance',
  'modaMatchVirtualFittingRoom',
  'rocMarEngineeringEmployeeDashboard',
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

export { projectIds, projectEntries }
