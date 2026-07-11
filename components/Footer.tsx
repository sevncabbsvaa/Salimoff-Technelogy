import type { SiteContent } from "@/data/types";
import Logo from "./Logo";

export default function Footer({ content }: { content: SiteContent }) {
  const footerLinks = content.nav.links.filter((link) => link.href !== "#niye-biz");

  return (
    <footer className="px-6 pb-16">
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-accent-light/10 flex flex-wrap items-center justify-between gap-5">
        <Logo size={24} textClassName="text-sm" />
        <div className="flex gap-5.5 text-[13px] flex-wrap">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted hover:text-text transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-[13px] text-muted m-0">{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
