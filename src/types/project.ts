import { ClientId } from '@/types/client'

type ProjectId =
  | 'beyondModernization'
  | 'paypowerReloadablePrepaidMastercardMobileApp'
  | 'techTalkMonoreposWithTurborepo'
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

type ProjectRole = 'development' | 'design'

type ProjectEntry = {
  id: ProjectId
  src: string
  roles: ProjectRole[]
  title: string
  subtitle: string
  tagline: string
  desc: string
  clientId: ClientId
  startDate: Date
  endDate: Date
  skills: string[]
  isFeatured?: boolean
}

export type { ProjectRole, ProjectId, ProjectEntry }
