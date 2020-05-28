/*引入Vue框架*/
import Vue from "vue";
import axiox from "axios";
import qs from "qs";
Vue.prototype.$qs = qs;
// Vue.prototype.$axios = axios;

// withCredentials: false

const instance = axiox.create({
  baseURL: "http://localhost:8092", //baseURL会在发送请求的时候拼接在url参数的前面
  // timeout: 5000,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    "token": localStorage.getItem("Authorization")
  }
});

//请求拦截
//所有的网络请求都会先走这个方法
// 添加请求拦截器,所有的网络请求都会先走这个方法，我们可以在它里面为请求添加一些自定义的内容
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log("全局请求拦截");
    if (config.method === "post") {
      if (typeof config.data == "object") {
        config.data = qs.stringify(config.data);
      }
    }
    let token = localStorage.getItem("Authorization");
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
//此处可以根据服务器的返回状态码做响应的处理
//404 404 500
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    console.log("全局响应拦截");
    // console.log(response);
    // console.groupEnd()
    // if (response.status === 200) {}
    // 3003 说明登录身份出现异常，跳转到登录页面
    if (response.data != null && response.data.resultCode == 3003) {
      localStorage.clear();
      location.href = window.location.origin + "/loginRegister";
    }
    return response;
  },
  error => {
    // 对响应错误做点什么
    if (error && error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("Authorization");
        location.href = window.location.origin + "/loginRegister";
        // Message.error({ message: "token失效" });
      }
    }
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return instance.get(url, {
    params
  });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function postImg(url, data, header) {
  return instance.post(url, data, header);
}

export function del(url) {
  return instance.delete(url);
}

export function put(url, data) {
  return instance.put(url, data);
}
