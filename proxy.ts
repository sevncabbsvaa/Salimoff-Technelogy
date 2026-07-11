import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./data/content";
import type { Locale } from "./data/types";

const COOKIE_NAME = "locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale;
  }

  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";
  if (acceptLanguage.includes("ru")) return "ru";
  if (acceptLanguage.includes("en")) return "en";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const prefixedLocale = locales.find(
    (locale) => locale !== defaultLocale && (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  );

  if (prefixedLocale) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, prefixedLocale, { path: "/", maxAge: COOKIE_MAX_AGE });
    return response;
  }

  const locale = detectLocale(request);

  if (locale !== defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(COOKIE_NAME, locale, { path: "/", maxAge: COOKIE_MAX_AGE });
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  const response = NextResponse.rewrite(url);
  response.cookies.set(COOKIE_NAME, defaultLocale, { path: "/", maxAge: COOKIE_MAX_AGE });
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
