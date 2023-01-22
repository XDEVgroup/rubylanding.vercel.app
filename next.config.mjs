// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.imgur.com", "images.ctfassets.net", "images.pexels.com", "s3.us-west-2.amazonaws.com", "cdn.leonardo.ai"]
  },
  i18n: {
    locales: ["en", 'nl-NL'],
    defaultLocale: 'nl-NL',
  },
};
export default config;
