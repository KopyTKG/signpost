/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'picsum.photos',
    pathname: '/200',
   },
   {
    protocol: 'https',
    hostname: '*',
   },
  ],
 },
}

module.exports = nextConfig
