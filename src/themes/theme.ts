// noinspection ES6PreferShortImport - tailwind does not support ts aliases

import fluid, { extract } from 'fluid-tailwind'
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
    sm: [pxToRem(14), { lineHeight: pxToRem(12 * 1.5) }],
    base: [pxToRem(16), { lineHeight: pxToRem(14 * 1.5) }],
    lg: [pxToRem(18), { lineHeight: pxToRem(16 * 1.5) }],
    // headings
    h6: [pxToRem(20), { lineHeight: pxToRem(20 + 8) }],
    h5: [pxToRem(24), { lineHeight: pxToRem(24 + 8) }],
    h4: [pxToRem(28), { lineHeight: pxToRem(28 + 8) }],
    h3: [pxToRem(32), { lineHeight: pxToRem(32 + 8) }],
    h2: [pxToRem(56), { lineHeight: pxToRem(56 + 8) }],
    h1: [pxToRem(72), { lineHeight: pxToRem(72 + 8) }]
  },
  fontFamily: {
    sans: ['var(--font-sans)', ...fontFamily.sans],
    'alliance-no2': [`var(--font-alliance-no2)`],
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
  },
  opacity: {
    ...defaultTheme.opacity,
    '2.5': '0.025'
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
    },
    'fade-in': {
      '0%, 50%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    'fade-out': {
      '0%, 50%': { opacity: '1' },
      '100%': { opacity: '0' }
    },
    'slide-down': {
      '0%, 50%': {
        transform: 'translateY(-100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: '1'
      }
    },
    'slide-up': {
      '0%, 50%': {
        transform: 'translateY(100%)',
        opacity: '0'
      },
      '100%': {
        transform: 'translateY(0)',
        opacity: '1'
      }
    }
  },
  animation: {
    ...defaultTheme.animation,
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
    'slide-down': 'slide-down 1.5s ease-out',
    'slide-up': 'slide-up 1.5s ease-out',
    'fade-in': 'fade-in 1.5s ease-out',
    'fade-out': 'fade-out 1.5s ease-out'
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
    files: [],
    extract
  },
  theme: {
    ...screens,
    fontSize: typography.fontSize,
    extend: theme
  },
  plugins: [fluid, twAnimate, twGradientMaskImage]
}

export { theme, themeConfig }
