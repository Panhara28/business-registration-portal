'use client'

import { notFound, useParams } from 'next/navigation'
import { CalendarDays, Paperclip } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { getAnnouncement } from '@/lib/content/announcements'

export default function AnnouncementDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, pick, t } = useLocale()
  const announcement = getAnnouncement(slug)

  if (!announcement) notFound()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/announcements', labelKm: 'សេចក្តីជូនដំណឹង', labelEn: 'Announcements' },
          { labelKm: announcement.titleKm, labelEn: announcement.titleEn ?? announcement.titleKm },
        ]}
        titleKm={announcement.titleKm}
        titleEn={announcement.titleEn ?? announcement.titleKm}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">
              <span lang={locale}>{pick(announcement.categoryKm, announcement.category)}</span>
            </Badge>
            {!announcement.verified && (
              <Badge variant="outline" className="border-gold/50 bg-gold/10 text-xs text-foreground">
                <span lang={locale}>{t('unverified')}</span>
              </Badge>
            )}
            <span lang={locale} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarDays className="size-3.5" aria-hidden="true" />
              {announcement.publicationDate ?? t('dateNotEntered')}
            </span>
          </div>

          {(announcement.bodyKm ?? [announcement.excerptKm]).map((paragraph, index) => (
            <p key={index} lang={locale} className="text-sm leading-relaxed text-foreground/85 text-pretty">
              {locale === 'en' ? (announcement.bodyEn?.[index] ?? announcement.excerptEn ?? paragraph) : paragraph}
            </p>
          ))}

          {announcement.hasAttachment && (
            <div className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-4">
              <Paperclip className="size-4 shrink-0 text-teal" aria-hidden="true" />
              <span lang={locale} className="text-sm text-navy">
                {announcement.attachmentName ?? t('attachment')}
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
