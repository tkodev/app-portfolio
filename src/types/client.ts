type ClientId =
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

type ClientEntry = {
  id: ClientId
  name: string
  href: string
  baseSrc: string
  lightSrc: string
  darkSrc: string
}

export type { ClientId, ClientEntry }
