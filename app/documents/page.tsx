'use client'

import { Download, FileText } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { formCategories, formDocuments } from '@/lib/content/forms'

export default function DocumentsPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ឯកសារ និងបែបបទ', labelEn: 'Documents and Forms' },
        ]}
        titleKm="ឯកសារ និងបែបបទ"
        titleEn="Documents and Forms"
        descriptionKm="គំរូបែបបទ និងឯកសារស្នើសុំផ្សេងៗ។"
        descriptionEn="Sample forms and application documents."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          {formCategories.map((category) => {
            const documents = formDocuments.filter((doc) => doc.category === category.key)
            if (documents.length === 0) return null

            return (
              <div key={category.key} className="flex flex-col gap-3">
                <h2 lang={locale} className="text-base font-semibold text-navy">
                  {pick(category.labelKm, category.labelEn)}
                </h2>
                <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
                  {documents.map((document) => (
                    <li
                      key={document.id}
                      id={document.id}
                      className="flex items-center gap-3 p-4 scroll-mt-24"
                    >
                      <FileText className="size-4 shrink-0 text-teal" aria-hidden="true" />
                      <div className="flex flex-1 flex-col gap-1.5">
                        <span lang={locale} className="text-sm leading-relaxed font-medium text-navy">
                          {pick(document.titleKm, document.titleEn)}
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {document.fileType && (
                            <span className="text-xs font-medium text-muted-foreground">
                              {document.fileType}
                            </span>
                          )}
                          {document.official ? (
                            <Badge variant="secondary" className="text-xs">
                              <span lang={locale}>{t('official')}</span>
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="border-gold/50 bg-gold/10 text-xs text-foreground"
                            >
                              <span lang={locale}>{t('unverified')}</span>
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Download className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
