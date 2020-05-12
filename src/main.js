import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 字符
import "./assets/icon/iconfont.css";
// 公共样式文件
import "../public/styles/public.css";
// axios全局引入
import axios from "axios";
Vue.prototype.$axios = axios;
// 全局引入elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// // 引入makdown编辑器
// import mavonEditor from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// Vue.use(mavonEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
