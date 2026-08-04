'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useLocale } from '@/components/locale-provider'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'

export function BrandLockup({
  variant = 'dark',
}: {
  /** `dark` sits on the navy bar, `light` on a pale footer. */
  variant?: 'dark' | 'light'
}) {
  const { pick } = useLocale()
  const onDark = variant === 'dark'

  return (
    <Link
      href="/"
      className="group flex items-center gap-3 rounded-md"
      aria-label={pick(siteConfig.department.km, siteConfig.department.en)}
    >
      <Image
        src="/logo.png"
        alt=""
        width={96}
        height={96}
        className="size-24 shrink-0 object-contain"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span
          lang="km"
          className={cn(
            'text-xl font-semibold text-balance sm:text-2xl',
            onDark ? 'text-white' : 'text-navy',
          )}
        >
          {siteConfig.ministry.km}
        </span>
        <span
          className={cn(
            'text-xs font-medium tracking-wide',
            onDark ? 'text-teal-soft/80' : 'text-muted-foreground',
          )}
        >
          {siteConfig.ministry.en}
        </span>
        <span
          lang="km"
          className={cn(
            'text-xs font-medium tracking-wide',
            onDark ? 'text-teal-soft/80' : 'text-muted-foreground',
          )}
        >
          {siteConfig.systemName.km}
        </span>
      </span>
    </Link>
  )
}
