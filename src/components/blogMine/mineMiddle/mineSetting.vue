<template>
  <div class="mineSetting">
    <div class="top">修改密码</div>
    <dl>
      <dt>原密码：</dt>
      <dd>
        <el-input v-model="passWord" placeholder="请输入内容" type="password"></el-input>
      </dd>
    </dl>
    <dl>
      <dt>新密码：</dt>
      <dd>
        <el-input v-model="passWordNow" placeholder="请输入内容" type="password"></el-input>
      </dd>
    </dl>
    <dl>
      <dt>再次输入新密码：</dt>
      <dd>
        <el-input v-model="morePassWordNow" placeholder="请输入内容" type="password"></el-input>
      </dd>
    </dl>
    <button class="saveMassage" @click="pushNewPSW()">提交</button>
  </div>
</template>
<script>
import { post } from "@/axios/axios.js";
export default {
  name: "mineSetting",
  data() {
    return {
      passWord: "",
      passWordNow: "",
      morePassWordNow: ""
    };
  },
  methods: {
    pushNewPSW() {
      // let data = {
      //   id: this.$store.state.UserId
      // };
      // get("/getUserInfo" + this.$store.state.UserId, data)
      //   .then(resp => {
      //     console.log(resp);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      if (this.passWord == "") {
        alert("原来的密码不匹配！");
      } else if (this.passWordNow == "") {
        alert("请输入新密码！");
      } else if (this.passWordNow !== this.morePassWordNow) {
        alert("两次输入的新密码不匹配！");
      } else if (this.passWordNow == this.morePassWordNow) {
        alert("修改密码成功！");
        let data = {
          userPsw: this.passWordNow,
          id: this.$store.state.UserId
        };
        post("/updateUserInfo", data)
          .then(resp => {
            console.log(resp);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.mineSetting {
  .top {
    padding: 10px;
    color: #999;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    margin-bottom: 40px;
  }

  dl {
    display: flex;

    dt {
      color: #666;
      font-size: 14px;
      text-align: right;
      width: 200px;
      line-height: 25px;
      height: 25px;
    }

    dd {
      input {
        border: 1px solid #b4bccc;
        height: 28px;
        padding: 5px;
      }

      .inputImg {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }

      .noimg {
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid #f5f5f5;
        border-radius: 50%;
        padding: 5px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .saveMassage {
    display: block;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    color: #fff;
    background-color: #ea6f5a;
    // margin-left: 50%;
    // margin-right: -25%;
    margin: 50px auto;
  }
}
</style>
