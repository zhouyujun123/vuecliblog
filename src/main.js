import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 字符
import "./assets/icon/iconfont.css";
// 公共样式文件
import "../public/styles/public.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
