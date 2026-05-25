import { ReactNode } from 'react'

export function StructuredData({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  )
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Greenloka',
    url: 'https://greenloka.com',
    logo: 'https://greenloka.com/placeholder-logo.png',
    description: 'Premium sustainable bagasse food packaging solutions',
    sameAs: [
      'https://www.facebook.com/greenloka',
      'https://www.instagram.com/greenloka',
      'https://www.linkedin.com/company/greenloka',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@greenloka.com',
    },
  }
}

export function getProductCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemCollection',
    name: 'Bagasse Packaging Products',
    description: 'Eco-friendly, compostable bagasse food packaging containers',
    url: 'https://greenloka.com/products',
    numberOfItems: 'Multiple',
    item: [
      {
        '@type': 'Product',
        name: 'Bagasse Food Containers',
        description: '100% compostable, FDA-approved bagasse food containers',
        brand: {
          '@type': 'Brand',
          name: 'Greenloka',
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Greenloka',
    description: 'Sustainable bagasse packaging provider',
    url: 'https://greenloka.com',
    telephone: '+1-XXX-XXX-XXXX',
    email: 'info@greenloka.com',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }
}
