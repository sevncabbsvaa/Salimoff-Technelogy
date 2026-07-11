import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getContent, locales, defaultLocale, isLocale } from "@/data/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);

  return {
    title: content.meta.title,
    description: content.meta.description,
    metadataBase: new URL(`https://${content.site.domain}`),
    alternates: {
      canonical: locale === defaultLocale ? "/" : `/${locale}`,
      languages: {
        az: "/",
        en: "/en",
        ru: "/ru",
        "x-default": "/",
      },
    },
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text font-body">{children}</body>
    </html>
  );
}
