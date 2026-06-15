import type { Metadata } from 'next'
import { Schibsted_Grotesk, Archivo, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'
import './globals.css'

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--f-schibsted',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--f-archivo',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--f-jetbrains',
})

export const metadata: Metadata = {
  title: 'PJT Development — From ideas to apps',
  description: 'Custom software, built and shipped by one developer who explains every step in plain English. No agency overhead. No handoffs. No jargon.',
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/favicon/apple-touch-icon-180.png', sizes: '180x180' },
  },
  openGraph: {
    title: 'PJT Development — From ideas to apps',
    description: 'Custom software, built and shipped by one developer who explains every step in plain English. No agency overhead. No handoffs. No jargon.',
    url: 'https://www.pjtdevelopment.com',
    siteName: 'PJT Development',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${schibstedGrotesk.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('pjt-theme');var d=t?(t==='dark'):(window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){}})();` }} />
      </head>
      <body>
        <Header />
        <ScrollRevealInit />
        {children}
        <Footer />
      </body>
    </html>
  )
}
