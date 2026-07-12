import Image from "next/image";
import type { SiteContent } from "@/data/types";
import SectionHeading from "./SectionHeading";

// intrinsic pixel dimensions of the /public/products/*-mark.png files, used so
// next/image can preserve aspect ratio while CSS pins every logo to the same height.
const LOGO_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "ai-ofisant": { width: 1186, height: 1186 },
  "ai-room-service": { width: 624, height: 451 },
  "ai-smart-residence": { width: 584, height: 416 },
  "ai-drive-thru": { width: 589, height: 357 },
};

export default function Products({ content }: { content: SiteContent }) {
  const eyebrow = content.nav.links.find((l) => l.href === "#mehsullar")?.label ?? content.products.title;

  return (
    <section id="mehsullar" className="scroll-mt-21 px-6 pt-[90px] pb-[110px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <SectionHeading eyebrow={eyebrow} heading={content.products.title} />
          <p className="text-base leading-[1.65] text-muted text-center max-w-160 mx-auto mt-3.5">
            {content.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5.5">
          {content.products.items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-surface border border-accent-light/14 rounded-card p-8 flex flex-col gap-3.5 shadow-[inset_0_1px_0_rgba(96,165,250,0.08)] transition-all duration-250 hover:border-accent-light/55 hover:-translate-y-1.5 hover:shadow-[0_16px_44px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(96,165,250,0.15)]"
            >
              <div className="absolute -top-15 -left-15 w-60 h-60 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_68%)] pointer-events-none" />
              <div className="relative w-fit rounded-xl bg-accent/8 p-3">
                <div className="absolute inset-0 rounded-full bg-accent blur-xl opacity-15 transition-opacity duration-300 group-hover:opacity-25 pointer-events-none" />
                <Image
                  src={item.logo}
                  alt=""
                  width={LOGO_DIMENSIONS[item.id].width}
                  height={LOGO_DIMENSIONS[item.id].height}
                  className="relative h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative">
                <h3 className="font-heading text-xl font-semibold m-0 mb-1">{item.name}</h3>
                <p className="text-[13px] font-semibold text-accent-light m-0">{item.tagline}</p>
              </div>
              <p className="relative text-[15px] leading-[1.65] text-muted m-0">{item.description}</p>
              <ul className="relative list-none m-0 mt-1 p-0 flex flex-col gap-2.25 text-sm text-text">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="text-accent-light font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
