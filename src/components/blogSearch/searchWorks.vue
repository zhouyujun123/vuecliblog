<template>
  <div class="searchWorks">
    <div class="article" v-for="(item, index) in articleList" :key="index">
      <div class="top">
        <img src="@/assets/images/headPhoto.png" />
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
  </div>
</template>

<script>
export default {
  name: "searchWorks",
  data() {
    return {
      articleList: [
        {
          aothor: "zyj", // 用户名
          articleTime: "2019-01-10 00:00:00", // 发布时间
          articleName: "abcdefg", // 粉丝
          articleCon: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", // 文章
          good: "123", // 文集
          comment: "123123" // 是否关注
        }
      ]
    };
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
