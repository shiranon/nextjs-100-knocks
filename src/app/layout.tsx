/* eslint-disable camelcase */
import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import { Header } from '@/components/layout/header/Header'
import { DEFAULT_METADATA } from '@/constants/metadata'
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = DEFAULT_METADATA

const Koruri = localFont({
  src: './_font/Koruri-Regular.ttf',
  variable: '--font-koruri',
  display: 'swap',
})

const GenJyuuGothic = localFont({
  src: './_font/GenJyuuGothicX-Bold.ttf',
  variable: '--font-genjyuu-gothic',
  display: 'swap',
})

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body
        className={`${Koruri.variable} ${GenJyuuGothic.variable} font-koruri`}
      >
        <Header />
        <div className="mt-20">
          {children}
          {modal}
        </div>
      </body>
    </html>
  )
}
