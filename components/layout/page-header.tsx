'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'

export interface Crumb {
  href?: string
  labelKm: string
  labelEn: string
}

/** Shared banner for every inner page: breadcrumb, title, optional description. */
export function PageHeader({
  crumbs,
  titleKm,
  titleEn,
  descriptionKm,
  descriptionEn,
  className,
}: {
  crumbs: Crumb[]
  titleKm: string
  titleEn: string
  descriptionKm?: string
  descriptionEn?: string
  className?: string
}) {
  const { locale, pick } = useLocale()

  return (
    <section className={cn('relative isolate overflow-hidden bg-navy py-12 lg:py-16', className)}>
      <div aria-hidden="true" className="kh-pattern-dark absolute inset-0 opacity-50" />

      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 sm:px-6 lg:px-8">
        <nav aria-label={pick('ផ្លូវរុករក', 'Breadcrumb')} lang={locale}>
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/60">
            {crumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="size-3" aria-hidden="true" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    {pick(crumb.labelKm, crumb.labelEn)}
                  </Link>
                ) : (
                  <span className="text-white/85">{pick(crumb.labelKm, crumb.labelEn)}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1
          lang={locale}
          className="max-w-3xl text-3xl leading-tight font-semibold text-balance text-white sm:text-4xl"
        >
          {pick(titleKm, titleEn)}
        </h1>

        {(descriptionKm ?? descriptionEn) && (
          <p lang={locale} className="max-w-2xl text-sm leading-relaxed text-white/75 text-pretty">
            {pick(descriptionKm ?? '', descriptionEn)}
          </p>
        )}
      </div>
    </section>
  )
}
