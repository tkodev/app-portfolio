type CompanyId =
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
  id: CompanyId
  name: string
  href: string
  baseSrc: string
  lightSrc: string
  darkSrc: string
}

type JobId =
  | 'badalStaffSoftwareEngineer'
  | 'quantumMobStaffSoftwareEngineer'
  | 'quantumMobSeniorSoftwareEngineer'
  | 'quantumMobSoftwareEngineerII'
  | 'quantumMobSoftwareEngineerI'
  | 'brandfireIntermediateFrontEndDeveloper'
  | 'kosInteriorDesignInteriorDesigner'

type JobEntry = {
  id: JobId
  companyId: CompanyId
  companyName: string
  title: string
  location: string
  startDate: Date
  endDate: Date
  skills: string[]
}

type ProjectId =
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

type ProjectEntry = {
  id: ProjectId
  src?: string
  title: string
  subtitle: string
  tagline: string
  desc: string
  companyKey: CompanyId
  startDate: Date
  endDate: Date
  skills: string[]
  isFeatured?: boolean
}

export type { CompanyId, CompanyEntry, JobEntry, ProjectId, ProjectEntry }
