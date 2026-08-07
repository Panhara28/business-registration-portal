'use client'

import Link from 'next/link'
import { CalendarDays, Paperclip } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { announcements } from '@/lib/content/announcements'

export default function AnnouncementsPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'សេចក្តីជូនដំណឹង', labelEn: 'Announcements' },
        ]}
        titleKm="សេចក្តីជូនដំណឹង"
        titleEn="Announcements"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((announcement) => (
              <li key={announcement.id} className="flex">
                <article className="flex flex-1 flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                      <span lang={locale}>{pick(announcement.categoryKm, announcement.category)}</span>
                    </Badge>
                    {!announcement.verified && (
                      <Badge variant="outline" className="border-gold/50 bg-gold/10 text-xs text-foreground">
                        <span lang={locale}>{t('unverified')}</span>
                      </Badge>
                    )}
                  </div>

                  <h2 lang={locale} className="text-base leading-snug font-semibold text-navy">
                    <Link
                      href={`/announcements/${announcement.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {pick(announcement.titleKm, announcement.titleEn)}
                    </Link>
                  </h2>

                  <p lang={locale} className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {pick(announcement.excerptKm, announcement.excerptEn)}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-border pt-3">
                    <span lang={locale} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="size-3.5" aria-hidden="true" />
                      {announcement.publicationDate ?? t('dateNotEntered')}
                    </span>
                    {announcement.hasAttachment && (
                      <span lang={locale} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
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
    </>
  )
}
