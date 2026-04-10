/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
