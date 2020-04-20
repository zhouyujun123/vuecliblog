<template>
  <!-- <div> -->
  <div class="blog-write-left">
    <div class="write-left">
      <div class="whoWrite">
        <img src="../../assets/images/headPhoto2.png" />
        <span>个人中心</span>
      </div>
      <div class="options">
        <router-link
          to="/blogWrite/works"
          tag="div"
          :class="{ 'activeOption': $route.meta.active === '/blogWrite/works' }"
        >
          <div class="option"><i class="zyjFamily">&#xe615;</i>我的文章</div>
        </router-link>
        <router-link
          to="/blogWrite/collectedWorks"
          tag="div"
          :class="{
            activeOption: $route.meta.active === '/blogWrite/collectedWorks'
          }"
        >
          <div class="option"><i class="zyjFamily">&#xe610;</i>我的文集</div>
        </router-link>
      </div>
      <button>返回首页</button>
    </div>
  </div>
  <!-- <transition mode="out-in">
      <router-view></router-view>
  </transition>-->
  <!-- </div> -->
</template>

<script>
export default {
  name: "writeLeft",
  data() {
    return {};
  },
  methods: {}
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