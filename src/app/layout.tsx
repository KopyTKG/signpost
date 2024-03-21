import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { Providers } from './providers'

export const metadata: Metadata = {
 title: 'Signpost',
 description: 'Opensource replica of LinkTree',
 creator: 'KopyTKG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={GeistSans.className}>
    <Providers>
     <main className="w-screen min-h-screen bg-zinc-900">{children}</main>
    </Providers>
   </body>
  </html>
 )
}
