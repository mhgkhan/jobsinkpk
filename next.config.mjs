/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // allow all HTTP domains (optional)
      },
    ],
  },
};

export default nextConfig;
