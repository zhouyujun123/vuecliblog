<template>
  <div class="searchCorpus">
    <router-link
      :to="{ name: 'blogCorpus' }"
      v-for="(item, index) in corpusList"
      :key="index"
    >
      <div class="corpus" >
        <div class="left">
          <img src="@/assets/images/book.png" />
          <div class="detail">
            <p>{{ item.corpusName }}</p>
            <p>
              <span>{{ item.corpusFans }}</span>
              人关注
            </p>
          </div>
        </div>
        <div class="right">
          <!-- <button class="get">已关注</button> -->
          <button class="willGet">+关注</button>
        </div>
      </div>
    </router-link>

    <button class="more">更多搜索结果...</button>
  </div>
</template>

<script>
export default {
  name: "searchCorpus",
  data() {
    return {
      corpusList: [
        {
          corpusName: "vue实战课程", // 用户名
          corpusFans: "456" // 发布时间
        },
        {
          corpusName: "vue实战课程", // 用户名
          corpusFans: "456" // 发布时间
        },
        {
          corpusName: "vue实战课程", // 用户名
          corpusFans: "456" // 发布时间
        },
        {
          corpusName: "vue实战课程", // 用户名
          corpusFans: "456" // 发布时间
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.searchCorpus {
  padding: 10px;

  .corpus {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding: 20px 0;

    .left {
      display: flex;

      img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }

      .detail {
        p {
          font-size: 16px;
          color: #666;
          height: 30px;
          line-height: 30px;

          span {
            color: #ea6f5a;
          }
        }
      }
    }

    .right {
      line-height: 60px;

      .get {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #fff;
        border: 1px solid #ccc;
        color: #ccc;
        font-size: 14px;
        cursor: pointer;
      }

      .willGet {
        width: 80px;
        height: 30px;
        border-radius: 20px;
        background-color: #3db922;
        border: 1px solid #3db922;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
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
