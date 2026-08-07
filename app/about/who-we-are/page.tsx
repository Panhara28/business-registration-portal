'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { siteConfig } from '@/lib/config/site'
import { whoWeAre } from '@/lib/content/registry'

export default function WhoWeArePage() {
  const { locale, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/about', labelKm: 'អំពីយើង', labelEn: 'About Us' },
          { labelKm: 'តើយើងជានរណា', labelEn: 'Who We Are' },
        ]}
        titleKm="តើយើងជានរណា"
        titleEn="Who We Are"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <p lang={locale} className="text-base leading-relaxed text-foreground/85 text-pretty">
            {pick(whoWeAre.km, whoWeAre.en)}
          </p>

          <dl className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2">
            <div>
              <dt lang={locale} className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {pick('ក្រសួង', 'Ministry')}
              </dt>
              <dd lang={locale} className="mt-1 text-sm text-navy">
                {pick(siteConfig.ministry.km, siteConfig.ministry.en)}
              </dd>
            </div>
            <div>
              <dt lang={locale} className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {pick('នាយកដ្ឋាន', 'Department')}
              </dt>
              <dd lang={locale} className="mt-1 text-sm text-navy">
                {pick(siteConfig.department.km, siteConfig.department.en)}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
