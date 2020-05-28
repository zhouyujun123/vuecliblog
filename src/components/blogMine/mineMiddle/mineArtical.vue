<template>
  <div class="mineArtical">
    <div class="article" v-for="(item, index) in mineArticalList" :key="index">
      <div class="top">
        <span>{{ item.articalTime }}</span>
      </div>
      <p class="articleName">{{ item.articleName }}</p>
      <p class="articleCon">{{ item.articleCon }}</p>
      <div class="foot">
        <div class="cell">
          <i class="zyjFamily">&#xe60c;</i>
          <span>{{ item.giveLike }}</span>
        </div>
        <div class="cell">
          <i class="zyjFamily">&#xe60a;</i>
          <span>{{ item.comments }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get } from "@/axios/axios.js";
export default {
  name: "mineArtical",
  data() {
    return {
      mineArticalList: []
    };
  },
  created() {
    this.showMineArtical();
  },
  methods: {
    showMineArtical() {
      let data = {
        userId: this.$store.state.UserId,
        articleState: 1,
        page: 1,
        size: 6
      };
      get("/tArticle/findAllArticle", data)
        .then(resp => {
          console.log(resp);
          this.total = resp.data.data.total;
          console.log(this.total % 6);
          for (let i = 0; i < resp.data.data.list.length; i++) {
            this.mineArticalList.push({
              articleName: resp.data.data.list[i].articleName,
              articalTime: resp.data.data.list[i].articleCreateTime,
              articleCon: resp.data.data.list[i].articleIntroduct
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.mineArtical {
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
