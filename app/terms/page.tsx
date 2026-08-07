'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'

const sections = [
  { km: 'ការទទួលយកលក្ខខណ្ឌ', en: 'Acceptance of terms' },
  { km: 'ការប្រើប្រាស់សេវាកម្មដែលអនុញ្ញាត', en: 'Permitted use of the services' },
  { km: 'ការទទួលខុសត្រូវរបស់អ្នកប្រើប្រាស់', en: 'User responsibilities' },
  { km: 'ការកំណត់ការទទួលខុសត្រូវ', en: 'Limitation of liability' },
  { km: 'ការកែប្រែលក្ខខណ្ឌ', en: 'Changes to these terms' },
]

export default function TermsPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'លក្ខខណ្ឌប្រើប្រាស់', labelEn: 'Terms of Use' },
        ]}
        titleKm="លក្ខខណ្ឌប្រើប្រាស់"
        titleEn="Terms of Use"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="w-fit border-gold/50 bg-gold/10 text-foreground">
            <span lang={locale}>{t('placeholderBadge')}</span>
          </Badge>

          {sections.map((section) => (
            <div key={section.en} className="flex flex-col gap-1.5">
              <h2 lang={locale} className="text-base font-semibold text-navy">
                {pick(section.km, section.en)}
              </h2>
              <p lang={locale} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {pick(
                  '[អត្ថបទផ្លូវការត្រូវបញ្ចូល]',
                  '[Official policy text required]',
                )}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
