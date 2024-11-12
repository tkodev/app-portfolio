import fluid, { extract } from 'fluid-tailwind'
import twGradientMaskImage from 'tailwind-gradient-mask-image'
import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import { fontFamily } from 'tailwindcss/defaultTheme'
import twAnimate from 'tailwindcss-animate'
import { Theme } from '../types/theme'
import { pxToRem } from '../utils/theme'

const screens: Theme = {
  screens: {
    sm: pxToRem(640),
    md: pxToRem(768),
    lg: pxToRem(1024),
    xl: pxToRem(1280),
    '2xl': pxToRem(1400)
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
      foreground: 'hsl(var(--card-foreground))'
    }
  }
}

const typography: Theme = {
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '3rem' }],
    '6xl': ['3.75rem', { lineHeight: '3.75rem' }],
    '7xl': ['4.5rem', { lineHeight: '4.5rem' }],
    '8xl': ['6rem', { lineHeight: '6rem' }],
    '9xl': ['8rem', { lineHeight: '8rem' }]
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
  darkMode: ['class'],
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
