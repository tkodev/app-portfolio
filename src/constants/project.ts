import { appTimeZone } from '@/constants/date'
import { ProjectEntry, ProjectId } from '@/types/project'
import { fromZonedTime } from 'date-fns-tz'

const projectEntries: Record<ProjectId, ProjectEntry> = {
  beyondModernization: {
    id: 'beyondModernization',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/beyond.png',
        width: 1920,
        height: 1080,
        alt: 'Beyond Oil Rig Control Interface'
      }
    ],
    frames: [],
    title: 'Beyond Oil Rig Control Interface',
    intro:
      'The Beyond project is redefining industrial operations by transforming legacy oil rig systems into a cutting-edge, event-driven architecture. Designed to improve operational integrity and real-time decision-making, this modernization project bridges advanced technology with critical field applications.',
    desc: 'As part of the Beyond MPD modernization project, I co-developed an event-driven architecture using event brokers to ensure reliable communication across control systems interfacing with oil rig panels, communication buses, and PLCs. I collaborated on building a design system in Figma, enabling a consistent and intuitive user interface across applications. I contributed to back-end solutions supporting the calibration of chokes and sensors, while co-authoring interpolation algorithms for precise fluid pressure control with rigorous unit testing. Leveraging SVG and Canvas, I designed real-time and historical data visualization solutions capable of tracking over 10,000 data points with subsecond tolerance. Additionally, I developed robust validation schemas, optimized CI/CD pipelines, and ensured global deployment compatibility through precise unit conversion standards. My role also involved creating project management presentations to enhance team efficiency and streamline processes. Beyond is poised to set new standards in the industry, with more details to come post-launch.',
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
    media: [
      {
        type: 'image',
        src: '/images/projects/paypower/paypower.png',
        width: 1640,
        height: 1024,
        alt: 'Paypower Mastercard App'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-overview.png',
        width: 1640,
        height: 1024,
        alt: 'Paypower Mastercard App - Overview'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-cards.png',
        width: 375,
        height: 812,
        alt: 'Paypower Mastercard App - Cards',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-dashboard.png',
        width: 375,
        height: 812,
        alt: 'Paypower Mastercard App - Dashboard',
        frameId: 'mobile'
      },
      {
        type: 'image',
        src: '/images/projects/paypower/paypower-verify.png',
        width: 375,
        height: 812,
        alt: 'Paypower Mastercard App - Verify Identity',
        frameId: 'mobile'
      }
    ],
    title: 'Paypower Mastercard App',
    intro:
      'The PayPower Reloadable Prepaid Mastercard app revolutionized prepaid financial management with a customizable React Native solution. Combining robust backend architecture, dynamic theming, and accessibility-first design, the app delivered an intuitive and user-focused experience for both clients and end-users.',
    desc: 'As Team Lead, I spearheaded the system design and architecture for the PayPower app, focusing on scalability and feature consistency across platforms. For PayPower, I implemented a monorepo architecture with feature flag-based whitelabeling, enabling tailored deployments for diverse client needs. Transitioning the app’s codebase from Redux to tRPC enhanced data efficiency, while CI/CD pipelines with integrated Sentry monitoring ensured seamless development and robust performance. I also secured and led three client engagements, resulting in contracts for white-label solutions, React Query refactoring, and a UX-focused redesign. My role extended to incident response, managing critical security and deployment challenges to minimize production impact and uphold app reliability.',
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
  aeroplanShoppingButtonBrowserExtension: {
    id: 'aeroplanShoppingButtonBrowserExtension',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan-ext.png',
        width: 2232,
        height: 936,
        alt: 'Aeroplan Shopping Button - Browser Extension'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan-ext-02-activate-offer-coupons-crop.png',
        width: 1440,
        height: 934,
        alt: 'Aeroplan Shopping Button - Offer Activation',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan-ext-04-activated-a-crop.png',
        width: 2880,
        height: 1868,
        alt: 'Aeroplan Shopping Button - Offer Activated',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan-ext-05-landing-a-crop.png',
        width: 2880,
        height: 1868,
        alt: 'Aeroplan Shopping Button - Home View',
        frameId: 'desktop'
      }
    ],
    title: 'Aeroplan Shopping Button - Browser Extension',
    intro:
      'The Aeroplan Shopping Button browser extension brought seamless rewards earning to users across hundreds of retail sites. Designed for cross-browser compatibility, high traffic and dynamic retailer data, this innovative tool streamlined the shopping experience while integrating effortlessly with Aeroplan’s ecosystem.',
    desc: 'As the lead developer for the Aeroplan Shopping Button browser extension, I created a cross-browser solution that integrated rewards earning seamlessly into online shopping. To address the complexities of shopping sessions, I optimized the event system to overcome CORS restrictions and handle interactions across multiple tabs and windows without state conflicts. I implemented an SWR-based query system and developed a navigation tracking system for multi-domain purchase sessions, ensuring smooth user journeys. To manage high traffic and dynamic retailer data, I designed a multi-level caching mechanism that reduced backend load while maintaining responsive performance. This project delivered a reliable, scalable, and user-friendly tool that empowered Aeroplan members to earn rewards effortlessly across hundreds of retailers.',
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
    media: [
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Retailer & Catalog Redesign'
      }
    ],
    frames: [],
    title: 'Aeroplan eStore - Retailer & Catalog Redesign',
    intro:
      'I spearheaded the redesign of the Aeroplan eStore’s catalog and retailer pages, focusing on enhancing usability, visual appeal, and points-earning workflows. This initiative transformed the user experience by introducing seamless navigation and tailored filtering options, enabling users to efficiently locate retailers and maximize points-earning opportunities.',
    desc: 'As part of the Aeroplan eStore redesign, I led the development of advanced catalog filtering and retailer integration features, using React and Redux within a monorepo architecture to streamline cross-platform development. Leveraging cache and query management techniques, I optimized data retrieval for a faster, more responsive user experience. A key focus was on usability, achieved through dynamic whitelabel theming and intuitive UX design. Additionally, I implemented design system enhancements to ensure a consistent and visually appealing interface. By improving functionality and navigation, the redesign significantly boosted user satisfaction and engagement, reinforcing the eStore’s value as a user-friendly points-earning platform.',
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
    media: [
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-overview.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard - Overview'
      }
    ],
    frames: [
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-home.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard - Home',
        frameId: 'desktop'
      },
      {
        type: 'image',
        src: '/images/projects/rocmar/rocmar-dashboard.png',
        width: 1920,
        height: 1080,
        alt: 'RocMar Employee Dashboard - Home',
        frameId: 'desktop'
      }
    ],
    title: 'RocMar Employee Dashboard',
    intro:
      'I led the design and development of an employee dashboard for RocMar Engineering, delivering a user-centric platform that streamlined workflows and optimized productivity. This end-to-end project involved designing a cohesive interface, implementing a robust back-end, and collaborating closely with stakeholders to translate complex processes into actionable, data-driven insights.',
    desc: 'The RocMar Employee Dashboard project required a blend of design and technical expertise to create a platform tailored to architectural productivity needs. I designed the interface and developed a comprehensive design system, ensuring visual consistency and intuitive user interactions. On the back end, I implemented secure infrastructure using Next.js and Express, incorporating OAuth and OpenID Connect (OICD) for seamless SSO authentication via Passport.js. I integrated four OAuth-based APIs to source user data and browsing habits, transforming them into actionable insights through dynamic data visualizations. Leveraging SVG and optimized SQL queries, I combined and reformatted millions of data points spanning years to create meaningful, interactive visualizations. Close collaboration with stakeholders throughout the project ensured that the dashboard met user requirements while aligning with business goals. The result was a powerful, visually cohesive tool that centralized data and elevated employee productivity.',
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
    media: [
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - AODA AA / WTAG 2.0 Compliance'
      }
    ],
    frames: [],
    title: 'Aeroplan eStore - AODA AA / WTAG 2.0 Compliance',
    intro:
      'As the lead developer, I directed Aeroplan eStore’s accessibility overhaul to achieve compliance with AODA AA and WCAG 2.0 standards. This initiative ensured that the platform became inclusive, user-friendly, and fully compliant with accessibility regulations, providing a seamless experience for all users, including those with disabilities.',
    desc: 'Leading the accessibility project, I implemented key enhancements to align the Aeroplan eStore with AODA AA and WCAG 2.0 standards. This included integrating keyboard navigation, ARIA roles, and screen reader optimizations to improve usability for users with diverse needs. Working collaboratively with a team of five junior engineers, I oversaw the implementation of dynamic theming and responsive design to ensure consistency across devices and assistive technologies. Rigorous testing processes, including audits and user testing, were conducted to validate compliance and usability improvements. This project not only made the platform more accessible but also reinforced Aeroplan’s commitment to inclusivity and regulatory compliance.',
    clientId: 'quantumMob',
    profileIds: ['tony', 'steven'],
    startDate: fromZonedTime('2020-10-01', appTimeZone),
    endDate: fromZonedTime('2020-11-01', appTimeZone),
    skills: ['Accessibility', 'AODA Compliance', 'WCAG 2.0', 'React']
  },
  quantumMobCatalogAppProjectMobCiCdIntegrations: {
    id: 'quantumMobCatalogAppProjectMobCiCdIntegrations',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Quantum Mob - Catalog App, Media Mob, CI/CD Integrations',
    intro:
      'As Team Lead, I developed infrastructure for Quantum Mob’s product catalog and introduced a streamlined CI/CD tool for efficient project setup. This tool automated pipeline generation, enhancing development workflows and enabling faster product iteration, contributing to the firm’s commitment to efficient, modern development processes.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-09-01', appTimeZone),
    endDate: fromZonedTime('2020-10-01', appTimeZone),
    skills: ['CI/CD', 'Pipeline Development', 'Product Catalog', 'Team Leadership']
  },
  quantumMobCoreUtilitiesAuthModule: {
    id: 'quantumMobCoreUtilitiesAuthModule',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Quantum Mob - Core Utilities, Auth Module',
    intro:
      'At Quantum Mob, I developed core authentication utilities within a monorepo structure, enabling reuse across multiple projects. These modules provided robust, secure authentication solutions for both internal and client applications, reducing development time on future projects.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2020-07-01', appTimeZone),
    endDate: fromZonedTime('2020-10-01', appTimeZone),
    skills: ['Monorepo', 'Authentication', 'Node.js', 'Modular Development']
  },
  aeroplanEstoreInitialArchitectureAndMvp: {
    id: 'aeroplanEstoreInitialArchitectureAndMvp',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/aeroplan/aeroplan.png',
        width: 1920,
        height: 1080,
        alt: 'Aeroplan eStore - Initial Architecture & MVP'
      }
    ],
    frames: [],
    title: 'Aeroplan eStore - Initial Architecture & MVP',
    intro:
      'As the lead developer, I designed and built the foundational architecture for the Aeroplan eStore MVP, integrating monorepo architecture and feature flag-based whitelabeling. This scalable and flexible solution supported Aeroplan’s entry into online redemption, enabling tailored client experiences and laying the groundwork for future growth.',
    desc: 'The Aeroplan eStore MVP project focused on creating a robust and scalable architecture to meet the needs of a modern online redemption platform. Leveraging React, Redux, and a monorepo architecture, I streamlined cross-platform development while ensuring efficient state management and seamless integration of new features. Feature flag-based whitelabeling was implemented to enable rapid customization for diverse client needs, reducing time-to-market and enhancing flexibility. On the back end, I utilized Node.js to build a resilient server infrastructure capable of supporting high-traffic environments and dynamic data requirements. Additional functionalities, including localization, multi-currency support, and a streamlined checkout process, were incorporated to serve a global audience. By combining scalability, flexibility, and user-focused design, this architecture positioned Aeroplan eStore for long-term success and adaptability.',
    clientId: 'quantumMob',
    profileIds: ['tony', 'nahuel'],
    startDate: fromZonedTime('2020-01-01', appTimeZone),
    endDate: fromZonedTime('2020-06-01', appTimeZone),
    skills: ['React', 'Redux', 'Node.js', 'Server Architecture', 'Front-End Development']
  },
  airMilesLandingPortalDevelopment: {
    id: 'airMilesLandingPortalDevelopment',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/airmiles.png',
        width: 1920,
        height: 1080,
        alt: 'Air Miles - Landing Portal Development'
      }
    ],
    frames: [],
    title: 'Air Miles - Landing Portal Development',
    intro:
      'As a key contributor to the Air Miles Landing Portal development, I played a pivotal role in creating a scalable and cohesive user experience. Leveraging a monorepo architecture and reusable React components, the project emphasized modularity, accessibility, and seamless integration with Air Miles branding.',
    desc: 'The Air Miles Landing Portal project focused on delivering a modular, scalable, and user-friendly platform through a monorepo architecture with reusable React components. I contributed to the implementation of a cohesive design system using Lerna published components, ensuring consistency across the portal while aligning with Air Miles’ branding. Rigorous testing with Jest and Nock ensured reliability and code quality, while accessibility compliance with AODA and WCAG 2.0 AA standards enhanced usability for all users. By adhering to BEM SASS standards, I created maintainable and cross-compatible styles for hundreds of components, delivering a polished and professional user experience.',
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
    media: [],
    frames: [],
    title: 'Pets Above - React Modernization',
    intro:
      'I led the modernization of the Pets Above application, updating the codebase from legacy React and Redux to a more maintainable and efficient structure. This overhaul included enhancements in messaging with RabbitMQ and improvements in data handling with MySQL, aligning the app with modern standards for performance and usability.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-11-01', appTimeZone),
    endDate: fromZonedTime('2019-12-01', appTimeZone),
    skills: ['React', 'Redux', 'RabbitMQ', 'MySQL', 'Application Modernization']
  },
  cardinalMeatsFoodServiceWebsiteAndCms: {
    id: 'cardinalMeatsFoodServiceWebsiteAndCms',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/cardinal.png',
        width: 1920,
        height: 1080,
        alt: 'Cardinal Meats & Food Service - Website & CMS'
      }
    ],
    frames: [],
    title: 'Cardinal Meats & Food Service - Website & CMS',
    intro:
      'For Cardinal Meats, I developed a custom CMS integrated with their Express-based website. This project included creating user-friendly content management tools, providing the client with an accessible platform for content updates and ensuring the site remained engaging and efficient for end-users.',
    clientId: 'quantumMob',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Express.js', 'CMS Development', 'Web Development', 'Node.js']
  },
  canadaChiropracticProtectiveAssociationWebsiteAndCms: {
    id: 'canadaChiropracticProtectiveAssociationWebsiteAndCms',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/ccpa.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Chiropractic Protective Association - Website & CMS'
      }
    ],
    frames: [],
    title: 'Canada Chiropractic Protective Association - Website & CMS',
    intro:
      'For the Canada Chiropractic Protective Association, I developed a Microsoft Dynamics 365 CRM-integrated website. This project allowed the client to manage case information and plans effectively, enhancing their administrative capabilities and supporting better client service through a centralized, accessible platform.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Microsoft Dynamics 365', 'CRM Integration', 'Web Development', 'Client Management']
  },
  canadaDryEnterPinContest: {
    id: 'canadaDryEnterPinContest',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry - Enter PIN Contest'
      }
    ],
    frames: [],
    title: 'Canada Dry - Enter PIN Contest',
    intro:
      'I designed and developed an entry-based contest for Canada Dry using PHP and Ractive.js. This interactive project allowed users to enter PIN codes for a chance to win, engaging customers and promoting Canada Dry’s brand in a fun, user-driven way.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['PHP', 'Ractive.js', 'ProfileEntry Engagement', 'Contest Development']
  },
  canadaDryWebsite: {
    id: 'canadaDryWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/canadadry.png',
        width: 1920,
        height: 1080,
        alt: 'Canada Dry - Website'
      }
    ],
    frames: [],
    title: 'Canada Dry - Website',
    intro:
      'I developed a dynamic landing site for Canada Dry that featured parallax effects and interactive animations. Built with PHP, this visually engaging site supported Canada Dry’s branding and offered an interactive experience for users, enhancing the brand’s digital presence.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['PHP', 'Parallax', 'Animation', 'Web Development']
  },
  monogramCanadianCatalogWebsite: {
    id: 'monogramCanadianCatalogWebsite',
    roles: ['development', 'design'],
    media: [
      {
        type: 'image',
        src: '/images/projects/monogram.png',
        width: 1920,
        height: 1080,
        alt: 'Monogram - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'Monogram - Canadian Catalog Website',
    intro:
      'For Monogram, I developed a responsive catalog website using Koa.js and Ractive.js. This project showcased Monogram’s offerings through a clean, accessible interface that adapted seamlessly across frames, enhancing user engagement and accessibility.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  modaMatchVirtualFittingRoom: {
    id: 'modaMatchVirtualFittingRoom',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/modamatch.png',
        width: 1920,
        height: 1080,
        alt: 'Moda Match - Virtual Fitting Room'
      }
    ],
    frames: [],
    title: 'Moda Match - Virtual Fitting Room',
    intro:
      'Moda Match transforms online apparel shopping by enabling customers to virtually try on clothing using predefined models. Integrated as a white-label plugin, it’s compatible with Shopify and WooCommerce, easily installed by store owners to enhance customer engagement. With support for thousands of items, Moda Match helps users visualize fit and dimensions, driving a more personalized shopping experience.',
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
    media: [
      {
        type: 'image',
        src: '/images/projects/parents.png',
        width: 1920,
        height: 1080,
        alt: 'Parents Canada - Magazine Website'
      }
    ],
    frames: [],
    title: 'Parents Canada - Magazine Website',
    intro:
      'I developed a custom WordPress theme for Parents Canada’s magazine website, providing a content-rich platform that aligned with the publication’s brand and met the needs of its diverse readership. This theme allowed for easy content updates and a visually engaging user experience.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['WordPress', 'Theme Development', 'Content Management', 'Web Design']
  },
  toffifeeSpinToWinContest: {
    id: 'toffifeeSpinToWinContest',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Toffifee - Spin to Win Contest',
    intro:
      'For Toffifee, I created a "spin to win" contest using Express.js and Ractive.js. This engaging, animation-driven contest offered users a fun way to interact with the brand, increasing engagement and enhancing Toffifee’s digital marketing strategy.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Ractive.js', 'Animation', 'ProfileEntry Engagement']
  },
  toyotaBringYourToyotaHomeContest: {
    id: 'toyotaBringYourToyotaHomeContest',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Toyota - Bring Your Toyota Home Contest',
    intro:
      'I developed a contest for Toyota, integrating interactive Apple-style parallax animations with Express.js. This project offered users an immersive experience, showcasing Toyota’s commitment to innovative digital engagement.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Parallax', 'Animation', 'Web Development']
  },
  toyotaMakeADateContest: {
    id: 'toyotaMakeADateContest',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Toyota - Make a Date Contest',
    intro:
      'I developed a date-driven contest for Toyota that engaged users with interactive elements. This project combined Toyota’s branding with an engaging user interface, encouraging customers to participate and connect with the brand in a unique way.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2018-04-01', appTimeZone),
    endDate: fromZonedTime('2019-04-01', appTimeZone),
    skills: ['Express.js', 'Interactive Design', 'Contest Development', 'ProfileEntry Engagement']
  },
  babyJoggerCanadianCatalogWebsite: {
    id: 'babyJoggerCanadianCatalogWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/babyjogger.png',
        width: 1920,
        height: 1080,
        alt: 'BabyJogger - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'BabyJogger - Canadian Catalog Website',
    intro:
      'I created a responsive catalog website for BabyJogger using Koa.js and Ractive.js, offering a seamless browsing experience for customers. This site presented BabyJogger’s products in a user-friendly format, helping customers make informed purchasing decisions.',
    clientId: 'brandfire',
    profileIds: ['tony'],
    startDate: fromZonedTime('2017-04-01', appTimeZone),
    endDate: fromZonedTime('2018-04-01', appTimeZone),
    skills: ['Koa.js', 'Ractive.js', 'Responsive Design', 'Catalog Website']
  },
  toyotaSalesReportingDashboard: {
    id: 'toyotaSalesReportingDashboard',
    roles: ['development'],
    media: [],
    frames: [],
    title: 'Toyota - Sales Reporting Dashboard',
    intro:
      'For Toyota, I developed an internal sales dashboard using Koa.js to simplify sales reporting processes. This dashboard provided real-time data visualization, making it easier for teams to track sales metrics and make informed business decisions.',
    clientId: 'toyota',
    profileIds: ['tony'],
    startDate: fromZonedTime('2019-04-01', appTimeZone),
    endDate: fromZonedTime('2019-11-01', appTimeZone),
    skills: ['Koa.js', 'Data Visualization', 'Dashboard Development', 'Sales Reporting']
  },
  weiserCanadianCatalogWebsite: {
    id: 'weiserCanadianCatalogWebsite',
    roles: ['development'],
    media: [
      {
        type: 'image',
        src: '/images/projects/weiser.png',
        width: 1920,
        height: 1080,
        alt: 'Weiser - Canadian Catalog Website'
      }
    ],
    frames: [],
    title: 'Weiser - Canadian Catalog Website',
    intro:
      'I led the development of a Canadian catalog website for Weiser, using Express and Vue.js to deliver a server-rendered, user-friendly experience. This site showcased Weiser’s products, providing a seamless browsing experience that supported the brand’s online presence.',
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
