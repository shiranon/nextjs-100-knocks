/* eslint-disable camelcase */
import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

import { Header } from '@/components/layout/header/Header'
import { DEFAULT_METADATA } from '@/constants/metadata'

const inter = Noto_Sans_JP({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = DEFAULT_METADATA

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
