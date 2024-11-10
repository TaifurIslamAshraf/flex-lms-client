/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flex-lms-server-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
