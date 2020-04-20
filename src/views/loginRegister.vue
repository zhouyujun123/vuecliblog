<template>
  <div class="LRbgc">
    <div class="LRindex">
      <div class="LR_left fl">
        <p class="LRcont">我 的 博 客</p>
        <p class="LRen">MY BLOG</p>
        <div class="bottomBtn">
          <div class="showDown fl">
            <p>登录遇到问题</p>
            <div class="down">
              <div class="option">
                <router-link to="reset">手机号重置密码</router-link>
              </div>
              <div class="option">
                <router-link to="resetEmail">邮箱重置密码</router-link>
              </div>
            </div>
          </div>
          <router-link to="/">
            <span class="fr">返回首页浏览</span>
          </router-link>
        </div>
        <p class="LRenbo">
          <i>welcome to our team</i>
        </p>
      </div>
      <div class="LR_right fl">
        <div class="login" v-if="!isReg">
          <div class="inputArea">
            <i class="zyjFamily">&#xe68f;</i>
            <input type="text" placeholder="username" v-model="name" />
          </div>
          <div class="inputArea">
            <i class="zyjFamily">&#xe66c;</i>
            <input type="password" placeholder="password" v-model="password" />
          </div>
          <div class="joinFoot">
            <button @click="logth()">登录</button>
            <button @click="regth()">去注册</button>
          </div>
        </div>
        <div class="register" v-else>
          <div class="inputArea">
            <i class="zyjFamily">&#xe6ef;</i>
            <input type="text" placeholder="username" v-model="name" />
          </div>
          <div class="inputArea">
            <i class="zyjFamily">&#xe68f;</i>
            <input type="text" placeholder="cellphone" v-model="cellphone" />
          </div>
          <div class="inputArea">
            <i class="zyjFamily">&#xe66c;</i>
            <input type="password" placeholder="password" v-model="password" />
          </div>
          <div class="joinFoot">
            <button @click="registerFor()">注册</button>
            <p class="fr" @click="gotoLogin()">login in</p>
          </div>
        </div>
        <div class="loginWay">
          <p class="another">其他方式登录</p>
          <i class="layui-icon layui-icon-login-wechat"></i>
          <i class="layui-icon layui-icon-login-qq"></i>
          <i class="layui-icon layui-icon-login-weibo"></i>
        </div>
        <p class="joinTop">
          <i>To join the agreement</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginRegister",
  data() {
    return {
      isReg: false,
      name: "",
      password: "",
      cellphone: ""
    };
  },
  methods: {
    logth() {
      //验证姓名和密码是否与locastorage一致
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.password
      ) {
        //清空输入框
        this.name = "";
        this.password = "";
        this.$router.push("/");
      } else {
        alert("用户名或密码不正确");
      }
    },
    regth() {
      this.isReg = true;
    },
    registerFor() {
      localStorage.setItem("name", this.name);
      localStorage.setItem("cellphone", this.cellphone);
      localStorage.setItem("password", this.password);
      //清空输入框
      this.name = "";
      this.cellphone = "";
      this.password = "";
      this.isReg = false;
    },
    gotoLogin() {
      this.isReg = false;
    }
  }
};
</script>

<style scoped>
.LRbgc {
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.LRbgc .LRindex {
  width: 720px;
  height: 594px;
  margin: 60px auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}
/*left*/
.LRbgc .LRindex .LR_left {
  width: 360px;
  height: 594px;
  background-image: url("../../public/images/3.png");
  background-size: 100%100%;
  border-radius: 20px 0 0 20px;
}
.LRbgc .LRindex .LR_left .LRcont {
  font-size: 28px;
  text-align: center;
  color: #666;
  margin-top: 80px;
}
.LRbgc .LRindex .LR_left .LRen {
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-top: 20px;
}
.LRbgc .LRindex .LR_left .LRenbo {
  font-size: 14px;
  text-align: center;
  color: #ccc;
  margin-top: 10px;
}
.LRbgc .LRindex .LR_left .bottomBtn {
  font-size: 14px;
  color: #666;
  padding: 0 85px;
  margin-top: 360px;
  cursor: pointer;
}
.LRbgc .LRindex .LR_left .bottomBtn .showDown {
  position: relative;
}
.LRbgc .LRindex .LR_left .bottomBtn .showDown:hover .down {
  display: block;
}
.LRbgc .LRindex .LR_left .bottomBtn .down {
  display: none;
  position: absolute;
  top: -73px;
  left: -35px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background: #f5f5f5;
  padding: 5px 0;
}
.LRbgc .LRindex .LR_left .bottomBtn .down .option {
  width: 110px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  padding-left: 10px;
}
.LRbgc .LRindex .LR_left .bottomBtn .down .option:hover {
  background: #e9e7e7;
}
/*right*/
.LRbgc .LRindex .LR_right {
  width: 360px;
  padding-top: 140px;
}
.LRbgc .LRindex .LR_right .inputArea {
  width: 250px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c8c8c8;
  border-radius: 40px;
  padding: 0 20px;
  background-color: #f5f5f5;
  margin-bottom: 50px;
  margin-left: 34px;
}
.LRbgc .LRindex .LR_right .register .inputArea {
  margin-bottom: 20px;
}
.LRbgc .LRindex .LR_right input {
  width: 200px;
  height: 40px;
  font-size: 16px;
  color: #666;
  background-color: #f5f5f5;
}
.LRbgc .LRindex .LR_right .inputArea i {
  font-size: 18px;
  font-weight: 700;
  color: #666;
  margin-right: 10px;
}
.LRbgc .LRindex .LR_right .login .joinFoot button {
  width: 131px;
  height: 46px;
  border-radius: 40px;
  font-size: 18px;
  background-color: #ea6f5a;
  color: #fff;
  border: 2px solid #ea6f5a;
}
.LRbgc .LRindex .LR_right .register .joinFoot button {
  width: 292px;
  height: 46px;
  border-radius: 40px;
  font-size: 18px;
  background-color: #42c02e;
  color: #fff;
  border: 2px solid #42c02e;
  /* margin-left: 34px; */
}
.LRbgc .LRindex .LR_right .register .joinFoot p {
  /*text-align: right;*/
  margin-top: 5px;
  font-size: 14px;
  color: #666;
  padding-right: 40px;
  cursor: pointer;
}
/* .LRbgc .LRindex .LR_right .login .joinFoot button:nth-child(1) {
  margin-left: 34px;
} */
.LRbgc .LRindex .LR_right .login .joinFoot button:nth-child(2) {
  margin-left: 25px;
  background-color: #fff;
  color: #ea6f5a;
}
.LRbgc .LRindex .LR_right .loginWay {
  margin-top: 50px;
  text-align: center;
}
.LRbgc .LRindex .LR_right .loginWay img {
  width: 50px;
  height: 50px;
}
.LRbgc .LRindex .LR_right .loginWay .another {
  font-size: 12px;
  color: #b5b5b5;
  position: relative;
  text-align: center;
  margin-bottom: 20px;
}
.LRbgc .LRindex .LR_right .loginWay .another:before {
  content: "";
  border-top: 1px solid #b5b5b5;
  display: block;
  position: absolute;
  width: 80px;
  top: 7px;
  left: 34px;
}
.LRbgc .LRindex .LR_right .loginWay .another:after {
  content: "";
  border-top: 1px solid #b5b5b5;
  display: block;
  position: absolute;
  width: 80px;
  top: 7px;
  right: 34px;
}
.LRbgc .LRindex .LR_right .joinTop {
  font-size: 14px;
  text-align: center;
  color: #ccc;
  margin-top: 18px;
}
.layui-icon-login-wechat:before,
.layui-icon-login-qq:before,
.layui-icon-login-weibo:before {
  font-size: 32px;
  color: #666666;
  margin: 0 20px;
}
</style>
