import type { Config } from 'tailwindcss'
import { extract } from 'fluid-tailwind'
import { themeConfig } from './src/themes/theme'

const tailwindConfig: Config = {
  darkMode: 'selector',
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    extract
  },
  presets: [themeConfig]
}
export default tailwindConfig
