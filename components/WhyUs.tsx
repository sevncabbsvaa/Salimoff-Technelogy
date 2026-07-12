import type { SiteContent } from "@/data/types";
import SectionHeading from "./SectionHeading";
import DiagonalWedge from "./DiagonalWedge";

export default function WhyUs({ content }: { content: SiteContent }) {
  const eyebrow = content.nav.links.find((l) => l.href === "#niye-biz")?.label ?? content.whyUs.title;

  return (
    <>
      <DiagonalWedge position="in" angle="right" />
      <section id="niye-biz" className="scroll-mt-21 px-6 pt-[70px] pb-[90px] bg-bg-tint">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <SectionHeading eyebrow={eyebrow} heading={content.whyUs.title} />
          </div>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {content.whyUs.items.map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-accent-light/12 rounded-card p-6.5 flex flex-col gap-3 shadow-[inset_0_1px_0_rgba(96,165,250,0.07)] transition-all duration-250 hover:border-accent-light/40 hover:-translate-y-0.75 hover:shadow-[0_10px_30px_rgba(59,130,246,0.14),inset_0_1px_0_rgba(96,165,250,0.12)]"
              >
                <div className="w-9.5 h-9.5 rounded-[10px] bg-accent/12 border border-accent-light/25 flex items-center justify-center shadow-[0_0_16px_rgba(59,130,246,0.18)]">
                  <div className="w-3 h-3 bg-linear-to-br from-accent to-accent-light rotate-45 rounded-[2px]" />
                </div>
                <h3 className="font-heading text-[17px] font-semibold m-0">{item.title}</h3>
                <p className="text-sm leading-[1.6] text-muted m-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DiagonalWedge position="out" angle="right" />
    </>
  );
}
