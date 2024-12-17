import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { Providers } from './providers'
import { ThemeProvider } from '@/components/theme-provider'
import { headers } from 'next/headers'
import Script from 'next/script'

export const metadata: Metadata = {
 title: 'Signpost',
 description: 'Opensource replica of LinkTree',
 creator: 'KopyTKG',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 const nonce = (await headers()).get('x-nonce')

 if (!nonce) {
  return <b>Loading ....</b>
 }

 return (
  <html lang="en">
   <body className={`${GeistSans.className} bg-neutral-50 dark:bg-black`}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     <Providers>
      <main>{children}</main>
     </Providers>
    </ThemeProvider>
    <Script
     nonce={nonce}
     id="my-script"
     dangerouslySetInnerHTML={{
      __html: `console.log('This inline script is allowed because it has the correct nonce')`,
     }}
    />
   </body>
  </html>
 )
}
