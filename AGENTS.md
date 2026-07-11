# Salimoff Technology — Tanıtım Saytı

B2B tanıtım saytı: restoranlar, otellər və yaşayış kompleksləri üçün AI həlləri təqdim edən şirkət.
Tək səhifə (one-page) + anchor naviqasiya. Dil: Azərbaycan dili. Domen: aiofisant.com

## Stack
- Next.js 15 (App Router), TypeScript, Tailwind v4
- Animasiya: GSAP + ScrollTrigger, Lenis (smooth scroll)
- Deploy: Vercel

## i18n (AZ / EN / RU)
- Route strukturu: app/[locale]/ dinamik seqment. AZ default dildir və prefixsiz
  açılır (aiofisant.com/), digərləri /en və /ru.
- Kiçik middleware: kök sorğuda cookie/Accept-Language yoxlayıb yönləndirir.
  Əlavə i18n kitabxanası LAZIM DEYİL — content onsuz da typed TS fayllarındadır.
- Content: data/locales/az.ts, en.ts, ru.ts — üçü də data/types.ts-dəki
  SiteContent tipini implement edir. Yeni mətn əlavə olunanda tip 3 faylda da
  mövcudluğu məcbur edir (build error verər, unutmaq mümkün deyil).
- data/content.ts → getContent(locale) loader funksiyası.
- Nav-da dil seçici: AZ · EN · RU (üç toggle, dropdown yox). Seçim cookie-də
  saxlanılır, keçid eyni anchor mövqeyini qoruyur.
- SEO: hər locale üçün generateMetadata + hreflang alternates, <html lang> dinamik.
- Məhsul adları (AI Ofisant, AI Room Service, AI Smart Residence, AI Drive-Thru)
  HEÇ BİR dildə tərcümə olunmur — brend adlarıdır.

## Qaydalar
- Bütün mətnlər YALNIZ `data/content.ts`-dən gəlir. Komponentlərdə hardcode mətn olmaz.
- Tailwind v4 `@theme` CSS variables ilə palitra `globals.css`-də tək yerdə təyin olunur.
- Yalnız transform/opacity animasiya olunur (GPU-friendly). Layout shift yaradan animasiya qadağandır.
- `prefers-reduced-motion` hörmət olunur — bu halda bütün animasiyalar instant olur.
- Server Components default; yalnız animasiya/interaktivlik olan komponentlər "use client".
- Şəkillər: next/image, team fotoları üçün sizes düzgün verilir.

## Dizayn tokenləri
- bg: #0A1628 (tünd navy) · surface: #111D33 · surface-hover: #16233D
- accent gradient: #3B82F6 → #60A5FA · accent solid: #3B82F6
- text: #E2E8F0 · muted: #94A3B8 · border: rgba(96,165,250,0.15)
- Font: başlıqlar Space Grotesk, body Inter (next/font/google)
- Border-radius: kartlar 16px, düymələr 12px
- Dekor: incə circuit-line SVG-lər, subtil blue glow. Neon overload YOX — zəriflik.
- Referans: - Referans: /design-source qovluğunda Claude Design-dan export olunmuş dizayn kodu.
  Vizual nəticə buna birə-bir uyğun olmalıdır.

## Logo
- `components/Logo.tsx` — layihədəki salimoff-logo-icon.svg əsasında inline SVG komponent.
- SVG-dəki class-lar (stem, branch, node, base) GSAP animasiyası üçün saxlanılır.
- Nav: icon + "SALIMOFF" text (geniş letter-spacing, HTML text). Footer: tam lockup.

## Səhifə strukturu (component-per-section)
1. `Nav.tsx` — sticky, blur backdrop, logo + 5 link + "Əlaqə saxla" CTA (accent gradient).
   Scroll-da backdrop güclənir. Aktiv bölmə linki highlight (IntersectionObserver).
   Mobile: hamburger + slide-in menu.
2. `Hero.tsx` — mətn sola, sağda dekorativ circuit sahəsi. H1 + sub + 2 düymə.
   Fonda logo watermark (opacity ~5%) + circuit xətləri.
3. `About.tsx` — təqdimat paraqrafı + Missiya/Viziya kartları (2 kart yanaşı).
4. `Products.tsx` — 4 kart, 2×2 grid (mobile: stack). Icon + ad + tagline + təsvir +
   checkmark feature siyahısı. Hover: lift -6px + border glow.
5. `WhyUs.tsx` — 6 punkt, 3×2 icon grid.
6. `Team.tsx` — CEO kartı böyük mərkəzdə, altında 6 nəfər 3×2 grid (mobile: 2 sütun).
   Fotolar: /public/team/. Hover: grayscale→color.
7. `Faq.tsx` — accordion, 6 sual. Height auto-animate + chevron rotate.
8. `Contact.tsx` + `Footer.tsx` — əlaqə məlumatları + prominent WhatsApp düyməsi
   (yaşıl, wa.me linki). Form YOXDUR — WhatsApp + email link kifayətdir.
   Footer: logo lockup, mini-nav, copyright.

## Animasiyalar (statik build bitdikdən SONRA əlavə olunur)
- HERO intro: logo SVG stroke-draw (stroke-dashoffset, class-lara görə: əvvəl stem,
  sonra branch-lar, node-lar pulse), H1 sözbəsöz fade-up (stagger 0.06s), düymələr fade-in.
  Fonda circuit xətləri üzərində yavaş hərəkət edən işıq nöqtələri (loop, çox subtil).
- SCROLL REVEAL: hər bölmə fade-up + 24px translate (ScrollTrigger, once: true),
  kartlar stagger 0.1s.
- WhyUs iconları: viewport-a girəndə scale 0.8→1 pop (back.out), ardıcıl.
- FAQ, Nav, kart hover-ları: yuxarıda təsvir olunub.

## Responsive
Mobile-first. Test breakpoint-lər: 375px, 768px, 1024px, 1440px.

## SEO / Meta
- title: "Salimoff Technology — Biznesiniz üçün süni intellekt həlləri"
- description: content.ts-dəki hero subtitle əsasında
- lang="az", OpenGraph şəkli (sadə: dark bg + logo + tagline)
