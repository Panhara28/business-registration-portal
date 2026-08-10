'use client'

import Link from 'next/link'
import { Info } from 'lucide-react'

import { PageHeader } from '@/components/layout/page-header'
import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const { locale, pick, t } = useLocale()

  return (
    <>
      <PageHeader
        crumbs={[
          { href: '/', labelKm: 'ទំព័រដើម', labelEn: 'Home' },
          { labelKm: 'ចូលប្រើប្រាស់', labelEn: 'Log In' },
        ]}
        titleKm="ចូលប្រើប្រាស់"
        titleEn="Log In"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4">
            <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <p lang={locale} className="text-xs leading-relaxed text-foreground/80 text-pretty">
              {pick(
                'នេះជាគំរូបង្ហាញចំណុចប្រទាក់តែប៉ុណ្ណោះ។ គណនី និងការចូលប្រើប្រាស់ពិតប្រាកដមិនទាន់អាចប្រើបានទេ។',
                'This is an interface demonstration only. Real account login is not yet available.',
              )}
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="login-email" lang={locale}>
                {pick('អាសយដ្ឋានអ៊ីមែល', 'Email address')}
              </Label>
              <Input id="login-email" type="email" className="h-10 rounded-lg px-3" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="login-password" lang={locale}>
                {pick('ពាក្យសម្ងាត់', 'Password')}
              </Label>
              <Input id="login-password" type="password" className="h-10 rounded-lg px-3" required />
            </div>

            <Button type="submit" className="h-11 bg-teal text-white hover:bg-teal/90">
              <span lang={locale}>{t('logIn')}</span>
            </Button>
          </form>

          <p lang={locale} className="text-center text-sm text-muted-foreground">
            {pick('មិនទាន់មានគណនីមែនទេ?', "Don't have an account yet?")}{' '}
            <Link
              href="/services/register-new-user"
              className="font-medium text-teal underline-offset-4 hover:underline"
            >
              {t('registerNewUser')}
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
