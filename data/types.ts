// data/types.ts — bütün locale faylları bu tipi implement edir

export type Locale = "az" | "en" | "ru";

export interface SiteContent {
  site: {
    name: string;
    legalName: string;
    domain: string;
    tagline: string;
  };
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    text: string;
    mission: { title: string; text: string };
    vision: { title: string; text: string };
  };
  products: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      name: string; // brend adı — tərcümə olunmur
      tagline: string;
      description: string;
      features: string[];
      logo: string;
    }[];
  };
  whyUs: {
    title: string;
    items: { title: string; text: string }[];
  };
  team: {
    title: string;
    ceo: { name: string; role: string; photo: string };
    members: { name: string; role: string; photo: string }[];
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    addressLabel: string;
    address: string;
    whatsapp: string;
    whatsappCta: string;
  };
  footer: {
    copyright: string;
  };
  meta: {
    title: string;
    description: string;
  };
}