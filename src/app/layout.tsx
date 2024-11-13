import type { Metadata } from 'next'
import { ReactNode, FC } from 'react'
import { Favicon } from '@/components/atoms/favicon'
import { Layout } from '@/components/sections/layout'
import { allianceNo2Font } from '@/fonts/alliance-no2'
import { interFont } from '@/fonts/inter'
import { ThemeProvider } from '@/providers/theme'
import { cn, cva } from '@/utils/theme'
import Head from 'next/head'
import '../themes/theme.css'
import '../themes/theme-colors.css'
import '../themes/theme-utils.css'

const styles = {
  html: cva('w-full h-full'),
  body: cva('w-full h-full bg-background text-foreground font-inter text-base font-normal')
}

const pagedata = {
  title: 'Tony Ko / Portfolio',
  siteName: 'tko.dev',
  description:
    'Experienced Staff Software Engineer with 7+ years building North America’s leading brands, specializing in scalable, accessible, and user-friendly software. Proven track record in leading modernization initiatives, architecting high-impact solutions, and team building.',
  url: 'https://tko.dev'
}

const metadata: Metadata = {
  title: pagedata.title,
  description: pagedata.description,
  openGraph: {
    title: pagedata.title,
    description: pagedata.description,
    url: pagedata.url,
    siteName: pagedata.siteName,
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
  children: ReactNode
}

const LayoutPage: FC<LayoutPageProps> = (props) => {
  const { children } = props
  return (
    <html lang="en" className={cn(styles.html())} suppressHydrationWarning>
      <Head>
        <Favicon />
      </Head>
      <body
        className={cn(styles.body(), interFont.variable, allianceNo2Font.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default LayoutPage
