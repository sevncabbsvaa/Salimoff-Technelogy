import type { SiteContent } from "@/data/types";

export default function Hero({ content }: { content: SiteContent }) {
  return (
    <header id="hero" className="relative scroll-mt-21 px-6 pt-[90px] pb-[100px] overflow-hidden">
      {/* giant logo watermark */}
      <svg
        className="absolute -right-35 top-1/2 -translate-y-1/2 w-[680px] h-[680px] opacity-5 pointer-events-none"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="10" r="5" stroke="#60A5FA" strokeWidth="3" />
        <line x1="32" y1="16" x2="32" y2="48" stroke="#60A5FA" strokeWidth="4" strokeLinecap="round" />
        <circle cx="18" cy="22" r="4" stroke="#60A5FA" strokeWidth="2.5" />
        <path d="M18 26 V36 L23 41 V48" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="46" cy="17" r="4" stroke="#60A5FA" strokeWidth="2.5" />
        <path d="M46 21 V31 L41 36 V48" stroke="#60A5FA" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="10" y1="51" x2="54" y2="51" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="57" x2="44" y2="57" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute -top-50 -left-30 w-[640px] h-[520px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto grid [grid-template-columns:repeat(auto-fit,minmax(340px,1fr))] gap-14 items-center">
        {/* left: copy */}
        <div className="flex flex-col items-start gap-6.5">
          <div className="inline-flex items-center gap-2 border border-accent-light/25 bg-accent/8 rounded-full px-4 py-1.75 text-[13px] text-muted font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light inline-block" />
            {content.hero.badge}
          </div>
          <h1 className="font-heading text-[clamp(38px,5vw,62px)] font-bold leading-[1.08] m-0 tracking-[-0.02em]">
            {content.hero.title}
          </h1>
          <p className="text-[clamp(16px,2vw,18px)] leading-[1.65] text-muted max-w-[540px] m-0">
            {content.hero.subtitle}
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#elaqe"
              className="bg-linear-to-br from-accent to-accent-light text-white font-semibold text-base px-8 py-3.75 rounded-btn shadow-[0_4px_24px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_34px_rgba(59,130,246,0.65),inset_0_1px_0_rgba(255,255,255,0.25)] transition-shadow"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href="#mehsullar"
              className="border border-muted/30 text-text font-semibold text-base px-8 py-3.75 rounded-btn bg-surface/50 hover:border-accent-light/60 transition-colors"
            >
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* right: circuit illustration */}
        <div className="relative min-h-110 flex items-center justify-center">
          <div className="absolute w-105 h-105 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_65%)]" />
          <svg className="relative w-full max-w-120 h-auto" viewBox="0 0 480 440" fill="none" aria-hidden="true">
            <path d="M240 60 V150" stroke="rgba(96,165,250,0.45)" strokeWidth="2" />
            <path d="M100 120 V190 L150 240 H200" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" />
            <path d="M380 100 V180 L330 230 H280" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" />
            <path d="M60 300 H160 V340" stroke="rgba(96,165,250,0.22)" strokeWidth="1.5" />
            <path d="M420 320 H330 V360" stroke="rgba(96,165,250,0.22)" strokeWidth="1.5" />
            <path d="M240 290 V380" stroke="rgba(96,165,250,0.4)" strokeWidth="2" />
            <path d="M120 400 H360" stroke="rgba(96,165,250,0.35)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="240" cy="55" r="7" stroke="#60A5FA" strokeWidth="2.5" />
            <circle cx="100" cy="115" r="5" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="380" cy="95" r="5" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="60" cy="300" r="4" fill="#3B82F6" />
            <circle cx="420" cy="320" r="4" fill="#3B82F6" />
            <circle cx="160" cy="340" r="4" fill="#60A5FA" />
            <circle cx="330" cy="360" r="4" fill="#60A5FA" />
            {/* central chip */}
            <rect x="200" y="150" width="80" height="140" rx="12" fill="#111D33" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" />
            <g transform="translate(208, 168) scale(1)">
              <defs>
                <linearGradient id="lgHero" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="10" r="5" stroke="url(#lgHero)" strokeWidth="3" />
              <line x1="32" y1="16" x2="32" y2="48" stroke="url(#lgHero)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="18" cy="22" r="4" stroke="url(#lgHero)" strokeWidth="2.5" />
              <path d="M18 26 V36 L23 41 V48" stroke="url(#lgHero)" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="46" cy="17" r="4" stroke="url(#lgHero)" strokeWidth="2.5" />
              <path d="M46 21 V31 L41 36 V48" stroke="url(#lgHero)" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="10" y1="51" x2="54" y2="51" stroke="url(#lgHero)" strokeWidth="3" strokeLinecap="round" />
              <line x1="20" y1="57" x2="44" y2="57" stroke="url(#lgHero)" strokeWidth="3" strokeLinecap="round" />
            </g>
            <text x="240" y="262" textAnchor="middle" fill="#94A3B8" fontFamily="monospace" fontSize="11" letterSpacing="2">
              AI CORE
            </text>
          </svg>
        </div>
      </div>
    </header>
  );
}
