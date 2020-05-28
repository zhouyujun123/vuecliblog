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
  },
  // outputDir: "dist", //build输出目录
  // assetsDir: "assets", //静态资源目录（js, css, img）
  // lintOnSave: false, //是否开启eslint
  devServer: {
    // open: true, //是否自动弹出浏览器页面
    host: "localhost",
    port: "8080",
    // https: false, //是否使用https协议
    hotOnly: true, //是否开启热更新
    proxy: {
      "/api": {
        target: "http://localhost:8092", //API服务器的地址
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
