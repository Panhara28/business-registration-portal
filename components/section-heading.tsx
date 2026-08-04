'use client'

import { useLocale } from '@/components/locale-provider'
import { cn } from '@/lib/utils'

/**
 * Shared section heading: small eyebrow rule, then a two-tone title where the
 * second half is emphasised in teal.
 */
export function SectionHeading({
  eyebrow,
  lead,
  accent,
  body,
  align = 'center',
  tone = 'light',
  className,
}: {
  eyebrow: string
  lead: string
  accent?: string
  body?: string
  align?: 'center' | 'start'
  tone?: 'light' | 'dark'
  className?: string
}) {
  const { locale } = useLocale()
  const onDark = tone === 'dark'

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <p
        lang={locale}
        className={cn(
          'flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase',
          onDark ? 'text-teal-soft' : 'text-teal',
        )}
      >
        <span aria-hidden="true" className="h-px w-6 bg-current" />
        {eyebrow}
        {align === 'center' && <span aria-hidden="true" className="h-px w-6 bg-current" />}
      </p>

      <h2
        lang={locale}
        className={cn(
          'max-w-2xl text-3xl leading-tight font-semibold text-balance sm:text-4xl',
          onDark ? 'text-white' : 'text-navy',
        )}
      >
        {lead}
        {accent && (
          <>
            {' '}
            <span className={onDark ? 'text-teal-soft' : 'text-teal'}>{accent}</span>
          </>
        )}
      </h2>

      {body && (
        <p
          lang={locale}
          className={cn(
            'max-w-2xl leading-relaxed text-pretty',
            onDark ? 'text-white/75' : 'text-muted-foreground',
          )}
        >
          {body}
        </p>
      )}
    </div>
  )
}
