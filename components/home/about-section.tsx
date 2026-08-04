'use client'

import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import { registryBenefits } from '@/lib/content/registry'

export function AboutSection() {
  const { locale, pick, t } = useLocale()

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={t('aboutEyebrow')}
            lead={t('aboutTitleLead')}
            accent={t('aboutTitleAccent')}
            align="start"
          />

          <ul className="flex flex-col gap-3">
            {registryBenefits.map((benefit) => (
              <li key={benefit.en} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-emerald/15 text-emerald"
                >
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span lang={locale} className="text-sm leading-relaxed text-foreground/85">
                  {pick(benefit.km, benefit.en)}
                </span>
              </li>
            ))}
          </ul>

          <LinkButton
            href="/about/why-online-registry"
            variant="outline"
            className="w-fit border-navy/25 text-navy"
          >
            <span lang={locale}>{t('learnMoreAboutRegistry')}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </LinkButton>
        </div>

        {/* Overlapping image pair */}
        <div className="relative pb-16 pl-0 sm:pb-20 sm:pl-12">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-soft">
            <Image
              src="/images/about-entrepreneur.png"
              alt={pick(
                'ម្ចាស់អាជីវកម្មខ្នាតតូចនៅក្នុងហាងរបស់គាត់',
                'A small business owner standing in his shop',
              )}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 aspect-square w-40 overflow-hidden rounded-2xl border-4 border-background shadow-lifted sm:w-52">
            <Image
              src="/images/about-digital-registry.png"
              alt={pick(
                'ការបញ្ចូលព័ត៌មានទៅក្នុងប្រព័ន្ធចុះបញ្ជីតាមកុំព្យូទ័រ',
                'Entering information into the digital registry system on a laptop',
              )}
              fill
              sizes="(min-width: 640px) 13rem, 10rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
