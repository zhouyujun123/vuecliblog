import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem("Authorization")
      ? localStorage.getItem("Authorization")
      : "",
    UserId: localStorage.getItem("UserId") ? localStorage.getItem("UserId") : ""
  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem("Authorization", user.Authorization);
    },
    // 修改userId，并将userId存入localStorage
    changeUserId(state, userId) {
      state.UserId = userId.UserId;
      localStorage.setItem("UserId", userId.UserId);
    }
  },
  actions: {},
  modules: {}
});

export default store;
