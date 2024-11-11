import type { ClassValue } from 'clsx'
import { cva, type VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { FlattenedDictionary, NestedDictionary } from '../types/theme'

/**
 * Merges and combines class names using `clsx` and `tailwind-merge`.
 *
 * @param inputs - An array of class values which can be strings, arrays, or objects with boolean values.
 * @returns A single string of merged class names.
 */
const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

/**
 * Flattens a nested theme object into a single level theme object.
 * Some tailwind styles are single level, this function flattens nested styles.
 *
 * @param input - The nested theme object to flatten
 * @returns A single level object
 */
function flattenNestedTheme(input: NestedDictionary, prefix: string = ''): FlattenedDictionary {
  let flatColors: FlattenedDictionary = {}

  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      const value = input[key]
      const newKey = prefix ? `${prefix}-${key}` : key

      if (typeof value === 'string') {
        flatColors[newKey] = value
      } else if (typeof value === 'object' && value !== null) {
        flatColors = { ...flatColors, ...flattenNestedTheme(value, newKey) }
      }
    }
  }

  return flatColors
}

/**
 * Calculates the rem value of a given pixel value.
 * @param pixels - The pixel value to convert to rem.
 * @param fontSize - The base font size to convert pixels to rem.
 */
const pxToRem = (pixels: number | string, fontSize = 16) => {
  const parsedPixels =
    typeof pixels === 'string' ? parseInt(pixels.replace(/\s*px/gi, ''), 10) : pixels
  const rem = parsedPixels / fontSize
  return `${rem}rem`
}

export type { VariantProps }
export { cn, cva, flattenNestedTheme, pxToRem }
