type Company = {
  name: string
  src: string
  baseSrc: string
  lightSrc: string
  darkSrc: string
}

type Job = {
  companyKey: string
  companyName: string
  title: string
  location: string
  dateFrom: Date
  dateTo: Date
  skills: string[]
}

export type { Company, Job }
