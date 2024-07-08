/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/avif'],
    domains: ['example.com'], // 이 부분은 필요에 따라 추가하거나 변경하세요.
  },
};

export default nextConfig;
