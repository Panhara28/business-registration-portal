'use client'

import Link from 'next/link'
import { ArrowRight, CalendarDays, Paperclip } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { announcements } from '@/lib/content/announcements'

export function AnnouncementsSection() {
  const { locale, pick, t } = useLocale()

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t('announcementsEyebrow')}
            lead={t('announcementsTitleLead')}
            accent={t('announcementsTitleAccent')}
            align="start"
          />
          <LinkButton
            href="/announcements"
            variant="outline"
            className="w-fit border-navy/25 text-navy"
          >
            <span lang={locale}>{t('viewAllAnnouncements')}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </LinkButton>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {announcements.slice(0, 6).map((announcement) => (
            <li key={announcement.id} className="flex">
              <article className="flex flex-1 flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                    <span lang={locale}>
                      {pick(announcement.categoryKm, announcement.category)}
                    </span>
                  </Badge>
                  {!announcement.verified && (
                    <Badge
                      variant="outline"
                      className="border-gold/50 bg-gold/10 text-xs text-foreground"
                    >
                      <span lang={locale}>{t('unverified')}</span>
                    </Badge>
                  )}
                </div>

                <h3 lang={locale} className="text-base leading-snug font-semibold text-navy">
                  <Link
                    href={`/announcements/${announcement.slug}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {pick(announcement.titleKm, announcement.titleEn)}
                  </Link>
                </h3>

                <p
                  lang={locale}
                  className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty"
                >
                  {pick(announcement.excerptKm, announcement.excerptEn)}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border pt-3">
                  <span
                    lang={locale}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <CalendarDays className="size-3.5" aria-hidden="true" />
                    {announcement.publicationDate ?? t('dateNotEntered')}
                  </span>
                  {announcement.hasAttachment && (
                    <span
                      lang={locale}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                    >
                      <Paperclip className="size-3.5" aria-hidden="true" />
                      {t('attachment')}
                    </span>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
