/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
