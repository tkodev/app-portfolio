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
  background: {
    neutral: {
      high: 'var(--color-background-neutral-high)',
      medium: 'var(--color-background-neutral-medium)',
      low: 'var(--color-background-neutral-low)',
      overlay: 'var(--color-background-neutral-overlay)'
    },
    forced: {
      high: 'var(--color-background-forced-high)',
      medium: 'var(--color-background-forced-medium)',
      low: 'var(--color-background-forced-low)',
      overlay: 'var(--color-background-forced-overlay)'
    },
    button: {
      shaded: {
        rest: 'var(--color-background-button-shaded-rest)',
        hover: 'var(--color-background-button-shaded-hover)',
        disabled: 'var(--color-background-button-shaded-disabled)'
      },
      outlined: {
        rest: 'var(--color-background-button-outlined-rest)',
        hover: 'var(--color-background-button-outlined-hover)',
        disabled: 'var(--color-background-button-outlined-disabled)'
      }
    },
    input: {
      rest: 'var(--color-background-input-rest)',
      hover: 'var(--color-background-input-hover)',
      disabled: 'var(--color-background-input-disabled)'
    },
    info: {
      high: 'var(--color-background-info-high)',
      medium: 'var(--color-background-info-medium)',
      low: 'var(--color-background-info-low)'
    },
    warning: {
      high: 'var(--color-background-warning-high)',
      medium: 'var(--color-background-warning-medium)',
      low: 'var(--color-background-warning-low)'
    },
    destructive: {
      high: 'var(--color-background-destructive-high)',
      medium: 'var(--color-background-destructive-medium)',
      low: 'var(--color-background-destructive-low)'
    },
    success: {
      high: 'var(--color-background-success-high)',
      medium: 'var(--color-background-success-medium)',
      low: 'var(--color-background-success-low)'
    }
  },
  foreground: {
    neutral: {
      high: 'var(--color-foreground-neutral-high)',
      medium: 'var(--color-foreground-neutral-medium)',
      low: 'var(--color-foreground-neutral-low)'
    },
    forced: {
      high: 'var(--color-foreground-forced-high)',
      medium: 'var(--color-foreground-forced-medium)',
      low: 'var(--color-foreground-forced-low)'
    },
    button: {
      shaded: {
        rest: 'var(--color-foreground-button-shaded-rest)',
        hover: 'var(--color-foreground-button-shaded-hover)',
        disable: 'var(--color-foreground-button-shaded-disabled)'
      },
      outlined: {
        rest: 'var(--color-foreground-button-outlined-rest)',
        hover: 'var(--color-foreground-button-outlined-hover)',
        disable: 'var(--color-foreground-button-outlined-disabled)'
      }
    },
    input: {
      rest: 'var(--color-foreground-input-rest)',
      hover: 'var(--color-foreground-input-hover)',
      disable: 'var(--color-foreground-input-disabled)'
    },
    info: {
      high: 'var(--color-foreground-info-high)',
      medium: 'var(--color-foreground-info-medium)',
      low: 'var(--color-foreground-info-low)'
    },
    warning: {
      high: 'var(--color-foreground-warning-high)',
      medium: 'var(--color-foreground-warning-medium)',
      low: 'var(--color-foreground-warning-low)'
    },
    success: {
      high: 'var(--color-foreground-success-high)',
      medium: 'var(--color-foreground-success-medium)',
      low: 'var(--color-foreground-success-low)'
    },
    destructive: {
      high: 'var(--color-foreground-destructive-high)',
      medium: 'var(--color-foreground-destructive-medium)',
      low: 'var(--color-foreground-destructive-low)'
    }
  },
  stroke: {
    neutral: {
      high: 'var(--color-stroke-neutral-high)',
      medium: 'var(--color-stroke-neutral-medium)',
      low: 'var(--color-stroke-neutral-low)'
    },
    button: {
      shaded: {
        rest: 'var(--color-stroke-button-shaded-rest)',
        hover: 'var(--color-stroke-button-shaded-hover)',
        disable: 'var(--color-stroke-button-shaded-disabled)'
      },
      outlined: {
        rest: 'var(--color-stroke-button-outlined-rest)',
        hover: 'var(--color-stroke-button-outlined-hover)',
        disable: 'var(--color-stroke-button-outlined-disabled)'
      }
    },
    input: {
      rest: 'var(--color-stroke-input-rest)',
      hover: 'var(--color-stroke-input-hover)',
      disable: 'var(--color-stroke-input-disabled)'
    },
    info: 'var(--color-stroke-info)',
    warning: 'var(--color-stroke-warning)',
    success: 'var(--color-stroke-success)',
    destructive: 'var(--color-stroke-destructive)'
  },
  chart: {
    yellow: {
      high: 'var(--color-chart-yellow-high)',
      medium: 'var(--color-chart-yellow-medium)',
      low: 'var(--color-chart-yellow-low)'
    },
    green: {
      high: 'var(--color-chart-green-high)',
      medium: 'var(--color-chart-green-medium)',
      low: 'var(--color-chart-green-low)'
    },
    purple: {
      high: 'var(--color-chart-purple-high)',
      medium: 'var(--color-chart-purple-medium)',
      low: 'var(--color-chart-purple-low)'
    },
    red: {
      high: 'var(--color-chart-red-high)',
      medium: 'var(--color-chart-red-medium)',
      low: 'var(--color-chart-red-low)'
    },
    brown: {
      high: 'var(--color-chart-brown-high)',
      medium: 'var(--color-chart-brown-medium)',
      low: 'var(--color-chart-brown-low)'
    },
    teal: {
      high: 'var(--color-chart-teal-high)',
      medium: 'var(--color-chart-teal-medium)',
      low: 'var(--color-chart-teal-low)'
    },
    orange: {
      high: 'var(--color-chart-orange-high)',
      medium: 'var(--color-chart-orange-medium)',
      low: 'var(--color-chart-orange-low)'
    },
    blue: {
      high: 'var(--color-chart-blue-high)',
      medium: 'var(--color-chart-blue-medium)',
      low: 'var(--color-chart-blue-low)'
    },
    brand: {
      high: 'var(--color-chart-brand-high)',
      medium: 'var(--color-chart-brand-medium)',
      low: 'var(--color-chart-brand-low)'
    },
    grey: {
      high: 'var(--color-chart-grey-high)',
      medium: 'var(--color-chart-grey-medium)',
      low: 'var(--color-chart-grey-low)'
    }
  }
}

// 2. Typography
const typography: Theme = {
  fontFamily: {
    allianceNo1: [`var(--font-alliance-no1)`],
    allianceNo2: [`var(--font-alliance-no2)`],
    carbon: [`var(--font-carbon)`],
    industry: [`var(--font-industry)`],
    inter: [`var(--font-inter)`],
    geistSans: [`var(--font-geist-sans)`],
    geistMono: [`var(--font-geist-mono)`]
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
    inset: 'var(--shadow-inset)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)'
  },
  borderRadius: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xxl: '24px',
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
