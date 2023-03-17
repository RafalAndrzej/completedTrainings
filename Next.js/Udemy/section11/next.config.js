/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
   if (phase === PHASE_DEVELOPMENT_SERVER) {
      return {
         reactStrictMode: true,
         swcMinify: true,
         env: {
            mongodb_username: 'Rafal',
            mongodb_password: 'e69mSZwo1YDxoW5n',
            mongodb_clastername: 'cluster0',
            mongodb_database: 'my-site-dev',
         },
      };
   }

   return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
         mongodb_username: 'Rafal',
         mongodb_password: 'e69mSZwo1YDxoW5n',
         mongodb_clastername: 'cluster0',
         mongodb_database: 'my-site',
      },
   };
};

module.exports = nextConfig;
