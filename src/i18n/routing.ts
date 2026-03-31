import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "es", "de"],
  defaultLocale: "fr",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
