'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X, Leaf, Recycle, Droplets, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [benefitsVisible, setBenefitsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const benefitsSectionRef = useRef<HTMLElement>(null)
  const productsRef = useScrollReveal()
  const whyRef = useScrollReveal()
  const aboutRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const testimonialsRef = useScrollReveal()
  const faqRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  const aboutImages = [
    '/bagasse-bowl-1.jpg',
    '/bagasse-container-2.jpg',
    '/bagasse-plates-3.jpg',
    '/bagasse-tray-5.jpg',
  ]

  useEffect(() => {
    const section = benefitsSectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBenefitsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -80px 0px',
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [aboutImages.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (!element) return

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.pushState(null, '', `#${id}`)
  }

  const products = [
    {
      id: 1,
      name: 'Round Bowls',
      image: '/bagasse-bowl-1.jpg',
      description: 'Perfect for desserts, salads, and takeout meals',
      category: 'Bowls',
    },
    {
      id: 2,
      name: 'Compartment Containers',
      image: '/bagasse-container-2.jpg',
      description: 'Multi-section trays for variety meal packaging',
      category: 'Containers',
    },
    {
      id: 3,
      name: 'Dinner Plates',
      image: '/bagasse-plates-3.jpg',
      description: 'Elegant disposable plates for any occasion',
      category: 'Plates',
    },
    {
      id: 4,
      name: 'Hinged Lunch Boxes',
      image: '/bagasse-box-4.jpg',
      description: 'Secure closure for safe food transport',
      category: 'Delivery Containers',
    },
    {
      id: 5,
      name: 'Serving Trays',
      image: '/bagasse-tray-5.jpg',
      description: 'Large trays for catering and events',
      category: 'Meal Trays',
    },
    {
      id: 6,
      name: 'Beverage Cups',
      image: '/bagasse-cup-6.jpg',
      description: 'Durable cups for hot and cold drinks',
      category: 'Containers',
    },
  ]

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Compostable',
      description: 'Breaks down naturally in composting facilities',
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Waste Reduction',
      description: 'Made from agricultural byproducts, zero waste',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Water Efficient',
      description: 'Minimal water usage in production process',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Durable, food-safe, and microwave safe',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Restaurant Owner',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Sarah',
      quote: "Switching to bagasse packaging was the best decision for our eco-conscious restaurant. Customers love it!",
    },
    {
      name: 'Marcus Williams',
      role: 'Catering Director',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Marcus',
      quote: 'Premium quality at competitive prices. These containers elevate our brand while supporting sustainability.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Event Planner',
      image: 'https://api.dicebear.com/7.x/avataaars/jpg?seed=Emma',
      quote: 'Our clients specifically ask for eco-friendly packaging now. This product delivers on all fronts.',
    },
  ]

  const faqs = [
    {
      question: 'What is bagasse and why is it sustainable?',
      answer: 'Bagasse is the fibrous residue left after sugarcane juice extraction. Instead of burning or discarding this agricultural waste, we transform it into premium food packaging, creating a circular economy.',
    },
    {
      question: 'Is bagasse packaging food-safe?',
      answer: 'Yes, absolutely. All our bagasse containers are FDA-approved, food-grade, and completely safe for direct food contact. They&apos;re also microwave and freezer-safe.',
    },
    // {
    //   question: 'Can I customize our packaging with our brand?',
    //   answer: 'Yes! We offer full custom branding services including logo printing, custom sizes, and design consultation to match your brand identity perfectly.',
    // },
    {
      question: 'How long does bagasse packaging take to decompose?',
      answer: 'In commercial composting facilities, bagasse packaging breaks down in 60-90 days. In landfills, it decomposes much faster than plastic alternatives.',
    },
    // {
    //   question: 'What is your minimum order quantity?',
    //   answer: 'We offer flexible MOQs starting from 500 units for standard products. Custom orders have a minimum of 1000 units.',
    // },
  ]

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
              <a href="products" className="text-sm hover:text-primary transition-colors">
                Products
              </a>
              <a href="#why" className="text-sm hover:text-primary transition-colors">
                Why Us
              </a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">
                About
              </a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">
                FAQ
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* <Button className="hidden md:inline-flex" size="sm" onClick={() => scrollToSection('cta')}>
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
              <a href="#products" className="block py-2 text-sm hover:text-primary">
                Products
              </a>
              <a href="#why" className="block py-2 text-sm hover:text-primary">
                Why Us
              </a>
              <a href="#about" className="block py-2 text-sm hover:text-primary">
                About
              </a>
              <a href="#faq" className="block py-2 text-sm hover:text-primary">
                FAQ
              </a>
              {/* <Button className="w-full mt-2" size="sm" onClick={() => scrollToSection('cta')}>
                Get Quote
              </Button> */}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance animate-slide-in-left">
              Sustainable Packaging That Elevates Your Brand
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up animation-delay-100">
              Premium eco-friendly bagasse containers that combine environmental responsibility with exceptional quality. Perfect for restaurants, catering, and food delivery services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-base transition-smooth hover-lift animate-scale-in animation-delay-200"
                asChild
              >
                <Link href="/products">Explore Products</Link>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="text-base transition-smooth hover-lift animate-scale-in animation-delay-300"
                onClick={() => scrollToSection('cta')}
              >
                Request Sample
              </Button> */}
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl animate-float">
            <Image
              src="/bagasse-hero.jpg"
              alt="Bagasse packaging products"
              fill
              className="object-cover transition-smooth"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section id="products" ref={productsRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">Explore Our Collection</h2>
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
              Versatile bagasse solutions for every food packaging need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`rounded-xl overflow-hidden border border-border bg-card transition-smooth hover-lift animate-scale-in ${
                  idx === 0 ? 'animation-delay-100' :
                  idx === 1 ? 'animation-delay-200' :
                  idx === 2 ? 'animation-delay-300' :
                  idx === 3 ? 'animation-delay-400' :
                  idx === 4 ? 'animation-delay-500' :
                  'animation-delay-600'
                }`}
              >
                <div className="relative h-64 bg-muted overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 w-full justify-start px-0 transition-smooth hover:text-primary"
                  >
                    <Link href={`/products?category=${encodeURIComponent(product.category)}`}>
                      Learn More →
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" ref={benefitsSectionRef} className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">Why Choose Greenloka?</h2>
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
              We&apos;re committed to sustainability without compromising quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 border border-border text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  benefitsVisible
                    ? 'opacity-100 translate-y-0 shadow-none'
                    : 'opacity-0 translate-y-6'
                } ${
                  idx === 0 ? 'delay-[80ms]' :
                  idx === 1 ? 'delay-[180ms]' :
                  idx === 2 ? 'delay-[280ms]' :
                  'delay-[380ms]'
                }`}
              >
                <div className="flex justify-center mb-4 text-primary animate-float">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material & Sustainability Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold mb-6">About Bagasse Material</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="animate-slide-up animation-delay-100">
                  Bagasse is the fibrous residue remaining after sugarcane juice extraction. Historically, this agricultural byproduct was burned or discarded, but we&apos;ve revolutionized its use.
                </p>
                <p className="animate-slide-up animation-delay-200">
                  Our proprietary molding process transforms bagasse into premium food-grade packaging that&apos;s stronger than traditional disposables. Each container embodies our commitment to the circular economy.
                </p>
                <p className="animate-slide-up animation-delay-300">
                  By choosing bagasse packaging, you&apos;re supporting sustainable agriculture and reducing your carbon footprint by up to 65% compared to plastic alternatives.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg animate-float-delayed-1 transition-smooth">
              {aboutImages.map((image, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Bagasse product image ${idx + 1}`}
                    fill
                    className="object-cover transition-smooth"
                  />
                </div>
              ))}
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packaging Services Section */}
      <section ref={servicesRef} className="py-20 bg-secondary/30 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">Custom Packaging Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
              Every brand is unique. We offer personalized consultation and custom production to match your exact needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Design Consultation', items: ['Brand alignment', 'Custom sizing', 'Structural optimization'] },
              { title: 'Production Services', items: ['Bulk manufacturing', 'Quality assurance', 'On-time delivery'] },
              { title: 'Support', items: ['Technical guidance', 'Sustainability reports', 'Dedicated account manager'] },
            ].map((service, idx) => (
              <div key={idx} className={`bg-white rounded-xl p-8 border border-border transition-smooth hover-lift animate-scale-in ${
                idx === 0 ? 'animation-delay-200' :
                idx === 1 ? 'animation-delay-300' :
                'animation-delay-400'
              }`}>
                <h3 className="text-xl font-semibold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section ref={testimonialsRef} className="py-20 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">Loved by Our Customers</h2>
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
              See what industry leaders say about Greenloka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`rounded-xl border border-border p-8 bg-secondary/20 transition-smooth hover-lift animate-scale-in ${
                idx === 0 ? 'animation-delay-200' :
                idx === 1 ? 'animation-delay-300' :
                'animation-delay-400'
              }`}>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-smooth"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section id="faq" ref={faqRef} className="py-20 bg-secondary/30 scroll-reveal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground animate-slide-up animation-delay-100">
              Common questions about our bagasse packaging
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className={`bg-white rounded-lg border border-border p-6 cursor-pointer transition-smooth hover:shadow-md animate-slide-up group ${
                  idx === 0 ? 'animation-delay-200' :
                  idx === 1 ? 'animation-delay-300' :
                  idx === 2 ? 'animation-delay-400' :
                  idx === 3 ? 'animation-delay-500' :
                  'animation-delay-600'
                }`}
              >
                <summary className="flex items-center justify-between font-semibold text-foreground">
                  <span>{faq.question}</span>
                  <span className="text-primary ml-2 group-open:rotate-180 transition-smooth duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" ref={ctaRef} className="py-20 bg-gradient-to-r from-primary to-accent text-white scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-slide-up">Ready to Transform Your Packaging?</h2>
          <p className="text-lg mb-8 text-white/90 animate-slide-up animation-delay-100">
            Join hundreds of businesses making the sustainable choice with Greenloka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth hover-lift animate-scale-in animation-delay-200"
              onClick={() => scrollToSection('faq')}
            >
              Get Your Quote Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white/10 transition-smooth hover-lift animate-scale-in animation-delay-300"
              onClick={() => scrollToSection('about')}
            >
              Contact Sales
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
                <li><a href="#" className="hover:text-white">Containers</a></li>
                <li><a href="#" className="hover:text-white">Plates & Bowls</a></li>
                <li><a href="#" className="hover:text-white">Trays</a></li>
                <li><a href="#" className="hover:text-white">Custom Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                {/* <li><a href="#" className="hover:text-white">Blog</a></li> */}
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Certifications</a></li>
              </ul>
            </div> */}
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-sm text-white/70">
              © 2026 Greenloka. All rights reserved. | Committed to a sustainable future
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
