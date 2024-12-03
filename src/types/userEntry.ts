type UserId = 'tony' | 'tulio' | 'zeena' | 'harpreet'

type UserEntry = {
  id: UserId
  name: string
  title: string
  linkedin: string
  github: string
  email: string
  phone: string
}

export type { UserId, UserEntry }
