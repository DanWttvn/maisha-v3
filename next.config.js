module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // We don't lint during the build because GitHub actions performs its own lint step
    ignoreDuringBuilds: true,
  },
  env: {
    MAILCHIMP_SUBSCRIBE: process.env['MAILCHIMP_SUBSCRIBE'],
    SENDINBLUE_SUBSCRIBE: process.env['SENDINBLUE_SUBSCRIBE'],
    SENDINBLUE_JOIN: process.env['SENDINBLUE_JOIN'],
    GA_MEASUREMENT_ID: process.env['GA_MEASUREMENT_ID'],
  },
}
