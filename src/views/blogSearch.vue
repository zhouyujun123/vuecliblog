<template>
  <div>
    <div style="border-bottom: 1px solid #eee; min-width:1400px;">
      <blog-Head :pullSearchKey="pullSearchKey"></blog-Head>
    </div>
    <div class="searchPage">
      <div class="counter">
        <div class="searchClass">
          <div class="border_r">
            <div
              :class="['btn', { activeSearch: changeActive == 1 }]"
              @click.prevent="comName = 'searchUsers'"
              @click="activeSearch(1)"
            >
              <i class="zyjFamily">&#xe6ef;</i>
              <span>用户</span>
            </div>
            <div
              :class="['btn', { activeSearch: changeActive == 2 }]"
              @click.prevent="comName = 'searchWorks'"
              @click="activeSearch(2)"
            >
              <i class="zyjFamily">&#xe615;</i>
              <span>文章</span>
            </div>
            <div
              :class="['btn', { activeSearch: changeActive == 3 }]"
              @click.prevent="comName = 'searchCorpus'"
              @click="activeSearch(3)"
            >
              <i class="zyjFamily">&#xe610;</i>
              <span>文集</span>
            </div>
          </div>
        </div>
        <div class="searchResults">
          <component :is="comName" :pullSearchKey="pullSearchKey"></component>
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
import searchUsers from "@/components/blogSearch/searchUsers.vue";
import searchWorks from "@/components/blogSearch/searchWorks.vue";
import searchCorpus from "@/components/blogSearch/searchCorpus.vue";
export default {
  name: "blogSearch",
  data() {
    return {
      comName: "searchUsers",
      changeActive: 1,
      pullSearchKey: this.$route.query.searchKey
    };
  },
  components: {
    blogHead,
    blogFoot,
    searchUsers,
    searchWorks,
    searchCorpus
  },
  methods: {
    activeSearch(index) {
      this.changeActive = index;
    }
  },
  mounted() {
    return this.$route.query.searchKey;
  }
};
</script>
<style scoped lang="stylus">
.searchPage {
  padding-top: 87px;

  .counter {
    display: flex;
    justify-content: space-between;

    .searchClass {
      width: 200px;

      .border_r {
        border-right: 2px solid #eee;
        padding-right: 20px;
      }

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
