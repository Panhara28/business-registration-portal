'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'

const sections = [
  { km: 'គោលបំណងនៃការប្រមូលទិន្នន័យ', en: 'Purpose of data collection' },
  { km: 'ប្រភេទព័ត៌មានដែលប្រមូល', en: 'Types of information collected' },
  { km: 'របៀបប្រើប្រាស់ និងការពារព័ត៌មាន', en: 'How information is used and protected' },
  { km: 'សិទ្ធិរបស់អ្នកប្រើប្រាស់', en: 'User rights' },
  { km: 'ព័ត៌មានទំនាក់ទំនង', en: 'Contact information' },
]

export default function PrivacyPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ឯកជនភាព', labelEn: 'Privacy' },
        ]}
        titleKm="គោលការណ៍ឯកជនភាព"
        titleEn="Privacy Policy"
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
