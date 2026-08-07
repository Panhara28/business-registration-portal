'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, LogIn, Menu, UserPlus, X } from 'lucide-react'

import { BrandLockup } from '@/components/layout/brand-lockup'
import { LanguageToggle } from '@/components/layout/language-toggle'
import { LinkButton } from '@/components/link-button'
import { useLocale } from '@/components/locale-provider'
import { siteConfig } from '@/lib/config/site'
import { mainNavigation } from '@/lib/content/navigation'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { locale, pick, t } = useLocale()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [desktopSection, setDesktopSection] = useState<string | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  // Close the desktop dropdown on Escape or on a click outside the nav.
  useEffect(() => {
    if (!desktopSection) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDesktopSection(null)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setDesktopSection(null)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [desktopSection])

  // Any route change should leave no menu hanging open.
  useEffect(() => {
    setDesktopSection(null)
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header>
        {/* Official-site strip */}
      <div className="border-b border-border bg-white text-gray-800">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-2 px-4 py-2 text-center text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
            <a href="tel:1266" className="flex items-center gap-1 transition hover:opacity-80">
              <span>Hotline: 1266</span>
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="mailto:cabinet.info@moc.gov.kh"
              className="break-all transition hover:opacity-80 sm:break-normal"
            >
              cabinet.info@moc.gov.kh
            </a>
          </div>
          <div lang={locale} className="text-gray-800">
            {siteConfig.ministry.km} | {siteConfig.ministry.en} | {siteConfig.kingdom.en}
          </div>
        </div>
      </div>

      {/* Identity bar */}
      <div className="border-b border-white/10 bg-navy">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <BrandLockup />

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 border-r border-white/15 pr-4 sm:flex">
              <span className="flex flex-col leading-tight text-white/85">
                <span lang="km" className="text-xl font-medium">
                  {siteConfig.kingdom.km}
                </span>
                <span className="text-base text-white/60">{siteConfig.kingdom.en}</span>
              </span>
              <Image
                src="/flag-topnav.png"
                alt=""
                width={96}
                height={64}
                className="h-16 w-24 shrink-0 object-cover"
              />
            </div>

            <LanguageToggle className="hidden sm:inline-flex lg:hidden" />

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-white lg:hidden"
            >
              {mobileOpen ? (
                <X className="size-4" aria-hidden="true" />
              ) : (
                <Menu className="size-4" aria-hidden="true" />
              )}
              <span lang={locale}>{mobileOpen ? t('closeMenu') : t('menu')}</span>
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Desktop navigation */}
      <nav
        ref={navRef}
        aria-label={t('mainNavigation')}
        className="sticky top-0 z-50 hidden border-b border-white/50 bg-white/65 shadow-[0_1px_2px_rgba(15,23,42,0.06)] backdrop-blur-lg backdrop-saturate-150 backdrop-brightness-125 lg:block"
      >
        <div className="mx-auto flex max-w-screen-2xl items-stretch justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <ul className="flex items-stretch">
            {mainNavigation.map((item) => {
              const itemClasses = cn(
                'flex h-full items-center gap-1 border-b-2 px-2.5 py-3 text-[0.8125rem] font-medium whitespace-nowrap transition-colors xl:px-3.5 xl:text-sm',
                isActive(item.href)
                  ? 'border-teal text-navy'
                  : 'border-transparent text-foreground/75 hover:border-teal/40 hover:text-navy',
              )

              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} lang={locale} className={itemClasses}>
                      {pick(item.labelKm, item.labelEn)}
                    </Link>
                  </li>
                )
              }

              const open = desktopSection === item.href

              return (
                <li key={item.href} className="relative">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setDesktopSection(open ? null : item.href)}
                    lang={locale}
                    className={itemClasses}
                  >
                    {pick(item.labelKm, item.labelEn)}
                    <ChevronDown
                      className={cn('size-3.5 transition-transform', open && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>

                  {open && (
                    <div className="absolute left-0 top-full z-50 w-80">
                      <ul className="mt-1 overflow-hidden rounded-xl border border-white/50 bg-white p-1.5 shadow-lifted">
                        <li className="border-b border-border/60 pb-1.5">
                          <Link
                            href={item.href}
                            onClick={() => setDesktopSection(null)}
                            className="flex rounded-lg px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent"
                          >
                            <span lang={locale}>{pick(item.labelKm, item.labelEn)}</span>
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setDesktopSection(null)}
                              className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                            >
                              <span lang={locale} className="text-sm font-medium text-navy">
                                {pick(child.labelKm, child.labelEn)}
                              </span>
                              {(child.descriptionKm || child.descriptionEn) && (
                                <span
                                  lang={locale}
                                  className="text-xs leading-relaxed text-muted-foreground"
                                >
                                  {pick(child.descriptionKm ?? '', child.descriptionEn)}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2 self-center py-2">
            <LanguageToggle variant="light" />
            <LinkButton
              href={siteConfig.links.login}
              variant="ghost"
              size="sm"
              className="h-9 rounded-full border border-border/60 bg-white/50 text-foreground backdrop-blur-md hover:bg-white/80 hover:text-navy"
            >
              <LogIn className="size-4" aria-hidden="true" />
              <span lang={locale}>{t('logIn')}</span>
            </LinkButton>
            <LinkButton
              href={siteConfig.links.register}
              size="sm"
              className="h-9 rounded-full bg-teal text-white shadow-sm hover:bg-teal/90"
            >
              <UserPlus className="size-4" aria-hidden="true" />
              <span lang={locale}>{t('registerNewUser')}</span>
            </LinkButton>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t('mainNavigation')}
          className="max-h-[calc(100vh-7rem)] overflow-y-auto border-b border-border bg-background lg:hidden"
        >
          <ul className="mx-auto flex max-w-screen-2xl flex-col divide-y divide-border px-4 sm:px-6">
            {mainNavigation.map((item) => {
              const expanded = openSection === item.href
              return (
                <li key={item.href} className="py-1">
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={item.href}
                      lang={locale}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex-1 py-3 text-sm font-medium',
                        isActive(item.href) ? 'text-teal' : 'text-foreground',
                      )}
                    >
                      {pick(item.labelKm, item.labelEn)}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() => setOpenSection(expanded ? null : item.href)}
                        aria-expanded={expanded}
                        className="rounded-md p-2 text-muted-foreground"
                      >
                        <span className="sr-only">
                          {pick(item.labelKm, item.labelEn)}
                        </span>
                        <ChevronDown
                          className={cn('size-4 transition-transform', expanded && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                    )}
                  </div>

                  {item.children && expanded && (
                    <ul className="flex flex-col gap-1 pb-3 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            lang={locale}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-navy"
                          >
                            {pick(child.labelKm, child.labelEn)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-4 py-4 sm:px-6">
            <LanguageToggle variant="light" className="self-start sm:hidden" />
            <div className="flex flex-col gap-2 sm:flex-row">
              <LinkButton
                href={siteConfig.links.login}
                variant="outline"
                className="flex-1"
                onClick={() => setMobileOpen(false)}
              >
                <LogIn className="size-4" aria-hidden="true" />
                <span lang={locale}>{t('logIn')}</span>
              </LinkButton>
              <LinkButton
                href={siteConfig.links.register}
                className="flex-1 bg-navy text-white hover:bg-navy/90"
                onClick={() => setMobileOpen(false)}
              >
                <UserPlus className="size-4" aria-hidden="true" />
                <span lang={locale}>{t('registerNewUser')}</span>
              </LinkButton>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
