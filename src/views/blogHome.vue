<template>
  <div class="blog-home">
    <div style="border-bottom: 1px solid #eee; min-width:1400px;">
      <blog-Head></blog-Head>
    </div>
    <div class="indexBody">
      <div class="counter">
        <div class="index_left fl">
          <!-- <router-link to="blogArticle"> -->
          <div
            class="the_article"
            v-for="(item, index) in articleList"
            :key="index"
            @click="handleClick(item.articleId)"
          >
            <div class="article_left fl">
              <p>{{ item.articleName }}</p>
              <p>{{ item.articleCon }}</p>
              <p>
                <span>笔者：</span>
                <span class="con">{{ item.author }}</span>
                <span>发布于：</span>
                <span class="con">{{ item.upTime }}</span>
              </p>
            </div>
            <div class="article_right fr">
              <img src="../assets/images/pig.jpg" />
            </div>
          </div>
          <!-- </router-link> -->
          <div class="loadMore">
            <button @click="moreArticle()">加载更多文章</button>
          </div>
          <div class="bottom_img">
            <img src="@/assets/images/bookcase.png" />
          </div>
        </div>
        <div class="index-right fr">
          <div class="notice">
            <!-- <div class="top">
              <span>系统公告</span>
              <i class="zyjFamily">&#xe6ef;</i>
            </div>-->
            <div class="con">
              <p class="top">系统公告</p>
              <p>如果需要使用发布文章等功能，需要先登录哦~</p>
              <p>账号可以免费注册获得哦！</p>
            </div>
          </div>
          <div class="recommend">
            <div class="top">
              <p class="fl">作者推荐</p>
              <div class="fr">
                <i class="layui-icon layui-icon-refresh"></i>换一换
              </div>
            </div>
            <div class="middle">
              <div class="author_l fl">
                <img src="../assets/images/headPhoto.png" />
              </div>
              <div class="author_m fl">
                <p>作者的昵称啦啦啦</p>
                <p>
                  有
                  <span>2.3k</span>人已关注哦
                </p>
              </div>
              <div class="author_r fl">
                <button>+&nbsp;关注</button>
              </div>
            </div>
            <div class="bottom">
              <router-link to="/blogSearch/searchUsers">
                <button>
                  更多优秀作者
                  <i class="layui-icon layui-icon-next"></i>
                </button>
              </router-link>
            </div>
          </div>
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
  name: "blogHome",
  data() {
    return {
      articleList: [
        // {
        //   articleName: "我的",
        //   articleCon: "22222",
        //   author: "333333",
        //   upTime: "444444"
        // }
      ],
      // 模拟页码
      currentPage: 1,
      search: ""
    };
  },
  components: {
    blogHead,
    blogFoot
  },
  methods: {
    // 搜索文章
    searchWorks() {
      // return this.workLine.filter(item => {
      //   if (item.newWork.includes(keywords)) {
      //     return item;
      //   }
      // });
    },
    handleClick(id) {
      console.log(id);
      this.$router.push({
        // name: "newWork",
        path: "/blogArticle" + "/" + id,
        params: {
          colId: "000000000000",
          articleId: id
        }
      });
    },
    moreArticle() {
      // this.showTable();
      this.currentPage++;
      console.log(this.currentPage);
    },
    showTable() {
      console.log(1);
      this.$axios
        .get("http://localhost:8092/tArticle/findAllArticle", {
          params: {
            // articleCorpusId: this.$route.params.id,
            page: this.currentPage,
            size: 6
          }
        })
        .then(resp => {
          console.log(resp);
          // this.total = resp.data.data.total;
          // this.corpusLength = this.total;
          for (let i = 0; i < resp.data.data.list.length; i++) {
            this.articleList.unshift({
              articleId: resp.data.data.list[i].articleId,
              author: resp.data.data.list[i].articleAuthor,
              articleName: resp.data.data.list[i].articleName,
              upTime: resp.data.data.list[i].articleTime,
              articleCon: resp.data.data.list[i].articleContent
            });
          }
          console.log(this.articleList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.showTable();
  }
};
</script>

<style scoped>
/*left*/
.indexBody {
  overflow: hidden;
  padding-top: 57px;
}
.indexBody .index_left {
  width: 640px;
}
.indexBody .index_left .advert {
  width: 640px;
  height: 320px;
  padding: 10px 0;
  box-sizing: border-box;
}
.indexBody .index_left .advert img {
  width: 640px;
  height: 300px;
  border-radius: 10px;
}
.indexBody .index_left .the_article {
  box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  min-height: 140px;
  padding: 20px 0;
}
.indexBody .index_left .the_article p {
  width: 458px;
}
.indexBody .index_left .the_article p:nth-child(1) {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #4f4f4f;
  margin-bottom: 4px;
}
.indexBody .index_left .the_article p:nth-child(2) {
  font-size: 14px;
  height: 50px;
  line-height: 24px;
  color: #999;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.indexBody .index_left .the_article p:nth-child(3) {
  font-size: 12px;
  color: #b4b4b4;
}
.indexBody .index_left .the_article p:nth-child(3) .con {
  font-size: 14px;
  color: #ea6f5a;
  margin-right: 10px;
}
.indexBody .index_left .the_article .article_right {
  width: 150px;
  height: 100px;
  border: 1px solid #eee;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.indexBody .index_left .the_article .article_right img {
  max-width: 150px;
  max-height: 100px;
  border-radius: 4px;
}
.indexBody .index_left .loadMore {
  margin-top: 30px;
  margin-bottom: 30px;
}
.indexBody .index_left .loadMore button {
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  padding: 10px 15px;
  color: #fff;
}
/* .indexBody .index_left .bottom_img{

} */
.indexBody .index_left .bottom_img img {
  width: 100%;
}
/*right*/
.indexBody .index-right {
  width: 280px;
  margin-left: 40px;
}
.indexBody .index-right .notice {
  margin-top: 20px;
}
.indexBody .index-right .notice .con .top {
  padding-left: 70px;
  /* padding-bottom: 5px; */
  color: #ea6f5a;
  font-size: 18px;
  font-weight: bold;
}
.indexBody .index-right .notice .con {
  background-image: url("../assets/images/anthor.png");
  background-size: 100% 100%;
  box-sizing: border-box;
  height: 200px;
  padding-top: 40px;
  padding-left: 12px;
  padding-right: 22px;
}
.indexBody .index-right .notice .con p {
  color: #666;
  font-size: 14px;
  margin-bottom: 5px;
  text-indent: 10px;
}
.indexBody .index-right .recommend {
  margin-top: 10px;
}
.indexBody .index-right .recommend .top {
  overflow: hidden;
  color: #969696;
  font-size: 14px;
  margin-bottom: 10px;
}
.indexBody .index-right .recommend .middle {
  width: 280px;
  height: 50px;
  margin-bottom: 15px;
}
.indexBody .index-right .recommend .middle .author_l {
  width: 50px;
  height: 50px;
}
.indexBody .index-right .recommend .middle .author_l img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #eee;
}
.indexBody .index-right .recommend .middle .author_m {
  width: 180px;
  height: 50px;
}
.indexBody .index-right .recommend .middle .author_m p {
  width: 170px;
  height: 25px;
  line-height: 25px;
  color: #969696;
  font-size: 14px;
  padding-left: 10px;
}
.indexBody .index-right .recommend .middle .author_m p:nth-child(2) {
  color: #b4b4b4;
  font-size: 12px;
}
.indexBody .index-right .recommend .middle .author_m p:nth-child(2) span {
  color: #ea6f5a;
}
.indexBody .index-right .recommend .middle .author_r button {
  width: 50px;
  height: 50px;
  color: #42c02e;
  background-color: #fff;
  font-size: 12px;
}
.indexBody .index-right .recommend .bottom {
  margin: 20px 0;
}
.indexBody .index-right .recommend .bottom .layui-icon-next:before {
  font-size: 13px;
}
.indexBody .index-right .recommend .bottom button {
  width: 100%;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 7px 0;
}
</style>
