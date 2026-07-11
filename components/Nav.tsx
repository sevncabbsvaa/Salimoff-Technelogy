"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import type { SiteContent } from "@/data/types";
import type { Locale } from "@/data/types";

const SECTION_IDS = ["haqqimizda", "mehsullar", "niye-biz", "komanda", "faq"];
const LOCALE_PATH: Record<Locale, string> = { az: "/", en: "/en", ru: "/ru" };
const LOCALE_LABEL: Record<Locale, string> = { az: "AZ", en: "EN", ru: "RU" };
const LOCALES: Locale[] = ["az", "en", "ru"];

export default function Nav({ content, locale }: { content: SiteContent; locale: Locale }) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function switchLocale(target: Locale) {
    document.cookie = `locale=${target}; path=/; max-age=${60 * 60 * 24 * 365}`;
    const hash = window.location.hash;
    window.location.href = `${LOCALE_PATH[target]}${hash}`;
  }

  return (
    <>
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-bg/78 border-b border-accent-light/10">
      <div className="max-w-[1200px] mx-auto px-6 h-17 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center">
          <Logo size={32} />
        </a>

        <div className="hidden lg:flex items-center gap-6 text-sm font-medium flex-wrap justify-center">
          {content.nav.links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`border-b-2 py-1.5 transition-colors ${
                  isActive ? "text-text border-accent-light" : "text-muted border-transparent hover:text-text"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <LocaleSwitcher locale={locale} onSwitch={switchLocale} />
          <a
            href="#elaqe"
            className="bg-linear-to-br from-accent to-accent-light text-white font-semibold text-sm px-5 py-2.5 rounded-btn whitespace-nowrap shadow-[0_2px_14px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_4px_24px_rgba(59,130,246,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] transition-shadow"
          >
            {content.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-5 h-0.5 bg-text transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-text transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-text transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
    </nav>

    <div
      className={`lg:hidden fixed inset-x-0 top-17 bottom-0 z-40 bg-bg/97 backdrop-blur-lg transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-start gap-6 px-6 py-10 text-lg font-medium">
        {content.nav.links.map((link) => (
          <a key={link.href} href={link.href} className="text-text" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          href="#elaqe"
          onClick={() => setMenuOpen(false)}
          className="bg-linear-to-br from-accent to-accent-light text-white font-semibold px-5 py-3 rounded-btn w-full text-center"
        >
          {content.nav.cta}
        </a>
        <div className="pt-4 border-t border-accent-light/10 w-full">
          <LocaleSwitcher locale={locale} onSwitch={switchLocale} />
        </div>
      </div>
    </div>
    </>
  );
}

function LocaleSwitcher({ locale, onSwitch }: { locale: Locale; onSwitch: (l: Locale) => void }) {
  return (
    <div className="flex items-center gap-1.5 text-sm font-semibold">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-muted/50">·</span>}
          <button
            type="button"
            onClick={() => onSwitch(l)}
            aria-current={locale === l}
            className={locale === l ? "text-accent-light" : "text-muted hover:text-text transition-colors"}
          >
            {LOCALE_LABEL[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
