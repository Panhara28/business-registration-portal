'use client'

import Link from 'next/link'
import { ExternalLink, MapPin, Phone } from 'lucide-react'

import { useLocale } from '@/components/locale-provider'
import { siteConfig } from '@/lib/config/site'
import { footerNavigation } from '@/lib/content/navigation'
import type { UiKey } from '@/lib/i18n'

interface FooterLink {
  href: string
  labelKm: string
  labelEn: string
}

export function SiteFooter() {
  const { locale, pick, t } = useLocale()

  const columns: { key: UiKey; links: readonly FooterLink[] }[] = [
    { key: 'footerServices', links: footerNavigation.services },
    { key: 'footerStarting', links: footerNavigation.starting },
    { key: 'footerResources', links: footerNavigation.resources },
  ]

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:gap-8 lg:px-8">
        <div className="flex flex-col gap-4">
          <p lang={locale} className="text-sm font-semibold text-white">
            {pick(siteConfig.department.km, siteConfig.department.en)}
          </p>
          <p lang={locale} className="max-w-sm text-sm leading-relaxed">
            {t('footerAbout')}
          </p>
          <a
            href={siteConfig.links.ministry}
            target="_blank"
            rel="noreferrer"
            lang={locale}
            className="inline-flex w-fit items-center gap-1.5 text-sm text-teal-soft underline-offset-4 hover:underline"
          >
            {t('ministryWebsite')}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>

        {columns.map((column) => (
          <nav key={column.key} aria-label={t(column.key)} className="flex flex-col gap-3">
            <h2 lang={locale} className="text-xs font-semibold tracking-wide text-white uppercase">
              {t(column.key)}
            </h2>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    lang={locale}
                    className="text-sm leading-relaxed underline-offset-4 hover:text-white hover:underline"
                  >
                    {pick(link.labelKm, link.labelEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <div className="flex flex-col gap-2">
            <h2 lang={locale} className="text-xs font-semibold tracking-wide text-white uppercase">
              {t('footerContact')}
            </h2>
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <Phone className="size-4 shrink-0 text-teal" aria-hidden="true" />
              {siteConfig.hotlines.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s/g, '')}`}
                  className="tabular-nums text-white underline-offset-4 hover:underline"
                >
                  {number}
                </a>
              ))}
            </p>
            <p lang={locale} className="flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
              {pick(siteConfig.address.km, siteConfig.address.en)}
            </p>
            <p lang={locale} className="text-sm">
              {pick(siteConfig.officeHours.km, siteConfig.officeHours.en)}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerNavigation.utility.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    lang={locale}
                    className="text-sm underline-offset-4 hover:text-white hover:underline"
                  >
                    {pick(link.labelKm, link.labelEn)}
                  </Link>
                </li>
              ))}
            </ul>
            <p lang={locale} className="text-xs">
              &copy; {new Date().getFullYear()}{' '}
              {pick(siteConfig.ministry.km, siteConfig.ministry.en)}. {t('allRightsReserved')}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
