type CompanyKey =
  | 'badal'
  | 'quantumMob'
  | 'rewardops'
  | 'brandfire'
  | 'beyond'
  | 'peoplesGroup'
  | 'airCanada'
  | 'airMiles'
  | 'toyota'
  | 'geAppliances'
  | 'monogram'
  | 'canadaDry'
  | 'weiser'
  | 'toffifee'
  | 'babyJogger'
  | 'kosInteriorDesign'

type CompanyEntry = {
  name: string
  href: string
  baseSrc: string
  lightSrc: string
  darkSrc: string
}

type JobEntry = {
  companyKey: CompanyKey
  companyName: string
  title: string
  location: string
  startDate: Date
  endDate: Date
  skills: string[]
}

type ProjectKey =
  | 'beyondModernization'
  | 'paypowerReloadablePrepaidMastercardMobileApp'
  | 'aeroplanShoppingButtonBrowserExtension'
  | 'aeroplanEstoreRetailerAndCatalogRedesign'
  | 'rocMarEngineeringEmployeeDashboard'
  | 'aeroplanEstoreAodaAaWtagCompliance'
  | 'modaMatchVirtualFittingRoom'
  | 'quantumMobCatalogAppProjectMobCiCdIntegrations'
  | 'quantumMobCoreUtilitiesAuthModule'
  | 'aeroplanEstoreInitialArchitectureAndMvp'
  | 'airMilesLandingPortalDevelopment'
  | 'petsAboveReactModernization'
  | 'cardinalMeatsFoodServiceWebsiteAndCms'
  | 'toyotaSalesReportingDashboard'
  | 'weiserCanadianCatalogWebsite'
  | 'canadaChiropracticProtectiveAssociationWebsiteAndCms'
  | 'canadaDryEnterPinContest'
  | 'canadaDryWebsite'
  | 'monogramCanadianCatalogWebsite'
  | 'parentsCanadaMagazineWebsite'
  | 'toffifeeSpinToWinContest'
  | 'toyotaBringYourToyotaHomeContest'
  | 'toyotaMakeADateContest'
  | 'babyJoggerCanadianCatalogWebsite'

type Project = {
  projectKey: ProjectKey
  src?: string
  title: string
  subtitle: string
  tagline: string
  desc: string
  companyKey: CompanyKey
  startDate: Date
  endDate: Date
  skills: string[]
  isFeatured?: boolean
}

export type { CompanyKey, CompanyEntry, JobEntry, ProjectKey, Project }
