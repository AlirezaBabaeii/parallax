/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

// module.exports = {
//   module: {
//     rules: [
//       {
//         type: 'javascript/auto',
//         test: /\.json$/,
//         include: /(lottie)/,
//         loader: 'lottie-web-webpack-loader',
//         options: {
//           assets: {
//             scale: 0.5 // proportional resizing multiplier
//           }
//         }
//       }
//     ]
//   }
// }