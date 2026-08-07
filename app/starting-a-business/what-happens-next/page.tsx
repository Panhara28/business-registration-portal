'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'
import { applicationStatuses, certificateNotes, resubmissionDeadline } from '@/lib/content/registry'

const toneClasses: Record<(typeof applicationStatuses)[number]['tone'], string> = {
  neutral: 'border-border bg-muted text-foreground',
  progress: 'border-blue-200 bg-blue-50 text-blue-800',
  positive: 'border-emerald/30 bg-emerald/10 text-emerald',
  attention: 'border-gold/40 bg-gold/10 text-foreground',
  negative: 'border-destructive/30 bg-destructive/10 text-destructive',
}

export default function WhatHappensNextPage() {
  const { locale, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/starting-a-business', labelKm: 'សេវាកម្មស្វ័យប្រវត្តិកម្ម', labelEn: 'Automated Services' },
          { labelKm: 'បន្ទាប់ពីដាក់ពាក្យ', labelEn: 'What Happens Next' },
        ]}
        titleKm="បន្ទាប់ពីដាក់ពាក្យ"
        titleEn="What Happens Next"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            <h2 lang={locale} className="text-lg font-semibold text-navy">
              {pick('ស្ថានភាពពាក្យស្នើសុំ', 'Application statuses')}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {applicationStatuses.map((status) => (
                <li
                  key={status.key}
                  className={cn('flex flex-col gap-1 rounded-xl border p-4', toneClasses[status.tone])}
                >
                  <span lang={locale} className="text-sm font-semibold">
                    {pick(status.labelKm, status.labelEn)}
                  </span>
                  <span lang={locale} className="text-sm leading-relaxed opacity-90 text-pretty">
                    {pick(status.descriptionKm, status.descriptionEn)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <h2 lang={locale} className="text-sm font-semibold text-foreground">
              {pick('រយៈពេលដាក់ស្នើឡើងវិញ', 'Resubmission deadline')}
            </h2>
            <p lang={locale} className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {pick(resubmissionDeadline.km, resubmissionDeadline.en)}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 lang={locale} className="text-lg font-semibold text-navy">
              {pick('វិញ្ញាបនបត្រអេឡិចត្រូនិក', 'Electronic certificates')}
            </h2>
            <ul className="flex flex-col gap-2">
              {certificateNotes.map((note) => (
                <li
                  key={note.en}
                  lang={locale}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  {pick(note.km, note.en)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
