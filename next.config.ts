import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  i18n: {
    locales: [ 'zh', 'en' ],
    defaultLocale: 'en',
  },
  /* config options here */
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
