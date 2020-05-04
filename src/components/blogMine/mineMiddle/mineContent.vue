<template>
  <div class="mineContent">
    <div class="counter">
      <div class="left-directory">
        <router-link
          to="/blogMine/mineMassage"
          tag="div"
          :class="{ 'activeMine': $route.meta.active === '/blogMine/mineMassage' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe620;</i>
            <span>个人信息</span>
          </div>
        </router-link>
        <router-link
          to="/blogMine/mineAttention"
          tag="div"
          :class="{ 'activeMine': $route.meta.active === '/blogMine/mineAttention' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe61e;</i>
            <span>我的关注</span>
          </div>
        </router-link>
        <router-link
          to="/blogMine/mineLike"
          tag="div"
          :class="{ 'activeMine': $route.meta.active === '/blogMine/mineLike' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe612;</i>
            <span>我的喜欢</span>
          </div>
        </router-link>
        <router-link
          to="/blogMine/mineArtical"
          tag="div"
          :class="{ 'activeMine': $route.meta.active === '/blogMine/mineArtical' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe615;</i>
            <span>我的文章</span>
          </div>
        </router-link>
        <router-link
          to="/blogMine/mineCorpus"
          tag="div"
          :class="{ 'activeMine': $route.meta.active === '/blogMine/mineCorpus' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe62d;</i>
            <span>我的文集</span>
          </div>
        </router-link>
        <router-link
          to="/blogMine/mineSetting"
          tag="div"
          :class="{ 'activeMine': $route.meta.active === '/blogMine/mineSetting' }"
        >
          <div class="option">
            <i class="zyjFamily">&#xe611;</i>
            <span>账户设置</span>
          </div>
        </router-link>
      </div>
      <div class="right-directory">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mineContent",
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
.mineContent {
  .counter {
    display: flex;
    justify-content: space-between;

    .left-directory {
      width: 230px;
      border-right: 1px solid #eee;
      padding-right: 20px;

      .option {
        // background-color: rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #999;
        font-size: 16px;
        margin-bottom: 10px;
        cursor: pointer;

        i {
          margin-right: 10px;
          color: #999;
          font-size: 16px;
          font-weight: bold;
        }
      }

      .activeMine {
        span {
          color: pink;
        }

        i {
          color: pink;
        }
      }
    }

    .right-directory {
      width: 650px;
      padding: 10px;
      min-height: 600px;
    }
  }
}
</style>
