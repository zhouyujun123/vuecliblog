<template>
  <div>
    <div style="border-bottom: 1px solid #eee; min-width:1400px;">
      <blog-Head></blog-Head>
    </div>
    <div class="searchPage">
      <div class="counter">
        <div class="searchClass">
          <router-link
            to="/blogSearch/searchUsers"
            tag="div"
            :class="{ 'activeSearch': $route.meta.active === '/blogSearch/searchUsers' }"
          >
            <div class="btn">
              <i class="zyjFamily">&#xe6ef;</i>
              <span>用户</span>
            </div>
          </router-link>
          <router-link
            to="/blogSearch/searchWorks"
            tag="div"
            :class="{ 'activeSearch': $route.meta.active === '/blogSearch/searchWorks' }"
          >
            <div class="btn">
              <i class="zyjFamily">&#xe615;</i>
              <span>文章</span>
            </div>
          </router-link>
          <router-link
            to="/blogSearch/searchCorpus"
            tag="div"
            :class="{ 'activeSearch': $route.meta.active === '/blogSearch/searchCorpus' }"
          >
            <div class="btn">
              <i class="zyjFamily">&#xe610;</i>
              <span>文集</span>
            </div>
          </router-link>
        </div>
        <div class="searchResults">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <div style="border-top: 1px solid #eee; min-width:1400px;">
      <blog-foot></blog-foot>
    </div>
  </div>
</template>
<script>
import blogHead from "@/components/blogHead.vue";
import blogFoot from "@/components/blogFoot.vue";
export default {
  name: "blogSearch",
  components: {
    blogHead,
    blogFoot
  }
};
</script>
<style scoped lang="stylus">
.searchPage {
  margin-top: 30px;

  .counter {
    display: flex;
    justify-content: space-between;

    .searchClass {
      width: 200px;
      padding-right 20px
      border-right: 2px solid #eee;

      .btn {
        // text-align: center;
        padding-left: 20px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: #666;
        font-weight: bold;
        margin-bottom: 5px;

        i {
          color: #ea6f5a;
          margin-right: 20px;
          font-size: 18px;
        }
      }

      .activeSearch {
        background-color: #ea6f5a;
        border-radius: 20px;

        span {
          color: #ff;
        }

        i {
          color: #fff;
        }
      }
    }

    .searchResults {
      width: 680px;
    }
  }
}
</style>
