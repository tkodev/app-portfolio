import type { Metadata } from 'next'
import { Favicon } from '@/components/atoms/favicon'
import { Layout } from '@/components/templates/layout'
import { defaultTheme } from '@/constants/theme'
import { allianceNo2Font } from '@/fonts/alliance-no2'
import { interFont } from '@/fonts/inter'
import { ThemeProvider } from '@/providers/theme'
import { cn, cva } from '@/utils/theme'
import '../themes/theme.css'
import '../themes/theme-vars.css'

const styles = {
  html: cva('w-full h-full'),
  body: cva('w-full h-full bg-basic-base-low text-basic-base-high font-inter text-sm font-normal')
}

const pagedata = {
  title: 'Tony Ko / Portfolio',
  description:
    'Experienced Staff Software Engineer with 7+ years building North America’s leading brands, specializing in scalable, accessible, and user-friendly software. Proven track record in leading modernization initiatives, architecting high-impact solutions, and mentoring engineers.',
  url: 'https://tko.dev'
}

const metadata: Metadata = {
  title: pagedata.title,
  description: pagedata.description,
  openGraph: {
    title: pagedata.title,
    description: pagedata.description,
    url: pagedata.url,
    siteName: pagedata.title,
    images: [
      {
        url: 'https://tko.dev/favicons/preview.png',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: pagedata.title,
    description: pagedata.description,
    images: [
      {
        url: 'https://tko.dev/favicons/preview.png',
        width: 1200,
        height: 630,
        alt: pagedata.title
      }
    ]
  }
}

type LayoutPageProps = {
  children: React.ReactNode
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
  const { children } = props
  return (
    <html lang="en" className={cn(styles.html())} suppressHydrationWarning>
      <head>
        <Favicon />
      </head>
      <body
        className={cn(styles.body(), interFont.variable, allianceNo2Font.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={defaultTheme}
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default LayoutPage
