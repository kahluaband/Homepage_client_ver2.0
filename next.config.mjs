/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif'],
  },
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint 에러 무시
  },
  typescript: {
    ignoreBuildErrors: true, // 빌드 중 TypeScript 에러 무시
  },
};

export default nextConfig;
