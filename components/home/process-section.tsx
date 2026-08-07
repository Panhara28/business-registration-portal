'use client'

import { ArrowRight } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/content/registry'

export function ProcessSection() {
  const { locale, t } = useLocale()

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 lg:py-24">
      <div aria-hidden="true" className="kh-pattern-dark absolute inset-0 opacity-50" />

      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('processEyebrow')}
          lead={t('processTitleLead')}
          accent={t('processTitleAccent')}
          body={t('processBody')}
          tone="dark"
          className="mx-auto"
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.order}
              className="flex flex-col gap-3 rounded-xl border border-white/15 bg-white/5 p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-lg bg-teal text-sm font-semibold text-white tabular-nums"
                >
                  {step.order}
                </span>
                <span lang={locale} className="text-xs font-medium tracking-wide text-teal-soft">
                  {t('step')} {step.order}
                </span>
              </div>

              <h3 lang={locale} className="text-base leading-snug font-semibold text-white">
                {locale === 'en' ? step.titleEn : step.titleKm}
              </h3>

              <p lang={locale} className="text-sm leading-relaxed text-white/70 text-pretty">
                {locale === 'en' ? step.descriptionEn : step.descriptionKm}
              </p>
            </li>
          ))}
        </ol>

        <LinkButton
          href="/starting-a-business/how-we-process-your-application"
          className="mx-auto bg-white text-navy hover:bg-white/90"
        >
          <span lang={locale}>{t('viewFullProcedure')}</span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </LinkButton>
      </div>
    </section>
  )
}
