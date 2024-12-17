/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self';
`

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

 eslint: {
  ignoreDuringBuilds: true,
 },
 async headers() {
  return [
   {
    source: '/:path*',
    headers: [
     {
      key: 'Access-Control-Allow-Origin',
      value: process.env.DOMAIN || '*',
     },
     {
      key: 'Access-Control-Allow-Methods',
      value: 'GET, OPTIONS',
     },
     {
      key: 'Access-Control-Allow-Headers',
      value: 'Content-Type, Authorization',
     },
     {
      key: 'Content-Security-Policy',
      value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
     },
     {
      key: 'X-Frame-Options',
      value: 'DENY',
     },
     {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
     },
     {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
     },
     {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
     },
     {
      key: 'Cache-Control',
      value: 'public, max-age=0, must-revalidate',
     },
     {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
     },
     {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
     },
    ],
   },
  ]
 },
}

export default nextConfig
