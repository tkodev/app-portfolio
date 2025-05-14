import type { Metadata } from 'next'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Favicon } from '@/components/atoms/favicon'
import { Layout } from '@/components/templates/layout'
import { allianceNo2Font } from '@/fonts/alliance-no2'
import { geistSansFont } from '@/fonts/geist'
import { BgmProvider } from '@/providers/bgm'
import { LifecycleProvider } from '@/providers/lifecycle'
import { ThemeProvider } from '@/providers/theme'
import { cn, cva } from '@/utils/theme'
import '../themes/theme.css'
import '../themes/theme-colors.css'
import '../themes/theme-utils.css'

const styles = {
  html: cva('h-full w-full scroll-smooth'),
  body: cva('h-full w-full bg-background font-geist-sans text-base font-light text-foreground')
}

const pagedata = {
  title: 'Tony Ko / Portfolio',
  siteName: 'tko.dev',
  description:
    "I'm Tony Ko, a Staff Software Engineer with a proven track record of delivering high-performing, secure, and accessible software solutions for top North American brands, including Aeroplan, Air Miles, and Toyota. My expertise spans web,  mobile, browser extensions, and embedded systems, backed by a strong foundation in  TypeScript, Lua, and C. Passionate about fostering team growth, I blend technical excellence with mentorship to lead impactful projects that drive innovation and achieve business goals",
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
    <html className={cn(styles.html())} lang="en" suppressHydrationWarning>
      <Head>
        <Favicon />
      </Head>
      <body
        className={cn(styles.body(), allianceNo2Font.variable, geistSansFont.variable)}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <BgmProvider>
            <LifecycleProvider>
              <Layout>{children}</Layout>
            </LifecycleProvider>
          </BgmProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export { metadata }
export default LayoutPage
