import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData, getOrganizationSchema } from '@/lib/structured-data'
import { GoogleAnalytics } from '@/components/seo-trackers'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenloka.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Greenloka - Premium Sustainable Bagasse Packaging Solutions',
  description: 'Eco-friendly bagasse food packaging solutions for restaurants, catering, and food delivery. 100% compostable, FDA-approved, premium quality, and affordable.',
  keywords: ['bagasse packaging', 'eco-friendly food packaging', 'sustainable packaging', 'compostable containers', 'bagasse food boxes', 'environmental packaging', 'food delivery containers'],
  authors: [{ name: 'Greenloka' }],
  creator: 'Greenloka',
  publisher: 'Greenloka',
  robots: 'index, follow',
  canonical: siteUrl,
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Greenloka - Premium Sustainable Bagasse Packaging',
    description: 'Eco-friendly bagasse food packaging solutions. 100% compostable, FDA-approved, and sustainable.',
    siteName: 'Greenloka',
    images: [
      {
        url: '/bagasse-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Greenloka Bagasse Packaging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenloka - Premium Sustainable Bagasse Packaging',
    description: 'Eco-friendly bagasse food packaging solutions.',
    images: ['/bagasse-hero.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <StructuredData data={getOrganizationSchema()} />
        {/* Google Analytics - Add NEXT_PUBLIC_GOOGLE_ANALYTICS_ID to .env.local */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
        {/* Google Search Console Verification - Add NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to .env.local */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        )}
        {/* Bing Webmaster Verification - Add NEXT_PUBLIC_BING_VERIFICATION to .env.local */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
