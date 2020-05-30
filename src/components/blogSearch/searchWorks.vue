<template>
  <div class="searchWorks">
    <div
      class="article"
      v-for="(item, index) in articleList"
      :key="index"
      @click="handleClick(item.id)"
    >
      <div class="top">
        <!-- <img :src="item.imgSrc" /> -->
        <span>{{ item.aothor }}</span>
        <span>{{ item.articleTime }}</span>
      </div>
      <p class="articleName">{{ item.articleName }}</p>
      <p class="articleCon">{{ item.articleCon }}</p>
      <div class="foot">
        <div class="cell">
          <i class="zyjFamily">&#xe60c;</i>
          <span>{{ item.good }}</span>
        </div>
        <div class="cell">
          <i class="zyjFamily">&#xe60a;</i>
          <span>{{ item.comment }}</span>
        </div>
      </div>
    </div>
    <button class="more">更多搜索结果...</button>
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
  </div>
</template>

<script>
import Loading from "@/components/loading/index.vue";
import { get } from "@/axios/axios.js";
export default {
  name: "searchWorks",
  data() {
    return {
      articleList: [],
      isLoading: true
    };
  },
  props: {
    pullSearchKey: String
  },
  components: {
    Loading
  },
  created() {
    console.log(this.pullSearchKey);
    let data = {
      page: 1,
      size: 10,
      type: 1,
      text: this.pullSearchKey
    };
    get("/findLike", data)
      .then(resp => {
        console.log(resp);
        for (let i = 0; i < resp.data.data.list.length; i++) {
          this.articleList.unshift({
            id: resp.data.data.list[i].id,
            userId: resp.data.data.list[i].userId,
            articleName: resp.data.data.list[i].articleName,
            articleCon: resp.data.data.list[i].articleIntroduct,
            articleTime: resp.data.data.list[i].articleCreateTime
          });
        }
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleClick(id) {
      console.log("momo" + id);
      this.$router.push({
        // name: "newWork",
        path: "/blogArticle" + "/" + id,
        params: {
          colId: "0",
          articleId: id
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.searchWorks {
  padding: 10px;

  .article {
    padding: 20px 0;
    border-bottom: 2px solid #eee;

    .top {
      margin-bottom: 10px;
      display: flex;
      line-height: 30px;

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      span {
        font-size: 12px;
        color: #666;
        margin-right: 10px;
      }
    }

    .articleName {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .articleCon {
      font-size: 12px;
      color: #666;
    }

    .foot {
      display: flex;
      margin-top: 10px;

      .cell {
        margin-right: 10px;

        span {
          color: #666;
        }

        i {
          color: #ea6f5a;
        }
      }
    }
  }

  .more {
    margin-top: 40px;
    width: 100%;
    height: 40px;
    background-color: #ccc;
    border-radius: 20px;
    color: #ffffff;
    font-size: 16px;
  }
}
</style>
