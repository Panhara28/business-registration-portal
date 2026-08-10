'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { mainNavigation } from '@/lib/content/navigation'

const startingNav = mainNavigation.find((item) => item.href === '/starting-a-business')

export default function StartingABusinessPage() {
  const { locale, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'សេវាកម្មស្វ័យប្រវត្តិកម្ម', labelEn: 'Automated Services' },
        ]}
        titleKm="សេវាកម្មស្វ័យប្រវត្តិកម្ម"
        titleEn="Automated Services"
        descriptionKm="សេវាកម្មអនឡាញទាំងអស់សម្រាប់ចាប់ផ្តើម និងគ្រប់គ្រងអាជីវកម្មរបស់អ្នក។"
        descriptionEn="All online services for starting and maintaining your business."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {startingNav?.children?.map((child) => (
              <li key={`${child.href}-${child.labelEn}`}>
                <Link
                  href={child.href}
                  className="group flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-soft"
                >
                  <h2 lang={locale} className="text-base font-semibold text-navy">
                    {pick(child.labelKm, child.labelEn)}
                  </h2>
                  {child.descriptionKm && (
                    <p lang={locale} className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {pick(child.descriptionKm, child.descriptionEn ?? '')}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-teal">
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <LinkButton
              href="/starting-a-business/how-we-process-your-application"
              variant="outline"
              className="border-navy/25 text-navy"
            >
              <span lang={locale}>{pick('នីតិវិធីពិនិត្យពាក្យ', 'How We Process Applications')}</span>
            </LinkButton>
            <LinkButton
              href="/starting-a-business/what-happens-next"
              variant="outline"
              className="border-navy/25 text-navy"
            >
              <span lang={locale}>{pick('បន្ទាប់ពីដាក់ពាក្យ', 'What Happens Next')}</span>
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  )
}
