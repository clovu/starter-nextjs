import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'

import './globals.css'

import { Wrap } from './wrap'
import { resolvePackage } from '@/services/package'

const { author, description } = resolvePackage()
export const metadata: Metadata = {
  title: 'Gratia',
  description,
  authors: [{ name: author, url: 'https://clovu.me' }],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider enableSystem attribute="class">
          <NextIntlClientProvider>
            <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
              <Wrap>
                {children}
              </Wrap>
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
