'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { whoWeAre } from '@/lib/content/registry'

const links = [
  {
    href: '/about/who-we-are',
    titleKm: 'តើយើងជានរណា',
    titleEn: 'Who We Are',
    descriptionKm: 'នាយកដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម និងតួនាទីរបស់ខ្លួន',
    descriptionEn: 'The department and the role it serves',
  },
  {
    href: '/about/what-we-do',
    titleKm: 'តួនាទី និងភារកិច្ច',
    titleEn: 'What We Do',
    descriptionKm: 'ភារកិច្ចផ្លូវការរបស់នាយកដ្ឋាន',
    descriptionEn: 'Official functions of the department',
  },
  {
    href: '/about/why-online-registry',
    titleKm: 'ហេតុអ្វីប្រើប្រព័ន្ធអនឡាញ',
    titleEn: 'Why Online Registry',
    descriptionKm: 'អត្ថប្រយោជន៍នៃការចុះបញ្ជីតាមប្រព័ន្ធស្វ័យប្រវត្តកម្ម',
    descriptionEn: 'Benefits of the automated registry',
  },
  {
    href: '/about/organizational-chart',
    titleKm: 'រចនាសម្ព័ន្ធស្ថាប័ន',
    titleEn: 'Organizational Chart',
    descriptionKm: 'រចនាសម្ព័ន្ធការងាររបស់នាយកដ្ឋាន',
    descriptionEn: 'Department structure',
  },
]

export default function AboutPage() {
  const { locale, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'អំពីយើង', labelEn: 'About Us' },
        ]}
        titleKm="អំពីយើង"
        titleEn="About Us"
        descriptionKm={whoWeAre.km}
        descriptionEn={whoWeAre.en}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-screen-2xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-teal/50 hover:shadow-soft"
            >
              <h2 lang={locale} className="text-lg font-semibold text-navy">
                {pick(link.titleKm, link.titleEn)}
              </h2>
              <p lang={locale} className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {pick(link.descriptionKm, link.descriptionEn)}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-teal">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
