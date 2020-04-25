<template>
  <div class="blog-home">
    <div style="border-bottom: 1px solid #eee; min-width:1400px;">
      <blog-Head></blog-Head>
    </div>
    <div class="indexBody">
      <div class="counter">
        <div class="index_left fl">
          <router-link to="blogArticle">
            <div class="the_article">
              <div class="article_left fl">
                <p>我的一天</p>
                <p>
                  文章内容文文章内容文章内容文内容章内容文文章内容文章内容文章内容
                </p>
                <p>
                  <span>笔者：</span>
                  <span class="con">zyj</span>
                  <span>发布于：</span>
                  <span class="con">2019-11</span>
                </p>
              </div>
              <div class="article_right fr">
                <img src="../assets/images/pig.jpg" />
              </div>
            </div>
          </router-link>
          <div class="loadMore">
            <button>加载更多文章</button>
          </div>
        </div>
        <div class="index-right fr">
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
  components: {
    blogHead,
    blogFoot
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
  margin-bottom: 60px;
}
.indexBody .index_left .loadMore button {
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  padding: 10px 15px;
  color: #fff;
}
/*right*/
.indexBody .index-right {
  width: 280px;
  margin-left: 40px;
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
