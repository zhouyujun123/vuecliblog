<template>
  <div class="blog-write-left">
    <div class="write-left">
      <div class="whoWrite">
        <img :src="imgSrc" />
        <router-link :to="{ name: 'blogMine' }">
          <span>个人中心</span>
        </router-link>
      </div>
      <div class="options">
        <router-link
          to="/blogWrite/works"
          tag="div"
          :class="{ activeOption: $route.meta.active === '/blogWrite/works' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe615;</i>我的文章
          </div>
        </router-link>
        <router-link
          to="/blogWrite/collectedWorks"
          tag="div"
          :class="{
            activeOption: $route.meta.active === '/blogWrite/collectedWorks'
          }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe610;</i>我的文集
          </div>
        </router-link>
        <div class="option">
          <i class="zyjFamily">&#xe616;</i>我的草稿
        </div>
        <div class="option">
          <i class="zyjFamily">&#xe614;</i>垃圾箱
        </div>
      </div>
      <router-link :to="{ name: 'blogHome' }">
        <button>返回首页</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { get } from "@/axios/axios.js";
export default {
  name: "writeLeft",
  data() {
    return {
      imgSrc: "http://115.28.105.227:8888/blog/d67874a2e425bf6c330898f9db68812d"
    };
  },
  methods: {
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
  }
};
</script>

<style scoped lang="stylus">
.write-left {
  width: 240px;
  box-sizing: border-box;
  background-color: #404040;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  flex: 0 0 240px;
  z-index: 1040;

  .whoWrite {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #969696;
    padding-bottom: 20px;
    margin: 10px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    span {
      color: #eeeeee;
      font-size: 12px;
      line-height: 40px;
    }
  }

  .options {
    margin-top: 30px;

    .option {
      width: 100%;
      height: 45px;
      line-height: 45px;
      color: #969696;
      font-size: 14px;
      padding: 0px 10px;
      box-sizing: border-box;
      cursor: pointer;

      i {
        margin-right: 20px;
      }
    }

    .activeOption {
      border-left: 3px solid #ea6f5a;
      background-color: DimGray;

      .option {
        color: #ea6f5a;
      }
    }
  }

  button {
    position: fixed;
    bottom: 20px;
    left: 10px;
    width: 220px;
    height: 40px;
    background-color: #404040;
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
    font-size: 14px;
    border-radius: 20px;
  }
}
</style>