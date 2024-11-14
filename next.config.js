const path = require('path')

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode:true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized:true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
  assetPrefix: isProd ? '/josphatemuchiri' : '',
  basePath: isProd ? '/josphatemuchiri' : '',
  output:'export'
}

module.exports = nextConfig;

 
// module.exports = {
  
//   images: {
   
//   },
// }
