import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/data/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getContent(locale);

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg pt-17">
      <Nav content={content} locale={locale} />
      <main>
        <Hero content={content} />
        <Divider />
        <About content={content} />
        <Divider />
        <Products content={content} />
        <WhyUs content={content} />
        <Partners content={content} />
        <Team content={content} />
        <Faq content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </div>
  );
}
