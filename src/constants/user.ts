import { UserId, UserEntry } from '@/types/userEntry'

const userEntries: Record<UserId, UserEntry> = {
  tony: {
    id: 'tony',
    name: 'Tony Ko',
    title: 'Staff Software Engineer',
    linkedin: 'https://www.linkedin.com/in/tkodev',
    github: 'https://www.github.com/tkodev',
    email: 'tony@tko.dev',
    phone: '+1 (647) 300-9787'
  },
  tulio: {
    id: 'tulio',
    name: 'Tulio Fernandes',
    title: 'Staff Software Engineer',
    linkedin: 'https://www.linkedin.com/in/tuliof',
    github: 'https://www.github.com/tuliof',
    email: '',
    phone: ''
  },
  zeena: {
    id: 'zeena',
    name: 'Zeena Adwan',
    title: 'Data Product Manager',
    linkedin: 'https://www.linkedin.com/in/zadwan',
    github: 'https://www.github.com/zadwan',
    email: '',
    phone: ''
  },
  harpreet: {
    id: 'harpreet',
    name: 'Harpreet Singh Sidhu',
    title: 'Product Designer',
    linkedin: 'https://www.linkedin.com/in/preet618',
    github: '',
    email: '',
    phone: ''
  }
}

export { userEntries }
