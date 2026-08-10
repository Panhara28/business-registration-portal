'use client'

import { useState } from 'react'
import { Info, Search as SearchIcon } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { demoRegistryRecords, searchTypes } from '@/lib/content/faqs'

export default function SearchPage() {
  const { locale, pick, t } = useLocale()
  const [type, setType] = useState<(typeof searchTypes)[number]['key']>('entity')
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const results = submitted
    ? demoRegistryRecords.filter((record) =>
        query.trim().length === 0
          ? true
          : record.nameEn.toLowerCase().includes(query.toLowerCase()) ||
            record.nameKm.includes(query) ||
            record.registrationNumber.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ស្វែងរកក្នុងបញ្ជី', labelEn: 'Search the Register' },
        ]}
        titleKm="ស្វែងរកក្នុងបញ្ជីពាណិជ្ជកម្ម"
        titleEn="Search the Register"
        descriptionKm="ស្វែងរកអង្គភាព តួនាទី ឈ្មោះដែលបានបម្រុងទុក និងផ្ទៀងផ្ទាត់លេខកូដឯកសារ។"
        descriptionEn="Search entities, roles, reserved names, and document verification codes."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <p lang={locale} className="text-xs leading-relaxed text-foreground/80 text-pretty">
              {pick(
                'លទ្ធផលខាងក្រោមគឺជាទិន្នន័យគំរូសម្រាប់បង្ហាញចំណុចប្រទាក់តែប៉ុណ្ណោះ មិនមែនជាទិន្នន័យផ្លូវការនៃបញ្ជីពាណិជ្ជកម្មទេ។',
                'The results below are interface demonstration data only, not official registry results.',
              )}
            </p>
          </div>

          <form
            className="flex flex-col gap-3"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <div className="flex flex-wrap gap-2">
              {searchTypes.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  lang={locale}
                  onClick={() => setType(option.key)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    type === option.key
                      ? 'border-teal bg-teal text-white'
                      : 'border-border bg-card text-muted-foreground hover:border-teal/50 hover:text-navy'
                  }`}
                >
                  {pick(option.labelKm, option.labelEn)}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                lang={locale}
                placeholder={t('searchPlaceholder')}
                className="h-11 flex-1 rounded-lg px-3.5"
              />
              <Button type="submit" className="h-11 gap-2 bg-teal text-white hover:bg-teal/90">
                <SearchIcon className="size-4" aria-hidden="true" />
                <span lang={locale}>{t('search')}</span>
              </Button>
            </div>
          </form>

          {submitted && (
            <div className="flex flex-col gap-3">
              <h2 lang={locale} className="text-sm font-semibold text-navy">
                {pick('លទ្ធផល', 'Results')} ({results.length})
              </h2>
              <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
                {results.map((record) => (
                  <li key={record.id} className="flex flex-col gap-1 p-4">
                    <span lang={locale} className="text-sm font-medium text-navy">
                      {pick(record.nameKm, record.nameEn)}
                    </span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {record.registrationNumber} · {record.type} · {record.status}
                    </span>
                  </li>
                ))}
                {results.length === 0 && (
                  <li lang={locale} className="p-4 text-sm text-muted-foreground">
                    {pick('រកមិនឃើញលទ្ធផល', 'No results found')}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
