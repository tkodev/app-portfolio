import { ClientId } from '@/types/client'
import { MediaEntry } from '@/types/media'
import { ProfileId } from '@/types/profile'

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
  src: MediaEntry[]
  frames: MediaEntry[]
  roles: ProjectRole[]
  title: string
  desc: string
  clientId: ClientId
  profileIds: ProfileId[]
  startDate: Date
  endDate: Date
  skills: string[]
  isFeatured?: boolean
}

export type { ProjectRole, ProjectId, ProjectEntry }
