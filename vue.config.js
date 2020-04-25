// Vue.config.js 配置选项
const webpack = require("webpack");

module.exports = {
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }
    ]);
  }
};
// module.exports = {
//   // publicPath: "./",
//   // assetsDir: ".",
//   // filenameHashing: false,
//   // output: {
//   //   publicPath: "/"
//   // }
// };
