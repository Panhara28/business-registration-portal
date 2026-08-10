'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { processSteps } from '@/lib/content/registry'

export default function HowWeProcessApplicationPage() {
  const { locale, t, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/starting-a-business', labelKm: 'សេវាកម្មស្វ័យប្រវត្តិកម្ម', labelEn: 'Automated Services' },
          { labelKm: 'នីតិវិធីពិនិត្យពាក្យ', labelEn: 'How We Process Applications' },
        ]}
        titleKm="នីតិវិធីពិនិត្យពាក្យ"
        titleEn="How We Process Applications"
        descriptionKm="នីតិវិធីខាងក្រោមអនុវត្តតាមការពិពណ៌នានៅលើគេហទំព័រចុះបញ្ជីពាណិជ្ជកម្មបច្ចុប្បន្ន។"
        descriptionEn="The steps below follow the procedure described on the current Business Registration website."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-col gap-4">
            {processSteps.map((step) => (
              <li key={step.order} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-lg bg-teal text-sm font-semibold text-white tabular-nums"
                >
                  {step.order}
                </span>
                <div className="flex flex-col gap-1">
                  <span lang={locale} className="text-xs font-medium tracking-wide text-teal">
                    {t('step')} {step.order}
                  </span>
                  <h2 lang={locale} className="text-base font-semibold text-navy">
                    {pick(step.titleKm, step.titleEn)}
                  </h2>
                  <p lang={locale} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {pick(step.descriptionKm, step.descriptionEn)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
