// data/locales/az.ts
import type { SiteContent } from "../types";

const year = new Date().getFullYear();

export const az: SiteContent = {
  site: {
    name: "Salimoff Technology",
    legalName: "Salimoff Technology MMC",
    domain: "aiofisant.com",
    tagline: "Gələcəyin biznesi süni intellektlə başlayır.",
  },
  nav: {
    links: [
      { label: "Haqqımızda", href: "#haqqimizda" },
      { label: "Məhsullar", href: "#mehsullar" },
      { label: "Niyə Biz", href: "#niye-biz" },
      { label: "Komanda", href: "#komanda" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Əlaqə saxla",
  },
  hero: {
    badge: "Azərbaycanda hazırlanmış süni intellekt həlləri",
    title: "Gələcəyin biznesi süni intellektlə başlayır",
    subtitle:
      "Restoranlar, otellər və yaşayış kompleksləri üçün süni intellekt əsaslı avtomatlaşdırma həlləri. Xidmət keyfiyyətini yüksəldin, gəlirlərinizi artırın.",
    ctaPrimary: "Əlaqə saxla",
    ctaSecondary: "Məhsullara bax",
  },
  about: {
    title: "Haqqımızda",
    text: "Salimoff Technology müxtəlif sahələr üçün süni intellekt əsaslı proqram təminatları hazırlayan texnologiya şirkətidir. Məqsədimiz restoran, otel, yaşayış kompleksi və xidmət sektorunda əməliyyatları avtomatlaşdırmaq, xidmət keyfiyyətini yüksəltmək və bizneslərin gəlirlərini artırmaqdır.",
    mission: {
      title: "Missiyamız",
      text: "Biznesləri süni intellekt ilə rəqəmsallaşdırmaq.",
    },
    vision: {
      title: "Vizyonumuz",
      text: "Azərbaycanın və regionun aparıcı AI şirkətlərindən birinə çevrilmək.",
    },
  },
  products: {
    title: "Məhsullarımız",
    subtitle:
      "Hər biznesin öz həlli var. Dördü də bir məqsədə xidmət edir — daha sürətli xidmət, daha çox satış.",
    items: [
      {
        id: "ai-ofisant",
        logo: "/products/ai-ofisant-mark.png",
        name: "AI Ofisant",
        tagline: "Restoranların yeni əməkdaşı",
        description:
          "Restoranlar üçün səslə danışan rəqəmsal ofisant. Qonaqlar QR menyu vasitəsilə səsli və ya tablet üzərindən sifariş verir, AI Ofisant isə əlavə məhsullar təklif edərək satışı artırır.",
        features: [
          "QR menyu və səsli sifariş",
          "Tablet üzərindən sifariş",
          "Ağıllı upsell təklifləri",
          "POS inteqrasiyası",
          "24/7 fasiləsiz xidmət",
        ],
      },
      {
        id: "ai-room-service",
        logo: "/products/ai-room-service-mark.png",
        name: "AI Room Service",
        tagline: "Otellər üçün AI köməkçisi",
        description:
          "Qonaqlar otaqdan çıxmadan otelin bütün xidmətlərindən süni intellekt vasitəsilə istifadə edirlər. Daha sürətli xidmət, daha yüksək qonaq məmnuniyyəti, personal üzərində daha az yük.",
        features: [
          "Room service və housekeeping",
          "Laundry və transfer sifarişi",
          "SPA rezervasiyası",
          "Reception ilə birbaşa əlaqə",
        ],
      },
      {
        id: "ai-smart-residence",
        logo: "/products/ai-smart-residence-mark.png",
        name: "AI Smart Residence",
        tagline: "Yaşadığınız bina sizin üçün işləyir",
        description:
          "Yaşayış komplekslərinin bütün xidmətlərini bir mobil platformada birləşdirən AI əsaslı həll. Sakinlər gündəlik ehtiyaclarını bir tətbiq vasitəsilə idarə edir, sifariş verir və idarəetmə ilə rahat əlaqə saxlayırlar.",
        features: [
          "Kommunal ödənişlər və texniki xidmət",
          "Market, restoran və aptek sifarişi",
          "Gözəllik salonu və idman rezervasiyası",
          "AI Köməkçi ilə 24/7 dəstək",
          "Domofon, lift və smart home inteqrasiyası",
        ],
      },
      {
        id: "ai-drive-thru",
        logo: "/products/ai-drive-thru-mark.png",
        name: "AI Drive-Thru",
        tagline: "Avtomobildən düşmədən, AI ilə sifariş",
        description:
          "Sürücü avtomobildən düşmədən AI ilə danışaraq sifariş verir. Sistem sifarişi qəbul edir, əlavə məhsullar təklif edir, ödənişi tamamlayır və birbaşa mətbəxə göndərir.",
        features: [
          "Səsli sifariş qəbulu",
          "Ağıllı upsell təklifləri",
          "Ödənişin avtomatik tamamlanması",
          "Daha qısa növbə, daha sürətli xidmət",
          "Operator ehtiyacının azalması",
        ],
      },
    ],
  },
  whyUs: {
    title: "Niyə Salimoff Technology?",
    items: [
      { title: "Yerli texnologiya", text: "Azərbaycanda hazırlanan, yerli bazarı tanıyan həllər." },
      { title: "Bulud sistemi", text: "Server qurmadan, istənilan yerdən idarə edin." },
      { title: "API inteqrasiyası", text: "Mövcud POS və idarəetmə sistemlərinizlə uyğunlaşır." },
      { title: "Mobil uyğunluq", text: "iOS, Android və Web — hər platformada işləyir." },
      { title: "Çoxdilli dəstək", text: "Azərbaycan, rus və ingilis dillərində interfeys." },
      { title: "24/7 texniki dəstək", text: "Sistem dayanmır, biz də dayanmırıq." },
    ],
  },
  team: {
    title: "Komandamız",
    ceo: {
      name: "Amir Salimov", 
      role: "CEO / Founder",
      photo: "/team/amir.jpg",
    },
    members: [
      { name: "Sevinc Abbasova", role: "Software Developer", photo: "/team/sevinc.jpg" },
      { name: "Şamil Cəfərli", role: "AI Engineer", photo: "/team/shamil.jpg" },
      
    ],
  },
  faq: {
    title: "Tez-tez verilən suallar",
    items: [
      {
        q: "Sistemin quraşdırılması nə qədər vaxt aparır?",
        a: "Məhsuldan asılı olaraq quraşdırma adətən bir neçə gün ərzində tamamlanır. Komandamız bütün proses boyu sizinlə birlikdə işləyir.",
      },
      {
        q: "Mövcud POS sistemimlə inteqrasiya mümkündürmü?",
        a: "Bəli. Məhsullarımız API vasitəsilə geniş istifadə olunan POS və idarəetmə sistemləri ilə inteqrasiya olunur.",
      },
      {
        q: "Hansı dilləri dəstəkləyir?",
        a: "İnterfeys və AI köməkçilər Azərbaycan dili başda olmaqla çoxdilli dəstəyə malikdir.",
      },
      {
        q: "Qiymət necə hesablanır?",
        a: "Qiymət biznesinizin ölçüsünə və seçdiyiniz məhsula görə fərdi hesablanır. Əlaqə saxlayın, sizə uyğun təklif hazırlayaq.",
      },
      {
        q: "Texniki dəstək necə işləyir?",
        a: "Bütün müştərilərimizə 24/7 texniki dəstək təqdim edirik. Problemlər uzaqdan, əksər hallarda dəqiqələr içində həll olunur.",
      },
      {
        q: "Məhsulları quraşdırmadan öncə test etmək mümkündürmü?",
        a: "Bəli, demo təqdimatı üçün bizimlə əlaqə saxlamağınız kifayətdir. Komandamız məhsulu canlı nümayiş etdirəcək.",
      },
    ],
  },
  contact: {
    title: "Əlaqə",
    subtitle: "Biznesiniz üçün uyğun həlli birlikdə tapaq.",
    emailLabel: "E-poçt",
    email: "salimoffgroup@gmail.com",
    phoneLabel: "Telefon",
    phone: "+994 70 805 22 20", // ⚠️ CEO ilə təsdiqlə
    addressLabel: "Ünvan",
    address: "Ağ Şəhər, 2-ci Yaşıl Ada küçəsi 7, Bakı",
    whatsapp:
      "https://wa.me/994708052220?text=Salam%2C%20m%C9%99hsullar%C4%B1n%C4%B1z%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m",
    whatsappCta: "WhatsApp ilə yazın",
  },
  footer: {
    copyright: `© ${year} Salimoff Technology MMC. Bütün hüquqlar qorunur.`,
  },
  meta: {
    title: "Salimoff Technology — Biznesiniz üçün süni intellekt həlləri",
    description:
      "Restoranlar, otellər və yaşayış kompleksləri üçün AI əsaslı avtomatlaşdırma: AI Ofisant, AI Room Service, AI Smart Residence, AI Drive-Thru.",
  },
};