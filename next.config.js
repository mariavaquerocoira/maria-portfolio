/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Cloudinary still needed for 3 videos that have no local equivalent:
    // Maria-Vaquero-iPhone16-01.mp4, maria-vaquero-PreShow_wwdc25.mp4, logomotion_720p_delaf2.mp4
    // Once those files are added to public/assets, this block can be removed.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
