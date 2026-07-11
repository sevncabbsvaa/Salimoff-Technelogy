// data/content.ts — locale loader (köhnə content.ts-i əvəz edir)
import type { Locale, SiteContent } from "./types";
import { az } from "./locales/az";
import { en } from "./locales/en";
import { ru } from "./locales/ru";

export const locales: Locale[] = ["az", "en", "ru"];
export const defaultLocale: Locale = "az";

const content: Record<Locale, SiteContent> = { az, en, ru };

export function getContent(locale: Locale): SiteContent {
  return content[locale] ?? content[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}