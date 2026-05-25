# Panduan Submit Website Greenloka ke Google Search Console

## 📋 Langkah-langkah Setup Google Search Console

### 1. **Buka Google Search Console**
- URL: https://search.google.com/search-console
- Login dengan Google account

### 2. **Tambah Property**
1. Klik "Add property" / "Tambah properti"
2. Pilih "URL prefix"
3. Masukkan URL website: `https://greenloka.com` (pastikan HTTPS)
4. Klik "Continue"

### 3. **Verify Ownership - Pilih Metode Terbaik**

#### Opsi A: Meta Tag (Paling Mudah)
1. Google akan memberikan meta tag seperti:
   ```
   <meta name="google-site-verification" content="xxxxxxxxxxxxxxxxxxxxx" />
   ```
2. Copy kode setelah `content="`
3. Buka file `lib/seo-trackers.tsx` di project
4. Atau update `app/layout.tsx`, tambahkan di dalam `<head>`:
   ```jsx
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
5. Kembali ke Google Search Console, klik "Verify"

#### Opsi B: HTML File Upload
1. Download file yang diberikan Google
2. Upload ke folder `public/`
3. Klik "Verify" di Google Search Console

#### Opsi C: DNS Record
1. Google memberikan DNS record
2. Login ke domain registrar (Namecheap, GoDaddy, etc.)
3. Add TXT record dengan value yang diberikan Google
4. Wait 24-48 jam untuk propagation
5. Klik "Verify" di Google Search Console

---

## 🗺️ Submit Sitemap

### Langkah 1: Verify Sitemap URL
1. Di Google Search Console, klik "Sitemaps" (menu kiri)
2. Klik "New sitemap"
3. Masukkan: `https://greenloka.com/sitemap.xml`
4. Klik "Submit"

### Langkah 2: Monitor Sitemap Status
- Tunggu sampai status berubah jadi "Success"
- Ini artinya Google sudah crawl semua URLs

---

## 📊 Google Search Console Features untuk SEO

Setelah verified, gunakan fitur berikut:

### 1. **Performance Report**
- Monitor keyword rankings
- Lihat CTR, impressions, average position
- Target: Improve ranking untuk "Greenloka", "bagasse packaging"

### 2. **Coverage Report**
- Check jika ada errors di sitemap
- Ensure semua pages indexed correctly

### 3. **Enhancements**
- Check Mobile-Friendly issues
- Monitor Rich Results (structured data)
- Check Breadcrumb errors

### 4. **Settings**
- Set crawl rate
- Disallow crawling unnecessary pages
- Set preferred domain (www vs non-www)

---

## 🔗 Setup Google Analytics 4

### Langkah 1: Create Google Analytics Account
1. URL: https://analytics.google.com/
2. Klik "Create"
3. Fill account name: "Greenloka"
4. Property name: "Greenloka Website"
5. Timezone: Select your timezone
6. Currency: Select your currency
7. Klik "Create"

### Langkah 2: Get Measurement ID
1. Di Google Analytics, klik "Admin" (ikon gear)
2. Di kolom "Property", klik "Data streams"
3. Klik "Web"
4. Copy **Measurement ID** (format: G-XXXXXXXXXX)

### Langkah 3: Add to Greenloka Project
1. Buat `.env.local` di root folder
2. Tambahkan:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
3. Edit `app/layout.tsx`, tambahkan di `<head>`:
   ```jsx
   {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
     <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
   )}
   ```
4. Import component:
   ```jsx
   import { GoogleAnalytics } from '@/components/seo-trackers'
   ```

### Langkah 4: Verify GA Connected
1. Buka Google Analytics
2. Klik "Admin" → "Reporting Identity"
3. Verify website muncul dengan data

---

## 🔧 Setup Bing Webmaster Tools (Optional tapi Recommended)

### Langkah 1: Daftar
1. URL: https://www.bing.com/webmasters
2. Login dengan Microsoft account
3. Klik "Add a site"
4. Masukkan: `https://greenloka.com`

### Langkah 2: Verify
1. Pilih "Meta tag" method
2. Copy verification code
3. Tambahkan ke `app/layout.tsx`:
   ```jsx
   <meta name="msvalidate.01" content="YOUR_CODE_HERE" />
   ```
4. Klik "Verify"

### Langkah 3: Submit Sitemap
1. Di Bing Webmaster, klik "Sitemaps"
2. Klik "Submit sitemap"
3. Masukkan: `https://greenloka.com/sitemap.xml`

---

## 🚀 Additional Search Engine Submissions

### Google My Business (Local SEO)
1. URL: https://www.google.com/business/
2. Setup business profile
3. Add business hours, address, phone, website
4. Upload business photos
5. Encourage customer reviews

### Yandex (Jika target Russian market)
1. URL: https://webmaster.yandex.com/
2. Follow similar steps

### Baidu (Jika target Chinese market)
1. URL: https://zhanzhang.baidu.com/
2. Follow similar steps

---

## 📈 Monitoring & Continuous Improvement

### Daily/Weekly Checks:
- [ ] Google Search Console - Performance metrics
- [ ] Check ranking untuk target keywords
- [ ] Monitor "Greenloka" brand keyword

### Monthly Checks:
- [ ] Review traffic sources
- [ ] Analyze user behavior
- [ ] Check mobile vs desktop traffic
- [ ] Review bounce rate & engagement metrics
- [ ] Audit broken links

### Quarterly:
- [ ] Update old content
- [ ] Create new content
- [ ] Review and improve poorly performing pages
- [ ] Check technical SEO issues

---

## 💡 Pro Tips untuk Ranking "Greenloka"

1. **Brand Mentions**: Dapatkan mention di food blogs, eco-friendly websites, sustainability publications
2. **Press Releases**: Publish tentang milestone, new products, sustainability efforts
3. **Content Strategy**: Write about eco-friendly packaging, bagasse benefits
4. **Local Citations**: List di local business directories
5. **Customer Reviews**: Encourage reviews on Google, Trustpilot, industry-specific review sites
6. **Email Outreach**: Contact food bloggers, eco influencers untuk feature
7. **Internal Linking**: Link dari homepage ke products page dan vice versa
8. **Update Frequency**: Regular updates = signal bahwa website is active

---

## 🔍 Keyword Research for Greenloka

### Primary Keywords:
- "greenloka" (Brand keyword)
- "bagasse packaging"
- "eco-friendly food packaging"
- "compostable containers"
- "sustainable packaging"

### Long-tail Keywords:
- "bagasse food containers for restaurants"
- "eco-friendly disposable plates"
- "compostable bagasse takeaway boxes"
- "sustainable catering packaging"
- "FDA approved compostable containers"

### Local Keywords (jika applicable):
- "bagasse packaging [your city]"
- "eco-friendly containers [state]"
- "sustainable packaging supplier near me"

---

## ✅ SEO Checklist

- [ ] Setup Google Search Console
- [ ] Submit sitemap ke Google
- [ ] Setup Google Analytics
- [ ] Setup Bing Webmaster (optional)
- [ ] Add verification meta tags
- [ ] Create Google Business Profile
- [ ] Optimize page speed (Lighthouse)
- [ ] Create quality content
- [ ] Build backlinks
- [ ] Monitor rankings monthly
- [ ] Update old content regularly

---

**Status**: Implementation Complete ✓
**Date**: 2024
**Next Review**: Monthly
