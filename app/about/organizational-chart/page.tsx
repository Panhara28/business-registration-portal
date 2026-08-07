'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'

export default function OrganizationalChartPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/about', labelKm: 'អំពីយើង', labelEn: 'About Us' },
          { labelKm: 'រចនាសម្ព័ន្ធស្ថាប័ន', labelEn: 'Organizational Chart' },
        ]}
        titleKm="រចនាសម្ព័ន្ធស្ថាប័ន"
        titleEn="Organizational Chart"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="border-gold/50 bg-gold/10 text-foreground">
            <span lang={locale}>{t('placeholderBadge')}</span>
          </Badge>
          <p lang={locale} className="text-sm leading-relaxed text-muted-foreground text-pretty">
            {pick(
              '[រចនាសម្ព័ន្ធអង្គភាពផ្លូវការត្រូវបញ្ចូលនៅទីនេះ]',
              '[The official organizational chart is to be entered here]',
            )}
          </p>
        </div>
      </section>
    </>
  )
}
