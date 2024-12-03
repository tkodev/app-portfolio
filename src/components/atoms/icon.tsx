import { FC, HTMLAttributes } from 'react'
import { SvgComponent } from '@/types/theme'
import { cn, cva, VariantProps } from '@/utils/theme'

const styles = {
  root: cva('', {
    variants: {
      size: {
        xs: 'w-[20px] h-[20px]',
        sm: 'w-[24px] h-[24px]',
        md: 'w-[32px] h-[32px]',
        lg: 'w-[40px] h-[40px]',
        xl: 'w-[64px] h-[64px]',
        '2xl': 'w-[96px] h-[96px]',
        '3xl': 'w-[128px] h-[128px]'
      }
    },
    defaultVariants: {
      size: 'sm'
    }
  })
}

type IconProps = HTMLAttributes<SVGElement> &
  VariantProps<typeof styles.root> & {
    icon?: SvgComponent | FC
    alt?: string
  }

const Icon: FC<IconProps> = (props) => {
  const { icon: Icon, alt, size, className, ...rest } = props

  if (!Icon) return null

  return <Icon className={cn(styles.root({ size, className }))} title={alt} {...rest} />
}

export { Icon }
export type { IconProps }
