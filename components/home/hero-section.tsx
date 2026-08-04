'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Info, Search } from 'lucide-react'

import { useLocale } from '@/components/locale-provider'
import { Button, buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/config/site'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const { locale, pick, t } = useLocale()

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div
        className="absolute inset-0 opacity-12"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/kbach-pka-chan.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '90px auto',
          backgroundPosition: 'top left',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <p
            lang={locale}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-teal" />
            {t('heroEyebrow')}
          </p>

          <h1
            lang={locale}
            className="text-4xl leading-tight font-semibold text-balance sm:text-5xl lg:text-[3.4rem]"
          >
            {t('heroTitleLead')}{' '}
            <span className="text-teal-soft">{t('heroTitleAccent')}</span>
          </h1>

          <p lang={locale} className="max-w-xl text-base leading-relaxed text-white/80 text-pretty">
            {t('heroBody')}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.links.register}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 gap-2 px-6 bg-teal text-white hover:bg-teal/90',
              )}
            >
              <span lang={locale}>{t('startRegistration')}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/starting-a-business/how-we-process-your-application"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-11 gap-2 px-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white',
              )}
            >
              <span lang={locale}>{t('howItWorks')}</span>
            </Link>
          </div>

          {/* Register search */}
          <form
            action={siteConfig.links.search}
            role="search"
            className="flex w-full max-w-xl flex-col gap-2 rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-sm sm:flex-row"
          >
            <label htmlFor="hero-search" className="sr-only" lang={locale}>
              {t('searchTheRegister')}
            </label>
            <div className="flex flex-1 items-center gap-2 px-2">
              <Search className="size-4 shrink-0 text-teal-soft" aria-hidden="true" />
              <input
                id="hero-search"
                name="q"
                type="search"
                lang={locale}
                placeholder={t('searchPlaceholder')}
                className="w-full bg-transparent py-2 text-sm text-white placeholder:text-white/55 focus:outline-none"
              />
            </div>
            <Button type="submit" className="bg-white text-navy hover:bg-white/90">
              <span lang={locale}>{t('search')}</span>
            </Button>
          </form>

          <p lang={locale} className="text-xs leading-relaxed text-white/60">
            {t('trustedNote')}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/15 shadow-lifted">
            <Image
              src="/images/hero-online-registration.png"
              alt={pick(
                'អ្នកជំនួញកំពុងបំពេញពាក្យស្នើសុំចុះបញ្ជីអាជីវកម្មតាមកុំព្យូទ័រ',
                'A business owner completing an online business registration application on a laptop',
              )}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Prototype disclosure — kept visible so the demo is never mistaken for the live system. */}
          <div className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <p lang={locale} className="text-sm font-semibold text-white">
                {t('prototypeNoticeTitle')}
              </p>
              <p lang={locale} className="text-xs leading-relaxed text-white/75">
                {t('prototypeNoticeBody')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
