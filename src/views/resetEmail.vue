<template>
  <div class="reset">
    <div class="resetMain">
      <div class="reset_left fl">
        <div class="inputArea">
          <i class="zyjFamily">&#xe678;</i>
          <input type="text" placeholder="邮箱" />
        </div>
        <div class="inputArea YZM">
          <i class="zyjFamily">&#xe63f;</i>
          <input type="text" placeholder="vercode" />
          <button>获取验证码</button>
        </div>
        <div class="inputArea">
          <i class="zyjFamily">&#xe66c;</i>
          <input type="text" placeholder="password" />
        </div>
        <div class="inputArea">
          <i class="zyjFamily">&#xe66c;</i>
          <input type="text" placeholder="enter the password again" />
        </div>
        <button class="resetPassword">重置密码</button>
        <p class="backLoginRegister">
          <i class="layui-icon layui-icon-return"></i>
          <router-link to="loginRegister">返回登录注册</router-link>
        </p>
      </div>
      <div class="reset_right fl">
        <p>
          <i>Here you can solve the problem</i>
        </p>
        <p>
          <i>Or consult customer service</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resetEmail"
};
</script>

<style scoped>
.reset {
  background-color: #f5f5f5;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.reset .resetMain {
  width: 720px;
  height: 594px;
  margin: 60px auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}
/*left*/
.reset .resetMain .reset_left {
  width: 360px;
  height: 594px;
  padding-top: 100px;
  box-sizing: border-box;
}
.reset .resetMain .reset_left .inputArea {
  width: 250px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #c8c8c8;
  border-radius: 40px;
  padding: 0 20px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  margin-left: 34px;
}
.reset .resetMain .reset_left .inputArea input {
  width: 200px;
  height: 40px;
  font-size: 16px;
  color: #666;
  background-color: #f5f5f5;
}
.reset .resetMain .reset_left .YZM {
  padding-right: 0;
  width: 270px;
}
.reset .resetMain .reset_left .YZM input {
  width: 130px;
}
.reset .resetMain .reset_left .YZM button {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #3194d0;
  color: #fff;
}
.reset .resetMain .reset_left .inputArea i {
  font-size: 18px;
  font-weight: 700;
  color: #666;
  margin-right: 10px;
}
.reset .resetMain .reset_left .resetPassword {
  margin: 0 34px;
  width: 292px;
  height: 50px;
  border-radius: 30px;
  background-color: #3194d0;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
.reset .resetMain .reset_left .backLoginRegister {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-top: 50px;
  cursor: pointer;
}
/*right*/
.reset .resetMain .reset_right {
  width: 360px;
  height: 594px;
  background-image: url("../../public/images/reset.jpg");
  background-size: 100%100%;
  border-radius: 0 20px 20px 0;
}
.reset .resetMain .reset_right p:nth-child(1) {
  font-size: 14px;
  color: #666666;
  text-align: center;
  margin-top: 50px;
}
.reset .resetMain .reset_right p:nth-child(2) {
  font-size: 12px;
  color: #666666;
  text-align: center;
  margin-top: 20px;
}
</style>
