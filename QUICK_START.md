# 🚀 Greenloka SEO - Quick Start Guide

## 📌 Ringkasan Optimisasi yang Sudah Dilakukan

Kami sudah mengimplementasikan:
- ✅ Advanced Meta Tags (title, description, keywords)
- ✅ Open Graph Tags (untuk sharing di Facebook, WhatsApp, LinkedIn)
- ✅ Twitter Card Tags (untuk sharing di Twitter/X)
- ✅ Structured Data JSON-LD (Organization, Product, FAQ, Article schemas)
- ✅ Sitemap XML (auto-generated)
- ✅ Robots.txt (auto-generated)
- ✅ Canonical URLs
- ✅ Page-specific metadata untuk home & products

---

## ⚡ 5 Langkah Cepat untuk Ranking "Greenloka" di Google

### Step 1️⃣: Setup Google Search Console (5 menit)
```
1. Buka https://search.google.com/search-console
2. Login dengan Google account
3. Add property: https://greenloka.com
4. Pilih metode verifikasi (paling mudah: meta tag)
5. Copy kode dari Google
```

**Add kode ke `.env.local`:**
```
NEXT_PUBLIC_SITE_URL=https://greenloka.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=kode_dari_google_di_sini
```

Ref: Lihat `GOOGLE_SUBMISSION_GUIDE.md` step 3

### Step 2️⃣: Setup Google Analytics (3 menit)
```
1. Buka https://analytics.google.com/
2. Create property untuk Greenloka
3. Copy Measurement ID (format: G-XXXXX)
```

**Add ke `.env.local`:**
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXX
```

### Step 3️⃣: Deploy ke Production
```bash
npm run build
# Deploy ke Vercel atau server Anda
```

### Step 4️⃣: Submit Sitemap ke Google (2 menit)
```
1. Buka Google Search Console
2. Klik "Sitemaps" di menu kiri
3. Input: https://greenloka.com/sitemap.xml
4. Klik "Submit"
```

### Step 5️⃣: Wait & Monitor
```
- Tunggu 3-7 hari untuk initial indexing
- Monitor di Google Search Console
- Check ranking untuk "Greenloka" setelah 2-3 minggu
```

---

## 📂 File-File Penting yang Dibuat

### Meta & SEO Configuration:
| File | Purpose |
|------|---------|
| `app/layout.tsx` | Main metadata + Google Analytics integration |
| `app/sitemap.ts` | Auto-generated XML sitemap |
| `app/robots.ts` | Auto-generated robots.txt |
| `lib/structured-data.tsx` | JSON-LD schema components |
| `lib/seo-schemas.ts` | FAQ, Article, Breadcrumb schemas |
| `components/seo-trackers.tsx` | Google Analytics & verification trackers |

### Documentation:
| File | Purpose |
|------|---------|
| `SEO_OPTIMIZATION.md` | Comprehensive SEO guide |
| `GOOGLE_SUBMISSION_GUIDE.md` | Step-by-step Google submission |
| `TECHNICAL_SEO_CHECKLIST.md` | Technical implementation checklist |
| `QUICK_START.md` | This file |
| `.env.example` | Environment variable template |

---

## 🎯 Expected Results Timeline

| Timeframe | What to Expect | Action |
|-----------|---|----------|
| **Day 1-2** | Verification in Google | Check GSC dashboard |
| **Day 3-7** | Initial indexing | Monitor Sitemaps report |
| **Week 2-3** | Start appearing in search | Check GSC Performance |
| **Month 1-2** | Ranking for branded term | Should rank for "greenloka" |
| **Month 2-3** | Ranking for industry keywords | "bagasse packaging" in top 20 |
| **Month 3-6** | Competitive ranking achieved | Monitor & maintain |

---

## 🔧 Environment Variables Checklist

Buat file `.env.local` di root project dengan:

```env
# Required - Set this to your domain
NEXT_PUBLIC_SITE_URL=https://greenloka.com

# Optional - Add after getting from Google
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Optional - Add Google Search Console verification code
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code

# Optional - Add Bing Webmaster verification code
NEXT_PUBLIC_BING_VERIFICATION=your_verification_code
```

---

## 📊 KPI yang Harus Dimonitor

### Primary Metrics:
1. **Rankings untuk "Greenloka"**
   - Target: Position 1-3 dalam 2-3 bulan
   - Check: Google Search Console → Performance

2. **Organic Traffic**
   - Target: Meningkat 50% per bulan (awal)
   - Check: Google Analytics 4

3. **Click-Through Rate (CTR)**
   - Target: > 3% untuk branded keywords
   - Check: Google Search Console

4. **Index Coverage**
   - Target: 100% pages indexed
   - Check: Google Search Console → Coverage

---

## 🎨 Best Practices Going Forward

### Content:
- [ ] Update homepage dengan stronger value proposition
- [ ] Create detailed product descriptions
- [ ] Add FAQ page (template tersedia di lib/seo-schemas.ts)
- [ ] Publish blog posts (2x per month) tentang eco-friendly packaging
- [ ] Create case studies/testimonials

### Links:
- [ ] Get mentioned di sustainability blogs
- [ ] Guest posting di food/restaurant blogs
- [ ] Get listed di eco-friendly business directories
- [ ] Encourage customer reviews (Google, Trustpilot)

### Technical:
- [ ] Monitor Core Web Vitals monthly
- [ ] Keep content updated
- [ ] Fix any crawl errors from GSC
- [ ] Monitor for security issues

---

## 📞 Troubleshooting

### "Website not indexed yet"
- [ ] Check robots.txt not blocking (it's configured correctly)
- [ ] Request indexing in Google Search Console
- [ ] Wait 24-48 hours
- [ ] Check for crawl errors in GSC Coverage report

### "Sitemap not submitting"
- [ ] Clear browser cache
- [ ] Try different browser
- [ ] Check sitemap URL: https://greenloka.com/sitemap.xml
- [ ] Verify GSC has ownership

### "Google Analytics not showing data"
- [ ] Verify Measurement ID in .env.local is correct
- [ ] Ensure environment variable starts with `NEXT_PUBLIC_`
- [ ] Check Analytics dashboard → Admin → Data streams → Web
- [ ] Wait 24 hours for initial data

### "Not ranking for 'Greenloka'"
- [ ] Too early - need 2-3 weeks minimum
- [ ] Check GSC - ensure pages are indexed
- [ ] Create more content about Greenloka brand
- [ ] Build quality backlinks (guest posts, directory listings)
- [ ] Improve page content quality

---

## 🚀 Advanced Optimizations (Optional)

### Already Available (Ready to use):
```javascript
// FAQ Schema - for FAQ page
import { getFAQSchema } from '@/lib/seo-schemas'

// Article Schema - for blog posts
import { getArticleSchema } from '@/lib/seo-schemas'

// Breadcrumb Schema - for navigation
import { getBreadcrumbSchema } from '@/lib/seo-schemas'

// Review/Rating Schema
import { getReviewSchema } from '@/lib/seo-schemas'
```

### To Implement Later:
1. **Blog/Articles Section** - Create `/blog` route with article schema
2. **FAQ Page** - Create `/faq` route with FAQ schema
3. **Customer Reviews** - Add review schema with ratings
4. **Local Business Profile** - If you have physical location
5. **Video Content** - Add video schema for product demos

---

## 💡 Pro Tips untuk Mendominasi "Greenloka"

1. **Brand Mentions**
   - Minta mention di eco-friendly publications
   - Partner dengan food bloggers
   - Press release tentang Greenloka

2. **Content Authority**
   - Jadi expert dalam bagasse packaging
   - Write comprehensive guides
   - Create original research/data

3. **Link Building**
   - Natural links from relevant websites
   - Directory listings
   - Strategic partnerships

4. **User Signals**
   - Improve CTR dengan meta description yang menarik
   - Lower bounce rate dengan better content
   - Increase engagement (time on site, pages per session)

5. **Speed & Performance**
   - Monitor Core Web Vitals
   - Optimize images
   - Minimize JavaScript

---

## ✅ Pre-Launch Verification

Sebelum claim sukses, verify:

- [ ] Website bisa diakses via HTTPS
- [ ] Sitemap bisa diakses: `https://greenloka.com/sitemap.xml`
- [ ] Robots.txt bisa diakses: `https://greenloka.com/robots.txt`
- [ ] Meta tags visible (inspect source)
- [ ] JSON-LD schema visible (inspect source)
- [ ] Analytics code loaded (check DevTools Network)
- [ ] Mobile responsive (test di phone)
- [ ] No crawl errors
- [ ] No mixed content warnings

---

## 📞 Need Help?

### Resources:
- Google Search Console Help: https://support.google.com/webmasters
- Google Analytics Help: https://support.google.com/analytics
- Schema.org Documentation: https://schema.org
- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo

### Check Files:
1. `SEO_OPTIMIZATION.md` - Complete optimization guide
2. `GOOGLE_SUBMISSION_GUIDE.md` - Step-by-step submission
3. `TECHNICAL_SEO_CHECKLIST.md` - Implementation checklist

---

**Status:** ✅ Ready to Deploy
**Last Updated:** 2024
**Maintained by:** Greenloka Team

Start with Step 1️⃣ and follow through. Good luck! 🎉
