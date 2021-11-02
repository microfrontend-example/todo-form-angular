const singleSpaAngularWebpack =
  require("single-spa-angular/lib/webpack").default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};

// module.exports = (config, options) => {
//   const defaultConfig = singleSpaAngularWebpack(config, options);
//   defaultConfig.entry.main = [...new Set(defaultConfig.entry.main)];
//   return defaultConfig;
// };
