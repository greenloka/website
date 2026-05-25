export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is bagasse packaging?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bagasse is a natural fiber material created from sugarcane. Our bagasse packaging is 100% compostable, eco-friendly, and FDA-approved for food contact, making it an excellent sustainable alternative to traditional plastic or paper packaging.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is bagasse packaging compostable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! All Greenloka bagasse products are 100% compostable and biodegradable. They will fully decompose in composting facilities within 90-180 days, leaving no harmful residue.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is bagasse packaging FDA approved?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, all our bagasse food containers are FDA-approved for food contact, making them safe for direct food packaging and serving.',
        },
      },
      {
        '@type': 'Question',
        name: 'What products does Greenloka offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer a wide range of bagasse packaging solutions including food containers, trays, plates, bowls, cups, and custom packaging for restaurants, catering services, and food delivery businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why choose Greenloka bagasse packaging?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Greenloka offers premium quality, eco-friendly bagasse packaging that is affordable, sustainable, and helps businesses reduce their environmental footprint. Our products are FDA-approved, fully compostable, and perfect for eco-conscious businesses.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your products affordable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Greenloka bagasse packaging is competitively priced and often comparable to or more affordable than traditional plastic packaging when you consider the environmental benefits and durability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer bulk orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer bulk ordering options for restaurants, catering companies, and food delivery services. Contact us for custom quotes and bulk pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I place an order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can browse our products page and add items to your cart, or contact our sales team directly for custom orders and bulk pricing inquiries.',
        },
      },
    ],
  }
}

export function getArticleSchema(article: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || 'Greenloka',
    },
  }
}

export function getReviewSchema(businessName: string, rating: number = 4.8, reviewCount: number = 150) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating,
    reviewCount: reviewCount,
    bestRating: '5',
    worstRating: '1',
    name: businessName,
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
