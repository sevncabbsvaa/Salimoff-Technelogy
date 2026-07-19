"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SiteContent } from "@/data/types";
import SectionHeading from "./SectionHeading";
import { PARTNER_LOGO_DIMENSIONS } from "./partnerLogoDimensions";

type PartnerItem = SiteContent["partners"]["items"][number];

export default function Partners({ content }: { content: SiteContent }) {
  const { partners } = content;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderCard = (item: PartnerItem, key: string, duplicate = false) => (
    <div
      key={key}
      aria-hidden={duplicate || undefined}
      className={`group bg-surface border border-accent-light/12 rounded-card px-5 py-7 flex flex-col items-center justify-center gap-4 text-center flex-shrink-0 w-[260px] sm:w-[280px] transition-all duration-500 ease-out hover:border-accent-light/40 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(96,165,250,0.12)] ${
        duplicate ? "motion-reduce:hidden" : ""
      }`}
    >
      <Image
        src={item.logo}
        alt={item.name}
        width={PARTNER_LOGO_DIMENSIONS[item.logo].width}
        height={PARTNER_LOGO_DIMENSIONS[item.logo].height}
        className="h-18 w-auto max-w-full object-contain opacity-85 transition-opacity duration-250 group-hover:opacity-100"
      />
      <span className="text-[13px] text-muted">{item.name}</span>
    </div>
  );

  return (
    <section className="px-6 pt-7.5 pb-[110px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <SectionHeading eyebrow={partners.title} heading={partners.sectionTitle} />
        </div>

        <div
          ref={viewportRef}
          className={`partners-marquee-viewport transition-opacity duration-700 ease-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="partners-marquee-track flex gap-5 w-max motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
            {partners.items.map((item) => renderCard(item, item.name))}
            {partners.items.map((item) => renderCard(item, `${item.name}-dup`, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
