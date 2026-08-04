'use client'

import Link from 'next/link'
import { ArrowRight, Download, FileText, Scale } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import { Badge } from '@/components/ui/badge'
import { formDocuments } from '@/lib/content/forms'
import { legalDocuments } from '@/lib/content/laws'
import type { GovernmentDocument } from '@/lib/types'

function DocumentList({
  documents,
  emptyHref,
}: {
  documents: GovernmentDocument[]
  emptyHref: string
}) {
  const { locale, pick, t } = useLocale()

  return (
    <ul className="flex flex-col divide-y divide-border">
      {documents.map((document) => (
        <li key={document.id} className="flex items-start gap-3 py-3.5">
          <FileText className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />

          <div className="flex flex-1 flex-col gap-1.5">
            <Link
              href={`${emptyHref}#${document.id}`}
              lang={locale}
              className="text-sm leading-relaxed font-medium text-navy underline-offset-4 hover:underline"
            >
              {pick(document.titleKm, document.titleEn)}
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {document.documentNumber && (
                <span className="text-xs text-muted-foreground tabular-nums">
                  {document.documentNumber}
                </span>
              )}
              {document.fileType && (
                <span className="text-xs font-medium text-muted-foreground">
                  {document.fileType}
                </span>
              )}
              {document.official ? (
                <Badge variant="secondary" className="gap-1 text-xs">
                  <span lang={locale}>{t('official')}</span>
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="border-gold/50 bg-gold/10 text-xs text-foreground"
                >
                  <span lang={locale}>{t('unverified')}</span>
                </Badge>
              )}
            </div>
          </div>

          <LinkButton
            href={`${emptyHref}#${document.id}`}
            variant="ghost"
            className="size-9 shrink-0 px-0 text-navy"
          >
            <Download className="size-4" aria-hidden="true" />
            <span className="sr-only" lang={locale}>
              {t('download')} {pick(document.titleKm, document.titleEn)}
            </span>
          </LinkButton>
        </li>
      ))}
    </ul>
  )
}

export function ResourcesSection() {
  const { locale, t } = useLocale()

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('resourcesEyebrow')}
          lead={t('resourcesTitleLead')}
          accent={t('resourcesTitleAccent')}
          body={t('resourcesBody')}
          className="mx-auto"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <h3 lang={locale} className="flex items-center gap-2.5 text-lg font-semibold text-navy">
              <Scale className="size-5 text-teal" aria-hidden="true" />
              {t('lawsCardTitle')}
            </h3>
            <DocumentList documents={legalDocuments.slice(0, 5)} emptyHref="/laws" />
            <LinkButton href="/laws" variant="outline" className="w-fit border-navy/25 text-navy">
              <span lang={locale}>{t('viewAllLaws')}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <h3 lang={locale} className="flex items-center gap-2.5 text-lg font-semibold text-navy">
              <FileText className="size-5 text-teal" aria-hidden="true" />
              {t('formsCardTitle')}
            </h3>
            <DocumentList documents={formDocuments.slice(0, 5)} emptyHref="/documents" />
            <LinkButton
              href="/documents"
              variant="outline"
              className="w-fit border-navy/25 text-navy"
            >
              <span lang={locale}>{t('viewAllForms')}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
