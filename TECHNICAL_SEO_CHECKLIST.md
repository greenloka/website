# ✅ Technical SEO Checklist - Greenloka

## 🔍 Pre-Launch Checklist

### Core Web Vitals
- [ ] **Largest Contentful Paint (LCP)** < 2.5s
  - Command: `npm run build && npm run start`
  - Check: https://pagespeed.web.dev/
  
- [ ] **First Input Delay (FID)** < 100ms
  - Check: Google Search Console → Enhancements → Core Web Vitals

- [ ] **Cumulative Layout Shift (CLS)** < 0.1
  - Monitor in Lighthouse

---

## 🛠️ Technical Implementation

### ✅ Already Implemented:

1. **Meta Tags** ✓
   - Title tags (60 chars)
   - Meta descriptions (160 chars)
   - Keywords
   - Author & publisher
   - Robots meta tag

2. **Open Graph & Social Sharing** ✓
   - og:title
   - og:description
   - og:image
   - og:type
   - og:url
   - twitter:card
   - twitter:title
   - twitter:description

3. **Structured Data (JSON-LD)** ✓
   - Organization schema
   - Product schema
   - LocalBusiness schema
   - FAQ schema (available)
   - Article schema (available)
   - Breadcrumb schema (available)
   - Review schema (available)

4. **Sitemap** ✓
   - Auto-generated: `/sitemap.xml`
   - Includes: Home, Products

5. **Robots.txt** ✓
   - Path: `/robots.txt`
   - Configured for SEO crawlers
   - Sitemap URL included

6. **Canonical URLs** ✓
   - Home: `https://greenloka.com/`
   - Products: `https://greenloka.com/products`

7. **Mobile Optimization** ✓
   - Responsive design (built-in Next.js)
   - Mobile-friendly viewport

---

## 📋 Additional Setup Required

### 1. **Google Search Console Setup**
- [ ] Create account at https://search.google.com/search-console
- [ ] Add property for `https://greenloka.com`
- [ ] Verify domain (meta tag / DNS / HTML file)
- [ ] Add verification code to `.env.local`:
  ```
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_code_here
  ```
- [ ] Submit sitemap
- [ ] Monitor Performance report

### 2. **Google Analytics 4 Setup**
- [ ] Create account at https://analytics.google.com/
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Add to `.env.local`:
  ```
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
  ```
- [ ] Test Analytics connection in Search Console
- [ ] Setup goals/conversions

### 3. **Bing Webmaster Tools Setup** (Optional)
- [ ] Create account at https://www.bing.com/webmasters
- [ ] Add property
- [ ] Get verification code
- [ ] Add to `.env.local`:
  ```
  NEXT_PUBLIC_BING_VERIFICATION=your_code_here
  ```
- [ ] Submit sitemap

### 4. **Google Business Profile** (Local SEO)
- [ ] Create profile at https://www.google.com/business/
- [ ] Add complete business information
- [ ] Add business photos
- [ ] Setup business hours
- [ ] Verify phone number
- [ ] Add website URL

---

## 🚀 Performance Optimization

### Image Optimization
```bash
# Next.js automatically optimizes images via next/image
# Check: Are you using next/image component?
```

### JavaScript & CSS
- [ ] Minification: ✓ Auto (Next.js build)
- [ ] Tree shaking: ✓ Auto (Next.js build)
- [ ] Code splitting: ✓ Auto (Next.js)
- [ ] Lazy loading: ✓ Available

### Caching Strategy
```javascript
// next.config.mjs - Already configured
// images: { unoptimized: true }
```

### Page Speed Targets
| Metric | Target | Current |
|--------|--------|---------|
| LCP | < 2.5s | ? |
| FID | < 100ms | ? |
| CLS | < 0.1 | ? |
| First Paint | < 2s | ? |
| Time to Interactive | < 4s | ? |

**How to check**: https://pagespeed.web.dev/

---

## 🔗 Link Structure & Internal Linking

### Current Pages:
1. **Home** (`/`)
   - Title: "Greenloka - Premium Sustainable Bagasse Packaging"
   - Meta: Full description
   - OG tags: ✓

2. **Products** (`/products`)
   - Title: "Bagasse Packaging Products - Greenloka"
   - Meta: Product descriptions
   - OG tags: ✓

### Internal Linking Best Practices:
- [ ] Homepage links to Products
- [ ] Products page links back to Home
- [ ] Use descriptive anchor text
- [ ] Avoid "click here" type links
- [ ] Create contextual links within content

---

## 📱 Mobile SEO

### Mobile Responsiveness
- [ ] Test on mobile devices
- [ ] Check: https://search.google.com/test/mobile-friendly
- [ ] Viewport meta tag: ✓ Set

### Mobile Core Web Vitals
- [ ] Monitor in Google Search Console
- [ ] Target: All metrics "Good" rating
- [ ] Known issues: ? (Check Search Console)

---

## 🔐 Security & Trust Signals

### HTTPS/SSL
- [ ] Website uses HTTPS: ✓ (Vercel provides)
- [ ] Mixed content warning: ✓ None
- [ ] SSL certificate: ✓ Valid

### Security Best Practices
- [ ] robots.txt prevents scraping: ✓
- [ ] No sensitive data in robots.txt: ✓
- [ ] Canonical tags prevent duplicates: ✓
- [ ] Privacy policy: ? (Add if needed)
- [ ] Terms of service: ? (Add if needed)

---

## 📊 SEO Monitoring & Analytics

### Tools to Use:
1. **Google Search Console**
   - Performance metrics
   - Indexation status
   - Mobile usability
   - Security issues

2. **Google Analytics 4**
   - Traffic sources
   - User behavior
   - Conversion tracking
   - Audience insights

3. **Lighthouse** (Built-in DevTools)
   - Run: DevTools → Lighthouse → Generate report
   - Metrics: SEO, Performance, Accessibility

4. **Mobile-Friendly Test**
   - Test: https://search.google.com/test/mobile-friendly

5. **Third-Party Tools** (Optional)
   - Semrush: Keyword research, rank tracking
   - Ahrefs: Backlinks, competitor analysis
   - Moz: Domain authority, keyword explorer

---

## 📝 Content SEO

### Homepage Content
- [ ] Clear H1 tag (only one)
- [ ] H2 tags for sections
- [ ] Alt text on all images
- [ ] Descriptive internal links
- [ ] Target keywords naturally included

### Product Page Content
- [ ] Unique title & description
- [ ] H1 tag for main topic
- [ ] Product descriptions with keywords
- [ ] Image alt text
- [ ] Schema markup: ✓ Implemented

### Blog/Content Strategy
- [ ] Create FAQ page (+ FAQ schema)
- [ ] Create resource guides
- [ ] Write case studies
- [ ] Regular blog posts (2x/month recommended)
- [ ] Use keyword research to drive content

---

## 🎯 Keyword Ranking Targets

### Primary Keywords:
1. "greenloka" → Target: Position 1
2. "bagasse packaging" → Target: Top 10
3. "eco-friendly food packaging" → Target: Top 10
4. "compostable containers" → Target: Top 20
5. "sustainable packaging" → Target: Top 20

### How to Track:
1. Google Search Console (Free)
   - See average position for keywords
   - Monitor impressions & CTR

2. Semrush or Similar (Paid)
   - Daily rank tracking
   - Competitor comparison
   - Keyword difficulty metrics

---

## 🔄 Maintenance Schedule

### Weekly:
- [ ] Check Google Search Console for errors
- [ ] Monitor top 5 keywords in GSC

### Monthly:
- [ ] Review traffic in Google Analytics
- [ ] Check Core Web Vitals
- [ ] Analyze page performance
- [ ] Check for new crawl errors

### Quarterly:
- [ ] Comprehensive SEO audit
- [ ] Update old content
- [ ] Check competitor activity
- [ ] Review link profile
- [ ] Keyword performance analysis

### Annually:
- [ ] Full website SEO audit
- [ ] Update SEO strategy
- [ ] Competitive analysis
- [ ] Technology stack review

---

## 🚨 Common SEO Issues & Fixes

### Issue: "Not indexed" pages in GSC
**Fix:**
1. Check robots.txt isn't blocking
2. Check canonical tags
3. Request indexing in GSC
4. Check if page is crawlable

### Issue: Duplicate content
**Fix:**
1. Set canonical URL: ✓ Already done
2. Consolidate similar pages
3. Use 301 redirects for old URLs

### Issue: Low Core Web Vitals
**Fix:**
1. Optimize images: Use next/image
2. Minify JavaScript & CSS
3. Remove render-blocking resources
4. Enable browser caching

### Issue: Low rankings
**Fix:**
1. Improve content quality
2. Build quality backlinks
3. Improve user signals (CTR)
4. Check competitor content
5. Add more comprehensive content

---

## ✨ Implementation Status

| Feature | Status | Evidence |
|---------|--------|----------|
| Meta tags | ✅ Complete | layout.tsx metadata |
| Structured data | ✅ Complete | lib/structured-data.tsx |
| Sitemap | ✅ Complete | app/sitemap.ts |
| Robots.txt | ✅ Complete | app/robots.ts |
| Open Graph | ✅ Complete | layout.tsx metadata |
| Twitter Cards | ✅ Complete | layout.tsx metadata |
| Google Analytics | 🔧 Ready | Need GA ID in .env.local |
| GSC Verification | 🔧 Ready | Need verification code |
| Mobile Responsive | ✅ Complete | Next.js default |
| HTTPS/SSL | ✅ Complete | Vercel hosting |
| Page Speed | ✅ Optimized | Next.js optimization |

---

**Next Step:** Follow `GOOGLE_SUBMISSION_GUIDE.md` to submit website to Google!
