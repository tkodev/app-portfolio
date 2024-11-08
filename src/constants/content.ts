import { Company } from '@/types/content'

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
    src: 'https://www.linkedin.com/company/quantum-mob/',
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
  'babyJogger',
  'canadaDry',
  'geAppliances',
  'monogram',
  'toffifee',
  'weiser'
]

export { companies, companiesOrder }
