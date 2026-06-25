import type { NextConfig } from 'next'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const isUserOrOrgPage = repositoryName.endsWith('.github.io')
const basePath = isGitHubPages && repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : ''

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
