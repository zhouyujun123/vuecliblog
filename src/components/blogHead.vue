<template>
  <div class="arc-head">
    <div class="blogHead">
      <p class="fl">一个博客</p>
      <ul class="fl">
        <router-link to="/">
          <li class="fl">
            <i class="zyjFamily">&#xe74b;</i>首页
          </li>
        </router-link>
        <li class="fl">
          <i class="zyjFamily">&#xe601;</i>APP
        </li>
      </ul>
      <div class="search fl">
        <div class="search_bgc">
          <input type="text" placeholder="搜索" v-model="searchAll" @keyup.enter="searchJump" />
          <button @click.enter="searchJump">
            <i class="zyjFamily">&#xe65b;</i>
          </button>
        </div>
      </div>
      <div class="my fr" v-if="showMe">
        <img :src="imgSrc" />
        <div class="drop_downBox">
          <router-link :to="{ name: 'blogMine' }">
            <div class="options">
              <i class="zyjFamily">&#xe6ef;</i>
              <span>我的主页</span>
            </div>
          </router-link>
          <router-link :to="{ name: 'blogWrite' }">
            <div class="options">
              <i class="zyjFamily">&#xe60f;</i>
              <span>写文章</span>
            </div>
          </router-link>
          <router-link :to="{ name: 'mineSetting' }">
            <div class="options">
              <i class="zyjFamily">&#xe611;</i>
              <span>账号设置</span>
            </div>
          </router-link>
          <div class="options" @click="outThisUser()">
            <i class="zyjFamily">&#xe744;</i>
            <span>退出该账号</span>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'loginRegister' }" v-else>
        <button class="fr loginBth">登录 / 注册</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { get } from "@/axios/axios.js";
export default {
  inject: ["reload"],
  name: "blogHead",
  data() {
    return {
      searchAll: "",
      showMe: false,
      imgSrc: "http://115.28.105.227:8888/blog/d67874a2e425bf6c330898f9db68812d"
    };
  },
  props: {
    pullSearchKey: String
  },
  methods: {
    searchJump() {
      this.$router.push({
        name: "blogSearch",
        query: {
          searchKey: this.searchAll
        }
      });
      this.reload();
    },
    show() {
      if (this.$store.state.Authorization == "") {
        this.showMe = false;
      } else {
        this.showMe = true;
      }
    },
    outThisUser() {
      localStorage.removeItem("Authorization");
      localStorage.removeItem("UserId");
      this.$router.push("/loginRegister");
    },
    // 读取图片
    readHeadImg() {
      let userId = this.$store.state.UserId;
      let data = {
        id: userId
      };
      get("/getUserInfo/" + userId, data)
        .then(resp => {
          console.log(resp);
          this.imgSrc = resp.data.data.headImg;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.readHeadImg();
    this.show();
    this.searchAll = this.pullSearchKey;
  }
};
</script>

<style scoped lang="stylus">
.arc-head {
  border-bottom: 1px solid #eee;
  // min-width: 1400px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  overflow: visible;
  z-index: 10000;
}

.blogHead {
  height: 56px;
  background-color: #fff;
  // border-bottom: 1px solid #eee;
  width: 1400px;
  margin: 0 auto;

  p {
    font-size: 24px;
    color: #666;
    padding: 12px 0;
    letter-spacing: 8px;
  }

  ul {
    overflow: hidden;
    margin-left: 150px;

    li {
      font-size: 18px;
      color: #666;
      height: 56px;
      width: 100px;
      line-height: 56px;
      text-align: center;

      &:hover {
        background-color: #f5f5f5;
      }

      &:active {
        color: #ea6f5a;
      }

      i {
        margin-right: 8px;
        font-size: 20px;
      }
    }
  }

  .searchClass {
    width: 100px;
    height: 34px;
    margin: 11px 0 11px 5px;
  }

  .my {
    width: 80px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    position: relative;

    .touxiang {
      font-size: 50px;
    }

    &:hover {
      background-color: #f0f0f0;
    }

    &:hover .drop_downBox {
      display: block;
    }

    .drop_downBox {
      display: none;
      z-index: 999;
      position: absolute;
      right: 0;
      top: 57px;
      width: 158px;
      padding: 5px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

      .options {
        height: 50px;
        font-size: 14px;
        color: #969696;
        text-align: left;
        line-height: 50px;
        padding: 0 10px;
        cursor: pointer;

        &:hover {
          background-color: #f0f0f0;
        }

        i {
          font-size: 20px;
          color: #ea6f5a;
        }

        span {
          margin-left: 15px;
        }
      }
    }

    img {
      width: 40px;
      height: 40px;
      margin: 7px 0;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }

  .search {
    margin: 8px 0;
    box-sizing: border-box;

    .search_bgc {
      background-color: #eee;
      margin-left: 10px;
      border-radius: 20px;

      input {
        width: 220px;
        height: 40px;
        background-color: #eee;
        vertical-align: middle;
        border-radius: 20px 0 0 20px;
        padding-left: 20px;
        box-sizing: border-box;
      }

      button {
        height: 40px;
        width: 40px;
        background-color: #eee;
        vertical-align: middle;
        border-radius: 0 20px 20px 0;
      }

      select {
        height: 32px;
        width: 80px;
        vertical-align: middle;
        color: #3194d0;
        border: 1px solid #3194d0;
        border-radius: 5px;
      }

      option {
        height: 34px;
      }
    }
  }

  .loginBth {
    width: 100px;
    height: 38px;
    margin: 9px 5px;
    border-radius: 20px;
    background-color: #ea6f5a;
    color: #fff;
  }
}
</style>
