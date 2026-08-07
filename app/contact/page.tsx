'use client'

import { ExternalLink, MapPin, Phone } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { siteConfig, hotlineOptions } from '@/lib/config/site'

export default function ContactPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ទំនាក់ទំនងមកយើង', labelEn: 'Contact Us' },
        ]}
        titleKm="ទំនាក់ទំនងមកយើង"
        titleEn="Contact Us"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-3xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-4 rounded-2xl bg-navy p-6 text-white">
            <p lang={locale} className="flex items-center gap-2 text-xs font-semibold tracking-wide text-teal-soft uppercase">
              <Phone className="size-4" aria-hidden="true" />
              {t('hotline')}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {siteConfig.hotlines.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s/g, '')}`}
                  className="text-xl font-semibold tabular-nums underline-offset-4 hover:underline"
                >
                  {number}
                </a>
              ))}
            </div>
            <ul className="flex flex-col gap-1.5 border-t border-white/15 pt-3">
              {hotlineOptions.map((option) => (
                <li key={option.press} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded bg-white/15 text-[0.65rem] font-semibold tabular-nums"
                  >
                    {option.press}
                  </span>
                  <span lang={locale} className="text-xs leading-relaxed text-white/75">
                    {pick(option.labelKm, option.labelEn)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <div>
              <p lang={locale} className="text-sm font-semibold text-navy">
                {pick(siteConfig.department.km, siteConfig.department.en)}
              </p>
              <p lang={locale} className="text-sm text-muted-foreground">
                {pick(siteConfig.ministry.km, siteConfig.ministry.en)}
              </p>
            </div>

            <p lang={locale} className="flex items-start gap-2 text-sm text-foreground/85">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
              {pick(siteConfig.address.km, siteConfig.address.en)}
            </p>

            <p lang={locale} className="text-sm text-foreground/85">
              {pick(siteConfig.officeHours.km, siteConfig.officeHours.en)}
            </p>

            <a
              href={siteConfig.links.ministry}
              target="_blank"
              rel="noreferrer"
              lang={locale}
              className="inline-flex w-fit items-center gap-1.5 text-sm text-teal underline-offset-4 hover:underline"
            >
              {t('ministryWebsite')}
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
