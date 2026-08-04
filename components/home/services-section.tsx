'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Bookmark,
  Building2,
  CalendarCheck,
  FilePen,
  KeyRound,
  Lock,
  Search,
  UserPlus,
  type LucideIcon,
} from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import { services } from '@/lib/content/services'
import type { ServiceIconName } from '@/lib/types'

const iconMap: Record<ServiceIconName, LucideIcon> = {
  'user-plus': UserPlus,
  bookmark: Bookmark,
  building: Building2,
  search: Search,
  'file-pen': FilePen,
  'calendar-check': CalendarCheck,
  award: Award,
  'key-round': KeyRound,
}

export function ServicesSection() {
  const { locale, t } = useLocale()

  return (
    <section id="services" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('servicesEyebrow')}
          lead={t('servicesTitleLead')}
          accent={t('servicesTitleAccent')}
          body={t('servicesBody')}
          className="mx-auto"
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <li key={service.slug} className="flex">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-1 flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-soft"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-accent text-navy transition-colors group-hover:bg-teal group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <h3 lang={locale} className="text-base leading-snug font-semibold text-navy">
                    {locale === 'en' ? service.titleEn : service.titleKm}
                  </h3>

                  <p
                    lang={locale}
                    className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty"
                  >
                    {locale === 'en' ? service.summaryEn : service.summaryKm}
                  </p>

                  {service.loginRequired && (
                    <p
                      lang={locale}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                    >
                      <Lock className="size-3.5" aria-hidden="true" />
                      {t('loginRequired')}
                    </p>
                  )}

                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1 text-sm font-medium text-teal"
                  >
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <LinkButton href="/services" className="mx-auto bg-navy text-white hover:bg-navy/90">
          <span lang={locale}>{t('viewAllServices')}</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </LinkButton>
      </div>
    </section>
  )
}
