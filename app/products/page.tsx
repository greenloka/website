import { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsPageContent from './products-content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenloka.com'

export const metadata: Metadata = {
  title: 'Bagasse Packaging Products - Greenloka',
  description: 'Browse our complete range of eco-friendly bagasse food packaging. Compostable containers, boxes, plates, and trays for food service, restaurants, and catering.',
  keywords: ['bagasse containers', 'food packaging', 'compostable boxes', 'eco-friendly containers', 'bagasse trays', 'disposable food containers'],
  alternates: {
    canonical: `${siteUrl}/products`,
  },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/products`,
    title: 'Bagasse Packaging Products - Greenloka',
    description: 'Sustainable, compostable bagasse food packaging solutions',
    images: [
      {
        url: '/bagasse-container-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Bagasse Food Packaging',
      },
    ],
  },
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  )
}
