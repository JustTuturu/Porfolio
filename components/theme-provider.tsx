'use client'
import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemesThemeProviderProps,
} from 'next-themes'

interface ThemeProviderProps extends NextThemesThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const mergedProps = {
    defaultTheme: 'system',
    enableSystem: true,
    enableStorage: true,
    ...props,
  }
  return <NextThemesProvider {...mergedProps}>{children}</NextThemesProvider>
}
