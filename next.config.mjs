import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const LEGACY_PATHS = [
  "nettoyage-maison",
  "nettoyage-maison-2",
  "professional-cleaning-in-geneva",
  "professionelle-reinigung-in-genf",
  "contact",
  "a-propos",
  "about",
  "quick-links",
  "blog",
  "services",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const locales = ["fr", "en", "es", "de"];
    return locales.flatMap((locale) =>
      LEGACY_PATHS.map((path) => ({
        source: `/${locale}/${path}`,
        destination: `/${locale}`,
        permanent: true,
      }))
    );
  },
};

export default withNextIntl(nextConfig);
