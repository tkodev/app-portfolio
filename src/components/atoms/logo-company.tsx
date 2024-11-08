import { forwardRef } from 'react'
import { Company } from '@/types/content'
import { cn, cva, VariantProps } from '@/utils/theme'
import Image from 'next/image'
import Link from 'next/link'

const styles = {
  root: cva('relative'),
  img: cva('w-full h-full absolute top-0 left-0 -z-1', {
    variants: {
      variant: {
        light: 'dark:hidden',
        dark: 'light:hidden'
      }
    }
  }),
  baseImg: cva('opacity-0')
}

type LogoCompanyRef = HTMLDivElement
type LogoCompanyProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof styles.root> & {
    company: Company
  }

const LogoCompany = forwardRef<LogoCompanyRef, LogoCompanyProps>((props, ref) => {
  const { company, className, ...rest } = props

  const width = 200
  const height = 50
  const altText = `${company.name}'s Logo`

  return (
    <div ref={ref} className={cn(styles.root({ className }))} {...rest}>
      <Image
        className={cn(styles.img({ variant: 'light' }))}
        src={company.lightSrc}
        width={width}
        height={height}
        alt={altText}
      />
      <Image
        className={cn(styles.img({ variant: 'dark' }))}
        src={company.darkSrc}
        width={width}
        height={height}
        alt={altText}
      />
      <Link href={company.src} target="_blank">
        <Image
          className={cn(styles.baseImg())}
          src={company.baseSrc}
          width={width}
          height={height}
          alt={altText}
        />
      </Link>
    </div>
  )
})
LogoCompany.displayName = 'LogoCompany'

export { LogoCompany }
export type { LogoCompanyProps, LogoCompanyRef }
