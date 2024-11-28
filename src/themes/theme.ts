// noinspection ES6PreferShortImport - tailwind does not support ts aliases

import fluid from 'fluid-tailwind'
import twGradientMaskImage from 'tailwind-gradient-mask-image'
import { Config } from 'tailwindcss'
import twAnimate from 'tailwindcss-animate'
import defaultTheme from 'tailwindcss/defaultTheme'
import { fontFamily } from 'tailwindcss/defaultTheme'
import { Theme } from '../types/theme'
import { pxToRem } from '../utils/theme'

const screens: Theme = {
  screens: {
    // base
    xs: pxToRem(480),
    sm: pxToRem(640),
    md: pxToRem(768),
    lg: pxToRem(1024),
    xl: pxToRem(1280),
    // extended
    '2xl': pxToRem(1440),
    '3xl': pxToRem(1536),
    '4xl': pxToRem(1920)
  }
}

const colors: Theme = {
  colors: {
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))'
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))'
    },
    destructive: {
      DEFAULT: 'hsl(var(--destructive))',
      foreground: 'hsl(var(--destructive-foreground))'
    },
    muted: {
      DEFAULT: 'hsl(var(--muted))',
      foreground: 'hsl(var(--muted-foreground))'
    },
    accent: {
      DEFAULT: 'hsl(var(--accent))',
      foreground: 'hsl(var(--accent-foreground))'
    },
    popover: {
      DEFAULT: 'hsl(var(--popover))',
      foreground: 'hsl(var(--popover-foreground))'
    },
    card: {
      DEFAULT: 'hsl(var(--card))',
      accent: 'hsl(var(--card-accent))',
      foreground: 'hsl(var(--card-foreground))'
    }
  }
}

const typography: Theme = {
  fontSize: {
    // tw defaults in rem
    xs: [pxToRem(12), { lineHeight: pxToRem(12 * 1.5) }],
    sm: [pxToRem(14), { lineHeight: pxToRem(14 * 1.5) }],
    base: [pxToRem(16), { lineHeight: pxToRem(16 * 1.5) }],
    lg: [pxToRem(18), { lineHeight: pxToRem(18 * 1.5) }],
    xl: [pxToRem(20), { lineHeight: pxToRem(20 * 1.5) }],
    '2xl': [pxToRem(24), { lineHeight: pxToRem(24 * 1.5) }],
    '3xl': [pxToRem(30), { lineHeight: pxToRem(30 * 1.5) }],
    '4xl': [pxToRem(36), { lineHeight: pxToRem(36 * 1.5) }],
    '5xl': [pxToRem(48), { lineHeight: pxToRem(48 * 1.5) }],
    '6xl': [pxToRem(64), { lineHeight: pxToRem(64 * 1.5) }],
    // custom
    h3: [pxToRem(24), { lineHeight: pxToRem(24 + 8) }],
    h2: [pxToRem(32), { lineHeight: pxToRem(32 + 8) }],
    h1: [pxToRem(40), { lineHeight: pxToRem(40 + 8) }]
  },
  fontFamily: {
    sans: ['var(--font-sans)', ...fontFamily.sans],
    'alliance-no1': [`var(--font-alliance-no1)`],
    'alliance-no2': [`var(--font-alliance-no2)`],
    carbon: [`var(--font-carbon)`],
    industry: [`var(--font-industry)`],
    inter: [`var(--font-inter)`],
    'geist-sans': [`var(--font-geist-sans)`],
    'geist-mono': [`var(--font-geist-mono)`]
  }
}

const utilities: Theme = {
  boxShadow: {
    DEFAULT: 'var(--shadow-md)',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    inset: 'var(--shadow-inset)'
  },
  borderRadius: {
    DEFAULT: 'var(--radius)',
    xs: 'calc(var(--radius) - 0.50rem)',
    sm: 'calc(var(--radius) - 0.25rem)',
    md: 'var(--radius)',
    lg: 'calc(var(--radius) + 0.25rem)',
    xl: 'calc(var(--radius) + 0.50rem)'
  }
}

const animations: Theme = {
  keyframes: {
    ...defaultTheme.keyframes,
    'accordion-down': {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' }
    },
    'accordion-up': {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' }
    }
  },
  animation: {
    ...defaultTheme.animation,
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out'
  }
}

const theme: Theme = {
  ...defaultTheme,
  ...screens,
  ...colors,
  ...typography,
  ...utilities,
  ...animations
}

// Tailwind CSS Configuration
const themeConfig: Config = {
  content: {
    files: []
  },
  theme: {
    ...screens,
    fontSize: typography.fontSize,
    extend: theme
  },
  plugins: [fluid, twAnimate, twGradientMaskImage]
}

export { theme, themeConfig }
