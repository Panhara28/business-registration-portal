'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { FileText } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { legalCategories, legalDocuments } from '@/lib/content/laws'

export default function LawsPage() {
  return (
    <Suspense fallback={null}>
      <LawsPageContent />
    </Suspense>
  )
}

function LawsPageContent() {
  const { locale, pick, t } = useLocale()
  const searchParams = useSearchParams()
  const activeType = searchParams.get('type')

  const documents = activeType
    ? legalDocuments.filter((doc) => doc.category === activeType)
    : legalDocuments

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ឯកសារច្បាប់ និងបទប្បញ្ញត្តិ', labelEn: 'Legal Documents and Regulations' },
        ]}
        titleKm="ឯកសារច្បាប់ និងបទប្បញ្ញត្តិ"
        titleEn="Legal Documents and Regulations"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <a
              href="/laws"
              lang={locale}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                !activeType
                  ? 'border-teal bg-teal text-white'
                  : 'border-border bg-card text-muted-foreground hover:border-teal/50 hover:text-navy'
              }`}
            >
              {pick('ទាំងអស់', 'All')}
            </a>
            {legalCategories.map((category) => (
              <a
                key={category.key}
                href={`/laws?type=${category.key}`}
                lang={locale}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeType === category.key
                    ? 'border-teal bg-teal text-white'
                    : 'border-border bg-card text-muted-foreground hover:border-teal/50 hover:text-navy'
                }`}
              >
                {pick(category.labelKm, category.labelEn)}
              </a>
            ))}
          </div>

          <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {documents.map((document) => (
              <li key={document.id} id={document.id} className="flex items-start gap-3 p-4 scroll-mt-24">
                <FileText className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                <div className="flex flex-1 flex-col gap-1.5">
                  <p lang={locale} className="text-sm leading-relaxed font-medium text-navy">
                    {pick(document.titleKm, document.titleEn)}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {document.fileType && (
                      <span className="text-xs font-medium text-muted-foreground">{document.fileType}</span>
                    )}
                    {document.official ? (
                      <Badge variant="secondary" className="text-xs">
                        <span lang={locale}>{t('official')}</span>
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-gold/50 bg-gold/10 text-xs text-foreground">
                        <span lang={locale}>{t('unverified')}</span>
                      </Badge>
                    )}
                  </div>
                </div>
              </li>
            ))}
            {documents.length === 0 && (
              <li lang={locale} className="p-4 text-sm text-muted-foreground">
                {pick('រកមិនឃើញឯកសារ', 'No documents found')}
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  )
}
