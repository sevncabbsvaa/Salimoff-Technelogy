import type { SiteContent } from "@/data/types";
import SectionHeading from "./SectionHeading";

const PRODUCT_ICONS: Record<string, React.ReactNode> = {
  "ai-ofisant": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="8" stroke="#60A5FA" strokeWidth="1.6" />
      <circle cx="11" cy="11" r="3" fill="#3B82F6" />
    </svg>
  ),
  "ai-room-service": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="16" height="16" rx="3" stroke="#60A5FA" strokeWidth="1.6" />
      <rect x="8" y="8" width="6" height="6" rx="1.5" fill="#3B82F6" />
    </svg>
  ),
  "ai-smart-residence": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="6" height="9" rx="1" stroke="#60A5FA" strokeWidth="1.6" />
      <rect x="12" y="4" width="6" height="15" rx="1" stroke="#60A5FA" strokeWidth="1.6" />
      <circle cx="15" cy="8" r="1.4" fill="#3B82F6" />
    </svg>
  ),
  "ai-drive-thru": (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="12" height="8" rx="2" stroke="#60A5FA" strokeWidth="1.6" />
      <circle cx="7" cy="17" r="2" fill="#3B82F6" />
      <circle cx="13" cy="17" r="2" fill="#3B82F6" />
      <line x1="15" y1="11" x2="19" y2="11" stroke="#60A5FA" strokeWidth="1.6" />
    </svg>
  ),
};

export default function Products({ content }: { content: SiteContent }) {
  const eyebrow = content.nav.links.find((l) => l.href === "#mehsullar")?.label ?? content.products.title;

  return (
    <section id="mehsullar" className="px-6 pt-[90px] pb-[110px]">
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
              className="relative overflow-hidden bg-surface border border-accent-light/14 rounded-card p-8 flex flex-col gap-3.5 shadow-[inset_0_1px_0_rgba(96,165,250,0.08)] transition-all duration-250 hover:border-accent-light/55 hover:-translate-y-1.5 hover:shadow-[0_16px_44px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(96,165,250,0.15)]"
            >
              <div className="absolute -top-15 -left-15 w-60 h-60 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_68%)] pointer-events-none" />
              <div className="relative w-12 h-12 rounded-[12px] bg-accent/14 border border-accent-light/30 flex items-center justify-center shadow-[0_0_22px_rgba(59,130,246,0.25)]">
                {PRODUCT_ICONS[item.id]}
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
