'use client'

import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'

/**
 * Emblem placeholder.
 *
 * The Royal Government emblem is not reproduced in this prototype. A neutral
 * geometric mark stands in until an official asset is supplied.
 */
function DepartmentMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-lg border border-white/25 bg-white/10 font-semibold',
        className,
      )}
    >
      <svg viewBox="0 0 32 32" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M16 3 5 9v3h22V9L16 3Z" strokeLinejoin="round" />
        <path d="M8 12v13M13 12v13M19 12v13M24 12v13" strokeLinecap="round" />
        <path d="M4 25h24M6 29h20" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function BrandLockup({
  variant = 'dark',
}: {
  /** `dark` sits on the navy bar, `light` on a pale footer. */
  variant?: 'dark' | 'light'
}) {
  const { locale, pick } = useLocale()
  const onDark = variant === 'dark'

  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-md"
      aria-label={pick(siteConfig.department.km, siteConfig.department.en)}
    >
      <DepartmentMark
        className={onDark ? 'text-white' : 'border-navy/15 bg-navy/5 text-navy'}
      />
      <span className="flex flex-col leading-tight">
        <span
          lang={locale}
          className={cn(
            'text-[0.68rem] font-medium tracking-wide',
            onDark ? 'text-teal-soft/80' : 'text-muted-foreground',
          )}
        >
          {pick(siteConfig.ministry.km, siteConfig.ministry.en)}
        </span>
        <span
          lang={locale}
          className={cn(
            'text-sm font-semibold text-balance sm:text-base',
            onDark ? 'text-white' : 'text-navy',
          )}
        >
          {pick(siteConfig.department.km, siteConfig.department.en)}
        </span>
      </span>
    </Link>
  )
}
