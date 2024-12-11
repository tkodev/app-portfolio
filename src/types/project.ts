import { ClientId } from '@/types/client'
import { MediaEntry } from '@/types/media'
import { ProfileId } from '@/types/profile'

type ProjectId =
  | 'beyondModernization'
  | 'paypowerReloadablePrepaidMastercardMobileApp'
  | 'aeroplanShoppingButton'
  | 'aeroplanEStore'
  | 'rocMarEngineeringEmployeeDashboard'
  | 'modaMatchVirtualFittingRoom'
  | 'quantumMobCatalogAppProjectMobCiCdIntegrations'
  | 'quantumMobCoreUtilitiesAuthModule'
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
  | 'web10Era'

type ProjectRole = 'development' | 'design'

type ProjectEntry = {
  id: ProjectId
  media: MediaEntry[]
  frames: MediaEntry[]
  roles: ProjectRole[]
  title: string
  intro: string
  desc?: string
  clientId: ClientId
  profileIds: ProfileId[]
  startDate: Date
  endDate: Date
  skills: string[]
  isFeatured?: boolean
}

export type { ProjectRole, ProjectId, ProjectEntry }
