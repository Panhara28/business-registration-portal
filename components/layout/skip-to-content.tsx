'use client'

import { useLocale } from '@/components/locale-provider'

/** Keyboard-only shortcut past the header and navigation. */
export function SkipToContent() {
  const { locale, t } = useLocale()

  return (
    <a
      href="#main-content"
      lang={locale}
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
    >
      {t('skipToContent')}
    </a>
  )
}
