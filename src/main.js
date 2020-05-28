import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 字符
import "./assets/icon/iconfont.css";
// 公共样式文件
import "../public/styles/public.css";
// import "./axios/axios.js";
// axios全局引入
// import { get, post } from "./axios/axios.js";
// import axios from "axios";
// Vue.prototype.$axios = axios;

// qs全局引入
// import qs from "qs";
// Vue.prototype.$qs = qs;
// 全局引入elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 格式化时间 2000-00-00
Vue.filter("dateFormat", function (dateStr) {
  var dt = new Date(dateStr);
  var y = dt.getFullYear();
  // ES6字符串新方法padStart在开始位置补位，padEnd在结束位置补位
  var m = (dt.getMonth() + 1).toString().padStart(2, "0");
  var d = dt
    .getDate()
    .toString()
    .padStart(2, "0");
  return `${y}-${m}-${d}`;
});
// 格式化时间 2000-00-00 00:00:00
Vue.filter("dateFormatMore", function (dateStr, pattern = "") {
  var dt = new Date(dateStr);
  var y = dt.getFullYear();
  // ES6字符串新方法padStart在开始位置补位，padEnd在结束位置补位
  var m = (dt.getMonth() + 1).toString().padStart(2, "0");
  var d = dt
    .getDate()
    .toString()
    .padStart(2, "0");

  if (pattern.toLowerCase() === "yyyy-mm-dd") {
    return `${y}-${m}-${d}`;
  } else {
    var hh = dt
      .getHours()
      .toString()
      .padStart(2, "0");
    var mm = dt
      .getMinutes()
      .toString()
      .padStart(2, "0");
    var ss = dt
      .getSeconds()
      .toString()
      .padStart(2, "0");

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }
});
// 过滤只剩下汉字
// Vue.filter("charactersFilter", function (counent) {
//   var reg = /^[\u0391-\uFFE5A-Za-z]+$/;
//   return counent.replace(reg);
// });
