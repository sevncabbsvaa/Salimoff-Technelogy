// data/locales/en.ts
import type { SiteContent } from "../types";

const year = new Date().getFullYear();

export const en: SiteContent = {
  site: {
    name: "Salimoff Technology",
    legalName: "Salimoff Technology LLC",
    domain: "aiofisant.com",
    tagline: "The business of the future starts with artificial intelligence.",
  },
  nav: {
    links: [
      { label: "About", href: "#haqqimizda" },
      { label: "Products", href: "#mehsullar" },
      { label: "Why Us", href: "#niye-biz" },
      { label: "Team", href: "#komanda" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: "Contact Us",
  },
  hero: {
    badge: "AI solutions built in Azerbaijan",
    title: "The business of the future starts with artificial intelligence",
    subtitle:
      "AI-powered automation solutions for restaurants, hotels, and residential complexes. Elevate your service quality and grow your revenue.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "View Products",
  },
  partners: {
    title: "Trusted by",
    sectionTitle: "Our Partners",
    items: [
      { name: "AR Menu", logo: "/partners/partner-armenu.png" },
      { name: "Bukhari", logo: "/partners/partner-bukhari.png" },
      { name: "Galiano Lounge", logo: "/partners/partner-galiano.png" },
      { name: "Mühür Ocaq Başı", logo: "/partners/partner-muhur.png" },
      { name: "Rubin Resto & Pub", logo: "/partners/partner-rubin.png" },
    ],
  },
  about: {
    title: "About Us",
    text: "Salimoff Technology is a technology company building AI-powered software solutions for a wide range of industries. Our goal is to automate operations across restaurants, hotels, residential complexes, and the service sector — improving service quality and increasing business revenue.",
    mission: {
      title: "Our Mission",
      text: "Digitalize businesses through artificial intelligence.",
    },
    vision: {
      title: "Our Vision",
      text: "Become one of the leading AI companies in Azerbaijan and the region.",
    },
  },
  products: {
    title: "Our Products",
    subtitle:
      "Every business gets its own solution. All four serve one goal — faster service, more sales.",
    items: [
      {
        id: "ai-ofisant",
        logo: "/products/ai-ofisant-mark.png",
        name: "AI Ofisant",
        tagline: "Your restaurant's newest team member",
        description:
          "A voice-enabled digital waiter for restaurants. Guests order by voice through a QR menu or via tablet, while AI Ofisant suggests add-ons to increase the average check.",
        features: [
          "QR menu and voice ordering",
          "Tablet-based ordering",
          "Smart upsell suggestions",
          "POS integration",
          "24/7 uninterrupted service",
          "Reports Menu"
        ],
      },
      {
        id: "ai-room-service",
        logo: "/products/ai-room-service-mark.png",
        name: "AI Room Service",
        tagline: "An AI assistant for hotels",
        description:
          "Guests access all hotel services through AI without leaving their room. Faster service, higher guest satisfaction, and less pressure on your staff.",
        features: [
          "Room service and housekeeping",
          "Laundry and transfer requests",
          "SPA reservations",
          "Direct line to reception",
        ],
      },
      {
        id: "ai-smart-residence",
        logo: "/products/ai-smart-residence-mark.png",
        name: "AI Smart Residence",
        tagline: "Your building, working for you",
        description:
          "An AI-powered platform that unites every service of a residential complex in one mobile app. Residents manage daily needs, place orders, and stay in touch with management — all from a single app.",
        features: [
          "Utility payments and maintenance requests",
          "Grocery, restaurant, and pharmacy orders",
          "Beauty salon and gym reservations",
          "24/7 support with AI Assistant",
          "Intercom, elevator, and smart home integration",
        ],
      },
      {
        id: "ai-drive-thru",
        logo: "/products/ai-drive-thru-mark.png",
        name: "AI Drive-Thru",
        tagline: "Order by voice, without leaving your car",
        description:
          "Drivers place orders by talking to AI without stepping out of the car. The system takes the order, suggests add-ons, completes payment, and sends it straight to the kitchen.",
        features: [
          "Voice order taking",
          "Smart upsell suggestions",
          "Automatic payment processing",
          "Shorter queues, faster service",
          "Reduced need for operators",
        ],
      },
    ],
  },
  whyUs: {
    title: "Why Salimoff Technology?",
    items: [
      { title: "Local technology", text: "Built in Azerbaijan, with deep knowledge of the local market." },
      { title: "Cloud-based", text: "No servers to set up — manage everything from anywhere." },
      { title: "API integration", text: "Works with your existing POS and management systems." },
      { title: "Cross-platform", text: "Runs on iOS, Android, and Web." },
      { title: "Multilingual support", text: "Interface in Azerbaijani, Russian, and English." },
      { title: "24/7 technical support", text: "The system never stops. Neither do we." },
    ],
  },
  team: {
    title: "Our Team",
    ceo: {
      name: "Amir Salimov", 
      role: "CEO / Founder",
      photo: "/team/amir.jpg",
    },
    members: [
      { name: "Sevinc Abbasova", role: "Software Developer", photo: "/team/sevinc.jpg" },
      { name: "Shamil Jafarli", role: "AI Engineer", photo: "/team/shamil.jpg" },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        q: "How long does installation take?",
        a: "Depending on the product, setup is usually completed within a few days. Our team works with you throughout the entire process.",
      },
      {
        q: "Can it integrate with my existing POS system?",
        a: "Yes. Our products integrate with widely used POS and management systems via API.",
      },
      {
        q: "Which languages are supported?",
        a: "The interface and AI assistants offer multilingual support, with Azerbaijani as the primary language.",
      },
      {
        q: "How is pricing calculated?",
        a: "Pricing is tailored to your business size and the product you choose. Get in touch and we'll prepare an offer that fits.",
      },
      {
        q: "How does technical support work?",
        a: "All our clients receive 24/7 technical support. Most issues are resolved remotely, often within minutes.",
      },
      {
        q: "Can I test the products before installation?",
        a: "Yes — just contact us for a demo. Our team will walk you through the product live.",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Let's find the right solution for your business, together.",
    emailLabel: "Email",
    email: "salimoffgroup@gmail.com",
    phoneLabel: "Phone",
    phone: "+994 70 805 22 20", // ⚠️ confirm with CEO
    addressLabel: "Address",
    address: "White City, 2nd Yashil Ada street 7, Baku",
    whatsapp:
      "https://wa.me/994708052220?text=Salam%2C%20m%C9%99hsullar%C4%B1n%C4%B1z%20haqq%C4%B1nda%20m%C9%99lumat%20almaq%20ist%C9%99yir%C9%99m",
    whatsappCta: "Chat on WhatsApp",
  },
  footer: {
    copyright: `© ${year} Salimoff Technology LLC. All rights reserved.`,
  },
  meta: {
    title: "Salimoff Technology — AI Solutions for Your Business",
    description:
      "AI-powered automation for restaurants, hotels, and residential complexes: AI Ofisant, AI Room Service, AI Smart Residence, AI Drive-Thru.",
  },
};