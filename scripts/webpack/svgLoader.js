module.exports = function svgLoader(config) {
  config.module.rules.push({
    test: /\.svg$/,
    loader: '@svgr/webpack',
    options: {
      svgoConfig: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ 'aria-hidden': 'true' }, { focusable: 'false' }],
            },
          },
        ],
      },
    },
  });
  return config;
};
