const nextra = require('nextra')
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'id', 'ja', 'ko'],
    defaultLocale: 'en'
  }
}

module.exports = withNextra(nextConfig)
