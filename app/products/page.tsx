import { Suspense } from 'react'
import ProductsPageContent from './products-content'

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsPageContent />
    </Suspense>
  )
}
