import twGradientMaskImage from 'tailwind-gradient-mask-image'
import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import twAnimate from 'tailwindcss-animate'
import { Theme } from '../types/theme'
import { flattenNestedTheme } from '../utils/theme'

// Design System */
/* This file contains the theme for the design system. */
/* The use of a theme allows us to create custom tailwind classes that are derived from our design system. */

// Table of Contents
// 0. Basics
// 1. Colors
// 2. Typography
// 4. Utilities (Shadow, Border Radius, Z-Index, etc)
// - Combine all themes
// - Tailwind CSS Configuration

// 1. Colors
const colors = {
  device: {
    frame: 'var(--device-frame)'
  },
  basic: {
    base: {
      low: 'var(--basic-base-low)',
      'low-accent': 'var(--basic-base-low-accent)',
      high: 'var(--basic-base-high)',
      'high-accent': 'var(--basic-base-high-accent)'
    },
    active: {
      low: 'var(--basic-active-low)',
      'low-accent': 'var(--basic-active-low-accent)',
      high: 'var(--basic-active-high)',
      'high-accent': 'var(--basic-active-high-accent)'
    }
  },
  inverse: {
    base: {
      low: 'var(--inverse-base-low)',
      'low-accent': 'var(--inverse-base-low-accent)',
      high: 'var(--inverse-base-high)',
      'high-accent': 'var(--inverse-base-high-accent)'
    },
    active: {
      low: 'var(--inverse-active-low)',
      'low-accent': 'var(--inverse-active-low-accent)',
      high: 'var(--inverse-active-high)',
      'high-accent': 'var(--inverse-active-high-accent)'
    }
  },
  brand: {
    base: {
      low: 'var(--brand-base-low)',
      'low-accent': 'var(--brand-base-low-accent)',
      high: 'var(--brand-base-high)',
      'high-accent': 'var(--brand-base-high-accent)'
    },
    active: {
      low: 'var(--brand-active-low)',
      'low-accent': 'var(--brand-active-low-accent)',
      high: 'var(--brand-active-high)',
      'high-accent': 'var(--brand-active-high-accent)'
    }
  },
  info: {
    base: {
      low: 'var(--info-base-low)',
      'low-accent': 'var(--info-base-low-accent)',
      high: 'var(--info-base-high)',
      'high-accent': 'var(--info-base-high-accent)'
    },
    active: {
      low: 'var(--info-active-low)',
      'low-accent': 'var(--info-active-low-accent)',
      high: 'var(--info-active-high)',
      'high-accent': 'var(--info-active-high-accent)'
    }
  },
  warning: {
    base: {
      low: 'var(--warning-base-low)',
      'low-accent': 'var(--warning-base-low-accent)',
      high: 'var(--warning-base-high)',
      'high-accent': 'var(--warning-base-high-accent)'
    },
    active: {
      low: 'var(--warning-active-low)',
      'low-accent': 'var(--warning-active-low-accent)',
      high: 'var(--warning-active-high)',
      'high-accent': 'var(--warning-active-high-accent)'
    }
  },
  destructive: {
    base: {
      low: 'var(--destructive-base-low)',
      'low-accent': 'var(--destructive-base-low-accent)',
      high: 'var(--destructive-base-high)',
      'high-accent': 'var(--destructive-base-high-accent)'
    },
    active: {
      low: 'var(--destructive-active-low)',
      'low-accent': 'var(--destructive-active-low-accent)',
      high: 'var(--destructive-active-high)',
      'high-accent': 'var(--destructive-active-high-accent)'
    }
  },
  success: {
    base: {
      low: 'var(--success-base-low)',
      'low-accent': 'var(--success-base-low-accent)',
      high: 'var(--success-base-high)',
      'high-accent': 'var(--success-base-high-accent)'
    },
    active: {
      low: 'var(--success-active-low)',
      'low-accent': 'var(--success-active-low-accent)',
      high: 'var(--success-active-high)',
      'high-accent': 'var(--success-active-high-accent)'
    }
  }
}

// 2. Typography
const typography: Theme = {
  fontFamily: {
    'alliance-no1': [`var(--font-alliance-no1)`],
    'alliance-no2': [`var(--font-alliance-no2)`],
    carbon: [`var(--font-carbon)`],
    industry: [`var(--font-industry)`],
    inter: [`var(--font-inter)`],
    'geist-sans': [`var(--font-geist-sans)`],
    'geist-mono': [`var(--font-geist-mono)`]
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  }
}

// 3. Layout (Icons, Grid, Sizing, etc)

// utilities
const utilities: Theme = {
  boxShadow: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    '2xl': 'var(--shadow-2xl)',
    inner: 'var(--shadow-inner)'
  },
  borderRadius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '24px',
    '3xl': '36px',
    '4xl': '48px',
    '5xl': '56px',
    '6xl': '64px',
    full: '9999px'
  }
}

// Combine all themes
const theme: Theme = {
  ...defaultTheme,
  darkMode: ['class'],
  colors: flattenNestedTheme(colors),
  ...typography,
  ...utilities
}

// Tailwind CSS Configuration
const themeConfig: Config = {
  content: [],
  theme: {
    extend: theme
  },
  plugins: [twAnimate, twGradientMaskImage]
}

export { theme, themeConfig, colors }
