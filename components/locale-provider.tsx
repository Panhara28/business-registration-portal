'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { LOCALE_STORAGE_KEY, defaultLocale, t as translate, type UiKey } from '@/lib/i18n'
import type { Locale } from '@/lib/types'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  /** Interface label lookup. */
  t: (key: UiKey) => string
  /** Bilingual content lookup with Khmer fallback. */
  pick: (km: string, en?: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Restore the visitor's choice after mount so the server render stays stable.
  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored === 'km' || stored === 'en') setLocaleState(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === 'km' ? 'en' : 'km'
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
      return next
    })
  }, [])

  const value: LocaleContextValue = {
    locale,
    setLocale,
    toggleLocale,
    t: (key) => translate(locale, key),
    pick: (km, en) => (locale === 'en' && en && en.length > 0 ? en : km),
  }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within a LocaleProvider')
  return context
}
