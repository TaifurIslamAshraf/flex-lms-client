/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['flex-lms-server-production.up.railway.app'],  // Use domains instead of remotePatterns for simpler config
    unoptimized: true,  // Add this for preview deployments
  },
};

export default nextConfig;
