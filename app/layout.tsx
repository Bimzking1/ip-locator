import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import style from "./layout.module.css"
import Favicon from './favicon.ico';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IP Locator',
  description: 'IP Locator website',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${style.html}`} lang="en">
      {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}