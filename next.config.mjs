import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      serverActionsTimeout: 60, // in seconds
    },
  },
};

export default withNextIntl(nextConfig);
