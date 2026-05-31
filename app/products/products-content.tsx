'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Menu, X, Leaf, ShoppingCart, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPageContent() {
  const searchParams = useSearchParams()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All products')

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(decodeURIComponent(categoryParam))
    }
  }, [searchParams])

  const productsData = {
    Bowls: [
      {
        id: 1,
        name: 'Chweet 180 ml Bowl',
        image: '/bagasse-bowl-1.jpg',
        weight: '4.0 ±1.0g',
        volume: '180 ml',
        dimensions: 'L: 105mm W: 65mm D: 35mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '1000 pcs',
        price: '$0.0104',
      },
      {
        id: 2,
        name: 'Chattori 250 ml Bowl',
        image: '/bagasse-bowl-1.jpg',
        weight: '6.0 ±1.0g',
        volume: '250 ml',
        dimensions: 'L: 130mm W: 90mm D: 35mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '1000 pcs',
        price: '$0.0150',
      },
      {
        id: 3,
        name: 'Chweet 360 ml Bowl',
        image: '/bagasse-bowl-1.jpg',
        weight: '9.0 ±1.0g',
        volume: '360 ml',
        dimensions: 'L: 136mm W: 136mm D: 36mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '1050 pcs',
        price: '$0.0207',
      },
    ],
    Plates: [
      {
        id: 4,
        name: 'Chowpatty 7 Inch Plate',
        image: '/bagasse-plates-3.jpg',
        weight: '7.5 ±1.5g',
        volume: 'N/A',
        dimensions: 'L: 156mm W: 156mm D: 20mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '1000 pcs',
        price: '$0.0173',
      },
      {
        id: 5,
        name: 'Chukizza 9 Inch Plate',
        image: '/bagasse-plates-3.jpg',
        weight: '15.0 ±2.0g',
        volume: 'N/A',
        dimensions: 'L: 229mm W: 229mm D: 20mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '500 pcs',
        price: '$0.0330',
      },
      {
        id: 6,
        name: 'Chaska 10 Inch Plate',
        image: '/bagasse-plates-3.jpg',
        weight: '18.0 ±2.0g',
        volume: 'N/A',
        dimensions: 'L: 255mm W: 255mm D: 20mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '500 pcs',
        price: '$0.0396',
      },
    ],
    Containers: [
      {
        id: 7,
        name: 'Chow 500 ml Container',
        image: '/bagasse-container-2.jpg',
        weight: '15.0 ±2.0g',
        volume: '500 ml',
        dimensions: 'L: 237mm W: 132mm D: 40mm',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '1000 pcs',
        price: '$0.0330',
      },
      {
        id: 8,
        name: 'Chow 500 ml Container Lid',
        image: '/bagasse-container-2.jpg',
        weight: '15.0 ±2.0g',
        volume: 'Lid',
        dimensions: 'Compatible with 500ml',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '1000 pcs',
        price: '$0.0330',
      },
      {
        id: 9,
        name: 'Chow 750 ml Container',
        image: '/bagasse-container-2.jpg',
        weight: '19.0 ±2.0g',
        volume: '750 ml',
        dimensions: 'L: 237mm W: 132mm D: 40mm',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '500 pcs',
        price: '$0.0418',
      },
    ],
    'Delivery Containers': [
      {
        id: 10,
        name: 'Chozy 350 ML Delivery Container',
        image: '/bagasse-container-2.jpg',
        weight: '13.0 ±1.0g',
        volume: '350 ml',
        dimensions: 'L: 143.30mm W: 143.30mm D: 56.90mm',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '1000 pcs',
        price: '$0.0390',
      },
      {
        id: 11,
        name: 'Churry 500 ML Delivery Container',
        image: '/bagasse-container-2.jpg',
        weight: '16.0 ±1.0g',
        volume: '500 ml',
        dimensions: 'L: 143.30mm W: 143.30mm D: 74.10mm',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '1000 pcs',
        price: '$0.0480',
      },
      {
        id: 12,
        name: 'Chox 750 ML Delivery Container',
        image: '/bagasse-container-2.jpg',
        weight: '20.0 ±2.0g',
        volume: '750 ml',
        dimensions: 'L: 184.30mm W: 184.30mm D: 60.40mm',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '750 pcs',
        price: '$0.0600',
      },
      {
        id: 13,
        name: 'Chukyani 1000 ML Delivery Container',
        image: '/bagasse-container-2.jpg',
        weight: '24.0 ±2.0g',
        volume: '1000 ml',
        dimensions: 'L: 184.30mm W: 184.30mm D: 74.30mm',
        innerPacking: '125 pcs (PLA)',
        boxQuantity: '750 pcs',
        price: '$0.0720',
      },
    ],
    'Meal Trays': [
      {
        id: 14,
        name: 'Chombo 3 CP Tray',
        image: '/bagasse-tray-5.jpg',
        weight: '18.0 ±2.0g',
        volume: '3 Compartments',
        dimensions: 'L: 220.50mm W: 220.50mm D: 25mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '500 pcs',
        price: '$0.0396',
      },
      {
        id: 15,
        name: 'Chuaka 4 CP Tray',
        image: '/bagasse-tray-5.jpg',
        weight: '32.0 ±3.0g',
        volume: '4 Compartments',
        dimensions: 'L: 305mm W: 248mm D: 30mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '500 pcs',
        price: '$0.0704',
      },
      {
        id: 16,
        name: 'Chunky 5 CP Tray',
        image: '/bagasse-tray-5.jpg',
        weight: '32.0 ±3.0g',
        volume: '5 Compartments',
        dimensions: 'L: 305mm W: 248mm D: 30mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '500 pcs',
        price: '$0.0704',
      },
      {
        id: 17,
        name: 'Chappan 8CP Tray',
        image: '/bagasse-tray-5.jpg',
        weight: '38.0 ±3.0g',
        volume: '8 Compartments',
        dimensions: 'L: 312mm W: 260mm D: 30mm',
        innerPacking: '25 pcs (Shrink)',
        boxQuantity: '500 pcs',
        price: '$0.0836',
      },
    ],
  }

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo/greenloka_logo.png" alt="Greenloka" className="h-8 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <Link href="/" className="text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm text-primary font-semibold">
                Products
              </Link>
              <a href="/#why" className="text-sm hover:text-primary transition-colors">
                Why Us
              </a>
              <a href="/#about" className="text-sm hover:text-primary transition-colors">
                About
              </a>
              <a href="/#faq" className="text-sm hover:text-primary transition-colors">
                FAQ
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* <Button className="hidden md:inline-flex" size="sm">
                Get Quote
              </Button> */}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <Link href="/" className="block py-2 text-sm hover:text-primary">
                Home
              </Link>
              <Link href="/products" className="block py-2 text-sm text-primary font-semibold">
                Products
              </Link>
              <a href="/#why" className="block py-2 text-sm hover:text-primary">
                Why Us
              </a>
              <a href="/#about" className="block py-2 text-sm hover:text-primary">
                About
              </a>
              <a href="/#faq" className="block py-2 text-sm hover:text-primary">
                FAQ
              </a>
              {/* <Button className="w-full mt-2" size="sm">
                Get Quote
              </Button> */}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-sm font-semibold text-primary mb-4">Shop by categories</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">EXPLORE BY <span className="text-primary">CATEGORY</span></h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Order personalized high-quality custom printed packaging and branded boxes your customer will love all in one place
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0">
            {Object.keys(productsData).length > 0 && (
              <>
                <button
                  onClick={() => setSelectedCategory('All products')}
                  className={`whitespace-nowrap pb-3 transition-all font-semibold ${
                    selectedCategory === 'All products'
                      ? 'text-foreground border-b-2 border-primary'
                      : 'text-muted-foreground border-b-2 border-transparent hover:text-foreground'
                  }`}
                >
                  All products
                </button>
                {Object.keys(productsData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap pb-3 transition-all font-semibold ${
                      selectedCategory === category
                        ? 'text-foreground border-b-2 border-primary'
                        : 'text-muted-foreground border-b-2 border-transparent hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'All products' ? (
            // Show all categories
            Object.entries(productsData).map((categoryEntry, categoryIdx) => {
              const [categoryName, categoryProducts] = categoryEntry
              return (
                <div key={categoryName} className="mb-20">
                  {/* Category Title */}
                  <div className="mb-12 animate-slide-up" style={{ animationDelay: `${categoryIdx * 100}ms` }}>
                    <h2 className="text-4xl font-bold mb-2">{categoryName}</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                  </div>

                  {/* Category Products Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {categoryProducts.map((product, productIdx) => (
                      <div
                        key={product.id}
                        className="rounded-xl overflow-hidden border border-border bg-card transition-smooth hover-lift animate-scale-in"
                        style={{ animationDelay: `${categoryIdx * 100 + productIdx * 80}ms` }}
                      >
                        {/* Product Image */}
                        <div className="relative h-64 bg-muted overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover hover:scale-105 transition-smooth"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="p-6 space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                          </div>

                          {/* Specs */}
                          <div className="bg-secondary/20 rounded-lg p-4 space-y-3">
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase">Weight</p>
                              <p className="text-sm font-medium">{product.weight}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase">Volume/Capacity</p>
                              <p className="text-sm font-medium">{product.volume}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase">Dimensions</p>
                              <p className="text-sm font-medium">{product.dimensions}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase">Inner Packing</p>
                              <p className="text-sm font-medium">{product.innerPacking}</p>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase">Box Quantity</p>
                              <p className="text-sm font-medium">{product.boxQuantity}</p>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="pt-4 border-t border-border">
                            {/* <Button size="sm" className="w-full gap-2">
                              <ShoppingCart className="w-4 h-4" />
                              Inquire
                            </Button> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
          ) : (
            // Show selected category only
            <div>
              {/* Category Title */}
              <div className="mb-12 animate-slide-up">
                <h2 className="text-4xl font-bold mb-2">{selectedCategory}</h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>

              {/* Category Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsData[selectedCategory as keyof typeof productsData]?.map((product, productIdx) => (
                  <div
                    key={product.id}
                    className="rounded-xl overflow-hidden border border-border bg-card transition-smooth hover-lift animate-scale-in"
                    style={{ animationDelay: `${productIdx * 80}ms` }}
                  >
                    {/* Product Image */}
                    <div className="relative h-64 bg-muted overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-smooth"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                      </div>

                      {/* Specs */}
                      <div className="bg-secondary/20 rounded-lg p-4 space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Weight</p>
                          <p className="text-sm font-medium">{product.weight}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Volume/Capacity</p>
                          <p className="text-sm font-medium">{product.volume}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Dimensions</p>
                          <p className="text-sm font-medium">{product.dimensions}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Inner Packing</p>
                          <p className="text-sm font-medium">{product.innerPacking}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase">Box Quantity</p>
                          <p className="text-sm font-medium">{product.boxQuantity}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-border">
                        {/* <Button size="sm" className="w-full gap-2">
                          <ShoppingCart className="w-4 h-4" />
                          Inquire
                        </Button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bulk Ordering CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-slide-up">Ready to Order?</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up animation-delay-100">
            Get started with bulk orders, custom branding, and wholesale pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in animation-delay-200">
            <Button size="lg" className="gap-2">
              <ShoppingCart className="w-5 h-5" />
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo/greenloka_logo.png" alt="Greenloka" className="h-32 w-auto" />
              </div>
              <p className="text-white/70 text-sm">
                Premium sustainable bagasse packaging for forward-thinking brands.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/products" className="hover:text-white">All Products</Link></li>
                <li><a href="#" className="hover:text-white">Bulk Orders</a></li>
                <li><a href="#" className="hover:text-white">Custom Orders</a></li>
                <li><a href="#" className="hover:text-white">Wholesale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-white">About Us</Link></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Certifications</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm text-white/70">
              © 2026 Greenloka. All rights reserved. | We are committed to a sustainable future
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
