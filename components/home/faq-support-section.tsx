'use client'

import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { SectionHeading } from '@/components/section-heading'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { hotlineOptions, siteConfig } from '@/lib/config/site'
import { faqs } from '@/lib/content/faqs'

export function FaqSupportSection() {
  const { locale, pick, t } = useLocale()
  const featured = faqs.slice(0, 6)

  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto grid max-w-screen-2xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        {/* Support column */}
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrow={t('faqEyebrow')}
            lead={t('supportTitle')}
            body={t('supportBody')}
            align="start"
          />

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border shadow-soft">
            <Image
              src="/images/support-desk.png"
              alt={pick(
                'មន្ត្រីសេវាកម្មអតិថិជនកំពុងជួយប្រជាពលរដ្ឋនៅតុទទួលភ្ញៀវ',
                'A customer-service officer assisting a visitor at the help desk',
              )}
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* FAQ column */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow={t('faqEyebrow')}
            lead={t('faqTitleLead')}
            accent={t('faqTitleAccent')}
            align="start"
          />

          <Accordion className="flex flex-col gap-2.5">
            {featured.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-xl border border-border bg-card px-5 last:border-b"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span lang={locale} className="text-sm font-medium text-navy">
                    {locale === 'en' ? faq.questionEn : faq.questionKm}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2.5">
                  <p lang={locale} className="text-sm leading-relaxed text-muted-foreground">
                    {locale === 'en' ? faq.answerEn : faq.answerKm}
                  </p>
                  {faq.placeholder && (
                    <Badge
                      variant="outline"
                      className="w-fit border-gold/50 bg-gold/10 text-xs text-foreground"
                    >
                      <span lang={locale}>{t('placeholderBadge')}</span>
                    </Badge>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <LinkButton href="/faq" variant="outline" className="w-fit border-navy/25 text-navy">
            <span lang={locale}>{t('viewAllFaqs')}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </LinkButton>
        </div>

        {/* Hotline card — full width across both columns */}
        <div className="flex flex-col gap-5 rounded-2xl bg-navy p-6 text-white lg:col-span-2 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-3 lg:max-w-xs">
            <p
              lang={locale}
              className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-teal-soft"
            >
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
          </div>

          <ul className="grid flex-1 grid-cols-1 gap-x-6 gap-y-1.5 border-t border-white/15 pt-3 sm:grid-cols-2 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
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

          <LinkButton
            href="/contact"
            className="w-fit shrink-0 bg-teal text-white hover:bg-teal/90"
          >
            <span lang={locale}>{t('contactUs')}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
