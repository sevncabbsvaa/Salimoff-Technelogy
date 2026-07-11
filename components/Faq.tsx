import type { SiteContent } from "@/data/types";
import SectionHeading from "./SectionHeading";
import DiagonalWedge from "./DiagonalWedge";

export default function Faq({ content }: { content: SiteContent }) {
  const eyebrow = content.nav.links.find((l) => l.href === "#faq")?.label ?? content.faq.title;

  return (
    <>
      <DiagonalWedge position="in" angle="left" />
      <section id="faq" className="px-6 pt-[70px] pb-[90px] bg-bg-tint">
        <div className="max-w-195 mx-auto">
          <div className="mb-12">
            <SectionHeading eyebrow={eyebrow} heading={content.faq.title} />
          </div>
          <div className="flex flex-col gap-3">
            {content.faq.items.map((item) => (
              <details key={item.q} className="group bg-surface border border-accent-light/12 rounded-[12px] overflow-hidden">
                <summary className="cursor-pointer px-6 py-5 flex items-center justify-between gap-4 font-heading text-base font-semibold text-text">
                  {item.q}
                  <span className="text-accent-light text-xl font-normal transition-transform duration-200 flex-shrink-0 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 m-0 text-[15px] leading-[1.65] text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <DiagonalWedge position="out" angle="left" />
    </>
  );
}
