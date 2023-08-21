/* eslint-disable @typescript-eslint/no-var-requires */

const isProd = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  experimental: {
    newNextLinkBehavior: true,
  },
});

module.exports = nextConfig;
