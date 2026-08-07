'use client'

import { Calendar, Clipboard, RefreshCw, Scale, type LucideIcon } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { departmentDuties, departmentFunctions } from '@/lib/content/registry'
import type { DepartmentFunction } from '@/lib/types'

const iconMap: Record<DepartmentFunction['icon'], LucideIcon> = {
  clipboard: Clipboard,
  refresh: RefreshCw,
  calendar: Calendar,
  scale: Scale,
}

export default function WhatWeDoPage() {
  const { locale, pick } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { href: '/about', labelKm: 'អំពីយើង', labelEn: 'About Us' },
          { labelKm: 'តួនាទី និងភារកិច្ច', labelEn: 'What We Do' },
        ]}
        titleKm="តួនាទី និងភារកិច្ច"
        titleEn="What We Do"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {departmentFunctions.map((fn) => {
              const Icon = iconMap[fn.icon]
              return (
                <li
                  key={fn.titleEn}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6"
                >
                  <span className="grid size-11 place-items-center rounded-lg bg-accent text-navy">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 lang={locale} className="text-base font-semibold text-navy">
                    {pick(fn.titleKm, fn.titleEn)}
                  </h2>
                  <p lang={locale} className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {pick(fn.descriptionKm, fn.descriptionEn)}
                  </p>
                </li>
              )
            })}
          </ul>

          <div className="flex flex-col gap-4">
            <h2 lang={locale} className="text-xl font-semibold text-navy">
              {pick('បញ្ជីភារកិច្ចលម្អិត', 'Detailed list of duties')}
            </h2>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {departmentDuties.map((duty) => (
                <li
                  key={duty.en}
                  lang={locale}
                  className="flex items-start gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal" />
                  {pick(duty.km, duty.en)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
