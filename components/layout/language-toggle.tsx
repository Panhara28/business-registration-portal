'use client'

import { useLocale } from '@/components/locale-provider'
import type { Locale } from '@/lib/types'
import { cn } from '@/lib/utils'

/**
 * Segmented Khmer / English switch. Both options are always visible so the
 * choice is obvious without having to read the current state.
 */
export function LanguageToggle({
  className,
  variant = 'dark',
}: {
  className?: string
  /** `dark` sits on the navy bar, `light` on a pale surface. */
  variant?: 'dark' | 'light'
}) {
  const { locale, setLocale, t } = useLocale()
  const onDark = variant === 'dark'

  const option = (value: Locale, label: string) => {
    const selected = locale === value
    return (
      <button
        key={value}
        type="button"
        onClick={() => setLocale(value)}
        aria-pressed={selected}
        lang={value}
        className={cn(
          'rounded-full px-3 py-1 text-xs font-medium transition-colors',
          selected && onDark && 'bg-white text-navy',
          selected && !onDark && 'bg-navy text-white',
          !selected && onDark && 'text-white/80 hover:bg-white/10 hover:text-white',
          !selected && !onDark && 'text-muted-foreground hover:bg-navy/5 hover:text-navy',
        )}
      >
        {label}
      </button>
    )
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border p-0.5',
        onDark ? 'border-white/25 bg-white/10' : 'border-border bg-secondary',
        className,
      )}
      role="group"
      aria-label={t('language')}
    >
      {option('km', 'ខ្មែរ')}
      {option('en', 'EN')}
    </div>
  )
}
