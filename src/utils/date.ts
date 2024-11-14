import { simpleDateFormat } from '@/constants/date'
import { format } from 'date-fns'

const formatStdDateRange = (startDate: Date, endDate: Date) => {
  const startDateStr = format(startDate, simpleDateFormat)
  const endDateStr = endDate ? format(endDate, simpleDateFormat) : 'Present'

  return `${startDateStr} to ${endDateStr}`
}

export { formatStdDateRange }
