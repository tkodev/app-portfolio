type CompanyEntry = {
  name: string
  src: string
  baseSrc: string
  lightSrc: string
  darkSrc: string
}

type JobEntry = {
  companyKey: string
  companyName: string
  title: string
  location: string
  dateFrom: Date
  dateTo: Date
  skills: string[]
}

export type { CompanyEntry, JobEntry }
