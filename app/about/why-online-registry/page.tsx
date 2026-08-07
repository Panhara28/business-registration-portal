'use client'

import { Check } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { registryBenefits } from '@/lib/content/registry'

export default function WhyOnlineRegistryPage() {
  const { locale, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/about', labelKm: 'អំពីយើង', labelEn: 'About Us' },
          { labelKm: 'ហេតុអ្វីប្រើប្រព័ន្ធអនឡាញ', labelEn: 'Why Online Registry' },
        ]}
        titleKm="ហេតុអ្វីប្រើប្រព័ន្ធអនឡាញ"
        titleEn="Why Online Registry"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-3">
            {registryBenefits.map((benefit) => (
              <li key={benefit.en} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald/15 text-emerald"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span lang={locale} className="text-sm leading-relaxed text-foreground/85">
                  {pick(benefit.km, benefit.en)}
                </span>
              </li>
            ))}
          </ul>

          <LinkButton href="/services" className="w-fit bg-navy text-white hover:bg-navy/90">
            <span lang={locale}>{pick('មើលសេវាកម្មទាំងអស់', 'View All Services')}</span>
          </LinkButton>
        </div>
      </section>
    </>
  )
}
