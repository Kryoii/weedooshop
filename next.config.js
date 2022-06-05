const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
