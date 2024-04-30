module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // We don't lint during the build because GitHub actions performs its own lint step
    ignoreDuringBuilds: true,
  },
  env: {
    BREVO_API_KEY: process.env['BREVO_API_KEY'],
    BLOGGER_API_KEY: process.env['BLOGGER_API_KEY'],
    BLOGGER_BLOG_ID: process.env['BLOGGER_BLOG_ID'],
    GA_MEASUREMENT_ID: process.env['GA_MEASUREMENT_ID'],
  },
}
