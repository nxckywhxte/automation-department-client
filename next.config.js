/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru'
  },
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true
}

module.exports = nextConfig
