'use client'

import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { ArrowRight, FileText, Lock, Scale } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { getFaqs } from '@/lib/content/faqs'
import { getForm } from '@/lib/content/forms'
import { getLegalDocument } from '@/lib/content/laws'
import { getService, maintenanceServices } from '@/lib/content/services'

function ListBlock({ titleKm, titleEn, itemsKm, itemsEn, locale, pick }: {
  titleKm: string
  titleEn: string
  itemsKm: string[]
  itemsEn: string[]
  locale: 'km' | 'en'
  pick: (km: string, en?: string) => string
}) {
  if (itemsKm.length === 0) return null
  return (
    <div className="flex flex-col gap-2.5">
      <h2 lang={locale} className="text-base font-semibold text-navy">
        {pick(titleKm, titleEn)}
      </h2>
      <ul className="flex flex-col gap-2">
        {itemsKm.map((item, index) => (
          <li
            key={item}
            lang={locale}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/85"
          >
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
            {pick(item, itemsEn[index])}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { locale, pick, t } = useLocale()
  const service = getService(slug)

  if (!service) notFound()

  const relatedForms = (service.relatedFormIds ?? []).map(getForm).filter(Boolean)
  const relatedLaws = (service.relatedLawIds ?? []).map(getLegalDocument).filter(Boolean)
  const relatedFaqs = getFaqs(service.relatedFaqIds)
  const isChangeDetails = service.slug === 'change-business-details'

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/services', labelKm: 'សេវាកម្ម', labelEn: 'Services' },
          { labelKm: service.titleKm, labelEn: service.titleEn },
        ]}
        titleKm={service.titleKm}
        titleEn={service.titleEn}
        descriptionKm={service.summaryKm}
        descriptionEn={service.summaryEn}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
          <div className="flex flex-col gap-10">
            {service.loginRequired && (
              <p
                lang={locale}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
              >
                <Lock className="size-3.5" aria-hidden="true" />
                {t('loginRequired')}
              </p>
            )}

            <ListBlock
              titleKm="អ្នកអាចដាក់ពាក្យ"
              titleEn="Who can apply"
              itemsKm={service.whoCanApplyKm}
              itemsEn={service.whoCanApplyEn}
              locale={locale}
              pick={pick}
            />
            <ListBlock
              titleKm="លក្ខខណ្ឌ"
              titleEn="Conditions"
              itemsKm={service.conditionsKm}
              itemsEn={service.conditionsEn}
              locale={locale}
              pick={pick}
            />
            <ListBlock
              titleKm="ព័ត៌មានដែលត្រូវការ"
              titleEn="Required information"
              itemsKm={service.requiredInformationKm}
              itemsEn={service.requiredInformationEn}
              locale={locale}
              pick={pick}
            />
            <ListBlock
              titleKm="ឯកសារដែលត្រូវការ"
              titleEn="Required documents"
              itemsKm={service.requiredDocumentsKm}
              itemsEn={service.requiredDocumentsEn}
              locale={locale}
              pick={pick}
            />

            <div className="flex flex-col gap-2.5">
              <h2 lang={locale} className="text-base font-semibold text-navy">
                {pick('ជំហានៗ', 'Steps')}
              </h2>
              <ol className="flex flex-col gap-2.5">
                {service.stepsKm.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="grid size-6 shrink-0 place-items-center rounded-full bg-teal text-xs font-semibold text-white tabular-nums"
                    >
                      {index + 1}
                    </span>
                    <span lang={locale} className="pt-0.5 text-sm leading-relaxed text-foreground/85">
                      {pick(step, service.stepsEn[index])}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <ListBlock
              titleKm="បន្ទាប់ពីដាក់ស្នើ"
              titleEn="What happens next"
              itemsKm={service.whatHappensNextKm}
              itemsEn={service.whatHappensNextEn}
              locale={locale}
              pick={pick}
            />

            {isChangeDetails && (
              <div className="flex flex-col gap-2.5">
                <h2 lang={locale} className="text-base font-semibold text-navy">
                  {pick('ប្រភេទការកែប្រែ', 'Types of changes')}
                </h2>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {maintenanceServices.map((item) => (
                    <li
                      key={item.slug}
                      lang={locale}
                      className="rounded-lg border border-border bg-card px-4 py-3"
                    >
                      <p className="text-sm font-medium text-navy">{pick(item.titleKm, item.titleEn)}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                        {pick(item.descriptionKm, item.descriptionEn)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 lang={locale} className="text-sm font-semibold text-navy">
                {pick('ថ្លៃសេវា', 'Fees')}
              </h2>
              <p lang={locale} className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {pick(service.feeNoteKm, service.feeNoteEn)}
              </p>
              <LinkButton
                href="/fees"
                variant="outline"
                className="mt-4 w-fit border-navy/25 text-navy"
              >
                <span lang={locale}>{pick('តារាងថ្លៃសេវា', 'Fee Table')}</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
            </div>

            {relatedForms.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 lang={locale} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <FileText className="size-4 text-teal" aria-hidden="true" />
                  {pick('បែបបទពាក់ព័ន្ធ', 'Related forms')}
                </h2>
                <ul className="mt-3 flex flex-col divide-y divide-border">
                  {relatedForms.map((form) => (
                    <li key={form!.id} className="py-2">
                      <Link
                        href={`/documents#${form!.id}`}
                        lang={locale}
                        className="text-sm text-navy underline-offset-4 hover:underline"
                      >
                        {pick(form!.titleKm, form!.titleEn)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedLaws.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 lang={locale} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <Scale className="size-4 text-teal" aria-hidden="true" />
                  {pick('ច្បាប់ពាក់ព័ន្ធ', 'Related legal documents')}
                </h2>
                <ul className="mt-3 flex flex-col divide-y divide-border">
                  {relatedLaws.map((law) => (
                    <li key={law!.id} className="py-2">
                      <Link
                        href={`/laws#${law!.id}`}
                        lang={locale}
                        className="text-sm text-navy underline-offset-4 hover:underline"
                      >
                        {pick(law!.titleKm, law!.titleEn)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedFaqs.length > 0 && (
              <div className="rounded-xl border border-border bg-card p-5">
                <h2 lang={locale} className="text-sm font-semibold text-navy">
                  {t('faqTitleLead')} {t('faqTitleAccent')}
                </h2>
                <ul className="mt-3 flex flex-col divide-y divide-border">
                  {relatedFaqs.map((faq) => (
                    <li key={faq.id} className="py-2">
                      <Link
                        href="/faq"
                        lang={locale}
                        className="text-sm text-navy underline-offset-4 hover:underline"
                      >
                        {pick(faq.questionKm, faq.questionEn)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.loginRequired && (
              <Badge variant="outline" className="w-fit border-navy/25 text-navy">
                <span lang={locale}>{pick('តម្រូវឲ្យចូលប្រើគណនី', 'Requires account login')}</span>
              </Badge>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}
