/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'attritom7.com',
        port: '',
        pathname: '/storage/app/public/image/games/**',
      },
    ],
  },
};

export default nextConfig;
