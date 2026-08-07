'use client'

import { PageHeader } from '@/components/layout/page-header'
import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { getForm } from '@/lib/content/forms'

export default function FeesPage() {
  const { locale, pick, t } = useLocale()
  const feeTable = getForm('doc-public-service-fee-table')

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ថ្លៃសេវា និងការផាកពិន័យ', labelEn: 'Fees and Penalties' },
        ]}
        titleKm="ថ្លៃសេវា និងការផាកពិន័យ"
        titleEn="Fees and Penalties"
        descriptionKm="តារាងថ្លៃសេវាសាធារណៈ និងព័ត៌មានទូទាត់។"
        descriptionEn="Public service fee table and payment info."
      />

      <section id="fee-table" className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6">
            <Badge variant="outline" className="w-fit border-gold/50 bg-gold/10 text-foreground">
              <span lang={locale}>{t('placeholderBadge')}</span>
            </Badge>
            <p lang={locale} className="text-sm leading-relaxed text-foreground/85 text-pretty">
              {pick(
                'ថ្លៃសេវាសាធារណៈត្រូវផ្សព្វផ្សាយជាឯកសារផ្លូវការរបស់ក្រសួងពាណិជ្ជកម្ម។ ថ្លៃសេវាមិនត្រូវប៉ាន់ស្មាន ឬគណនាក្នុងចំណុចប្រទាក់នេះឡើយ។',
                'The public service fee table is published as an official Ministry of Commerce document. Fees are never estimated or calculated in this interface.',
              )}
            </p>
          </div>

          {feeTable && (
            <div id={feeTable.id} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5">
              <div>
                <p lang={locale} className="text-sm font-medium text-navy">
                  {pick(feeTable.titleKm, feeTable.titleEn)}
                </p>
                <p className="text-xs text-muted-foreground">{feeTable.fileType}</p>
              </div>
              <LinkButton href="/documents" variant="outline" className="border-navy/25 text-navy">
                <span lang={locale}>{t('viewAllForms')}</span>
              </LinkButton>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
