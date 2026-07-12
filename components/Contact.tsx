import type { SiteContent } from "@/data/types";

export default function Contact({ content }: { content: SiteContent }) {
  const { contact } = content;

  return (
    <section id="elaqe" className="relative scroll-mt-21 overflow-hidden px-6 pt-7.5 pb-15">
      <div className="absolute -bottom-55 left-1/2 -translate-x-1/2 w-200 h-105 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.16),transparent_65%)] pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-12 items-start">
        <div className="flex flex-col gap-5">
          <span className="text-[13px] font-semibold tracking-[0.14em] uppercase text-accent-light">{contact.title}</span>
          <h2 className="font-heading text-[clamp(28px,4vw,42px)] font-bold m-0 leading-[1.15]">{contact.subtitle}</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3.5 bg-surface border border-accent-light/12 rounded-[12px] px-5.5 py-4.5">
            <span className="text-[13px] font-semibold text-accent-light min-w-17">{contact.emailLabel}</span>
            <a href={`mailto:${contact.email}`} className="text-text text-[15px] hover:text-accent-light transition-colors">
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3.5 bg-surface border border-accent-light/12 rounded-[12px] px-5.5 py-4.5">
            <span className="text-[13px] font-semibold text-accent-light min-w-17">{contact.phoneLabel}</span>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-text text-[15px] hover:text-accent-light transition-colors">
              {contact.phone}
            </a>
          </div>
          <div className="flex items-center gap-3.5 bg-surface border border-accent-light/12 rounded-[12px] px-5.5 py-4.5">
            <span className="text-[13px] font-semibold text-accent-light min-w-17">{contact.addressLabel}</span>
            <span className="text-text text-[15px]">{contact.address}</span>
          </div>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-whatsapp text-white font-semibold text-base px-6 py-4 rounded-[12px] mt-1.5 shadow-[0_4px_20px_rgba(34,197,94,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_28px_rgba(34,197,94,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] transition-shadow"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="8" stroke="#FFFFFF" strokeWidth="1.6" />
              <circle cx="10" cy="10" r="3" fill="#FFFFFF" />
            </svg>
            {contact.whatsappCta}
          </a>
        </div>
      </div>
    </section>
  );
}
