/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    connect-src 'self' __API__;
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
 transpilePackages: ['lucide-react'],
 env: {
  NEXT_PUBLIC_BASE: process.env.NEXT_PUBLIC_BASE,
  NEXT_PUBLIC_TIME_GAP: process.env.NEXT_PUBLIC_TIME_GAP,
  BASE: process.env.NEXT_PUBLIC_BASE,
  STAG_SERVER: process.env.STAG_SERVE,
  API: process.env.API,
 },
 async headers() {
  return [
   {
    source: '/:path*',
    headers: [
     {
      key: 'Access-Control-Allow-Origin',
      value: process.env.NEXT_PUBLIC_BASE || '*',
     },
     {
      key: 'Access-Control-Allow-Methods',
      value: 'GET, POST, PUT, DELETE, OPTIONS',
     },
     {
      key: 'Access-Control-Allow-Headers',
      value: 'Content-Type, Authorization',
     },
     {
      key: 'Content-Security-Policy',
      value: cspHeader.replace(/\n/g, ''),
     },
     {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
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
    ],
   },
  ]
 },
}

export default nextConfig
