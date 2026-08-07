'use client'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { faqCategories, faqs } from '@/lib/content/faqs'

export default function FaqPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'សំណួរញឹកញាប់', labelEn: 'Frequently Asked Questions' },
        ]}
        titleKm="សំណួរញឹកញាប់"
        titleEn="Frequently Asked Questions"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => {
            const items = faqs.filter((faq) => faq.category === category.key)
            return (
              <div key={category.key} className="flex flex-col gap-3">
                <h2 lang={locale} className="text-base font-semibold text-navy">
                  {pick(category.labelKm, category.labelEn)}
                </h2>
                <Accordion className="flex flex-col gap-2.5">
                  {items.map((faq) => (
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
                          <Badge variant="outline" className="w-fit border-gold/50 bg-gold/10 text-xs text-foreground">
                            <span lang={locale}>{t('placeholderBadge')}</span>
                          </Badge>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
