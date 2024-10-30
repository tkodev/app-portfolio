import type { Metadata } from "next";
import { allianceNo1Font } from '@/fonts/alliance-no1'
import { interFont } from '@/fonts/inter'
import { Layout } from '@/components/templates/layout'
import { ThemeProvider } from "@/providers/theme";
import { cn, cva } from "@/utils/theme";
import { Favicon } from '@/components/atoms/favicon'
import "../themes/theme.css";
import "../themes/theme-light.css";
import "../themes/theme-dark.css";

const styles = {
  html: cva('w-full h-full'),
  body: cva(
    'w-full h-full font-inter text-body-md font-normal bg-background-forced-surface-sunken text-foreground-neutral-high'
  )
}

const metadata: Metadata = {
  title: 'tko.dev',
  description: "Tony Ko's Portfolio"
}

type LayoutPageProps = {
  children: React.ReactNode
}

const LayoutPage: React.FC<LayoutPageProps> = (props) => {
  const { children } = props
  return (
    <html lang="en" className={cn(styles.html())} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Favicon />
      </head>
      <body className={cn(styles.body(), allianceNo1Font.className, interFont.className )} suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Layout>
          {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

export { metadata }
export default LayoutPage