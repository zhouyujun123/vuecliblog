<template>
  <div class="mineLike">
    <div class="article" v-for="(item, index) in articalList" :key="index">
      <div class="top">
        <span>{{ item.articleCreateTime }}</span>
      </div>
      <p class="articleName">{{ item.articleName }}</p>
      <p class="articleCon">{{ item.articleIntroduct }}</p>
      <div class="foot">
        <div class="cell">
          <i class="zyjFamily">&#xe60c;</i>
          <span>{{ item.peopleLike }}</span>
        </div>
        <div class="cell">
          <i class="zyjFamily">&#xe60a;</i>
          <span>{{ item.comment }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "@/axios/axios.js";
export default {
  name: "peopleLikeArt",
  props: {
    peopleId: String
  },
  data() {
    return {
      articalList: []
    };
  },
  created() {
    console.log(this.peopleId);
    let data = {
      page: 1,
      size: 6,
      userId: this.peopleId
    };
    get("/tArticle/findAllArticle", data)
      .then(resp => {
        console.log(resp);
        for (let i = 0; i < resp.data.data.list.length; i++) {
          this.articalList.unshift({
            id: resp.data.data.list[i].id,
            articleName: resp.data.data.list[i].articleName,
            articleCreateTime: resp.data.data.list[i].articleCreateTime,
            articleIntroduct: resp.data.data.list[i].articleIntroduct
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="stylus" scoped>
.mineLike {
  // padding: 10px;

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
