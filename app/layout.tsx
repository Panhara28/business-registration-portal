import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Khmer } from 'next/font/google'

import { LocaleProvider } from '@/components/locale-provider'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansKhmer = Noto_Sans_Khmer({
  subsets: ['khmer'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-khmer-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'ចុះបញ្ជីពាណិជ្ជកម្ម | Business Registration — Ministry of Commerce',
    template: '%s | ចុះបញ្ជីពាណិជ្ជកម្ម',
  },
  description:
    'សេវាកម្មចុះបញ្ជីពាណិជ្ជកម្មតាមប្រព័ន្ធអេឡិចត្រូនិក នាយកដ្ឋានចុះបញ្ជីពាណិជ្ជកម្ម ក្រសួងពាណិជ្ជកម្ម ព្រះរាជាណាចក្រកម្ពុជា។ Online business registration services of the Business Registration Department, Ministry of Commerce, Kingdom of Cambodia.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#122a44',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="km" className={`bg-background ${inter.variable} ${notoSansKhmer.variable}`}>
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
