/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: 'POSTGRES_URL="postgres://default:6KcvahbfM4Ro@ep-round-disk-14592838-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb"',
  },
};

module.exports = nextConfig;
