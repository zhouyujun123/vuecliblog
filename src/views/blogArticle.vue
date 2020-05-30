<template>
  <div class="body-color">
    <blog-Head></blog-Head>
    <div class="blog-article">
      <div class="blog-artleft fl">
        <div class="blog-view">
          <p class="art-name">{{ thisArticalName }}</p>
          <p class="art-head">发布时间：{{ thisArticalCreatTime }}</p>
          <mavon-editor v-html="value" />
          <div class="art-bom">
            <span>
              <i class="zyjFamily">&#xe60c;</i>12334
            </span>
            <span>
              <i class="zyjFamily">&#xe7d0;</i>123123
            </span>
            <span>
              <i class="zyjFamily">&#xe612;</i>123456
            </span>
          </div>
        </div>
        <div class="blog-comment">
          <div class="Leave-comment">
            <img src="../assets/images/headPhoto2.png" />
            <div class="my-comment">
              <textarea placeholder="写下你的评论..."></textarea>
              <div class="bottom-mycon">
                <button class="push">发布</button>
                <button class="over">取消</button>
              </div>
            </div>
          </div>
          <div class="people-comment">
            <p class="comment-tip">
              全部评论
              <span>88</span>
            </p>
            <div class="comment">
              <img class="header" src="../assets/images/headPhoto2.png" />
              <div class="building-owner">
                <p class="building-person">回复人的名字</p>
                <p class="building-time">2019-02-02 00:00:00</p>
                <p class="building-con">是啊，非常的吸引人。建议你看完再去阅读《了不起的盖茨比》，文字非常的华丽。</p>
                <p class="building-bom">
                  <span>
                    <i class="zyjFamily">&#xe60c;</i>
                    1
                  </span>
                  <span>
                    <i class="zyjFamily">&#xe60a;</i>
                    回复
                  </span>
                </p>
                <div class="building-inside">
                  <div class="back-top">
                    <img class="header" src="../assets/images/headPhoto2.png" />
                    <div class="back-who">
                      <p class="inside-person">回复人的名字</p>
                      <p class="inside-time">2019-02-02 00:00:00</p>
                    </div>
                  </div>
                  <p class="inside-con">是啊，非常的吸引人。建议你看完再去阅读《了不起的盖茨比》，文字非常的华丽。</p>
                  <p class="inside-bom">
                    <span>
                      <i class="zyjFamily">&#xe60c;</i>
                      1
                    </span>
                    <span>
                      <i class="zyjFamily">&#xe60a;</i>
                      回复
                    </span>
                  </p>
                </div>
                <div class="we-back">
                  <textarea placeholder="写下你的评论..."></textarea>
                  <div class="bottom-mycon">
                    <button class="push">发布</button>
                    <button class="over">取消</button>
                  </div>
                </div>
              </div>
            </div>
            <el-pagination layout="prev, pager, next" :total="100"></el-pagination>
          </div>
        </div>
      </div>
      <div class="blog-artright fr">
        <div class="blog-author">
          <div class="author-top">
            <img :src="imgSrc" />
            <div class="author-area">
              <div class="areacon">
                <p class="author">{{ thisArticalAuthor }}</p>
                <button class="add-guanzhu">+关注</button>
              </div>
              <p class="how-many">发布99篇文章，99文集</p>
            </div>
          </div>
          <div class="line-works"></div>
          <div
            class="works"
            v-for="(item, index) in articleList"
            :key="index"
            @click="handleClick(item.id)"
          >
            <p class="work-name">{{ item.articleName }}</p>
            <p class="work-read">阅读量111222</p>
          </div>
        </div>
      </div>
      <div class="guding">
        <div class="circle-click">
          <button>
            <i class="zyjFamily">&#xe60c;</i>
          </button>
          <p>点赞</p>
        </div>
        <div class="circle-click">
          <button>
            <i class="zyjFamily">&#xe612;</i>
          </button>
          <p>喜欢</p>
        </div>
        <div class="circle-click">
          <button>
            <i class="zyjFamily">&#xe745;</i>
          </button>
          <p>置顶</p>
        </div>
      </div>
    </div>
    <blog-foot></blog-foot>
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
  </div>
</template>

<script>
import Loading from "@/components/loading/index.vue";
import { get } from "@/axios/axios.js";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import blogHead from "@/components/blogHead.vue";
import blogFoot from "@/components/blogFoot.vue";

export default {
  inject: ["reload"],
  name: "blogArticle",
  components: {
    blogHead,
    blogFoot,
    mavonEditor,
    Loading
  },
  data() {
    return {
      articleList: [],
      value: ``,
      defaultData: "preview",
      thisArticalName: "",
      thisArticalCreatTime: "",
      thisArticalAuthor: "",
      imgSrc:
        "http://115.28.105.227:8888/blog/d67874a2e425bf6c330898f9db68812d",
      isLoading: true
    };
  },
  methods: {
    handleClick(id) {
      console.log("momo" + id);
      this.$router.push({
        // name: "newWork",
        path: "/blogArticle" + "/" + id,
        params: {
          articleId: id
        }
      });
      this.reload();
    }
  },
  created() {
    // 文章
    get("/tArticle/selectOne", { id: this.$route.params.articleId })
      .then(resp => {
        console.log(resp);
        this.thisArticalName = resp.data.articleName;
        this.thisArticalCreatTime = resp.data.articleCreateTime;
        this.thisArticalAuthor = resp.data.userId;
        this.value = resp.data.articleContent;
        // 获取该文章作者头像
        let data = {
          id: this.thisArticalAuthor
        };
        get("/getUserInfo/" + this.thisArticalAuthor, data)
          .then(resp => {
            console.log(resp);
            this.imgSrc = resp.data.data.headImg;
            this.isLoading = false;
          })
          .catch(err => {
            console.log(err);
          });
        // 获取该文章作者其他文章
        let findArtical = {
          userId: this.thisArticalAuthor,
          page: 0,
          size: 6,
          articleState: 1
        };
        get("/tArticle/findAllArticle", findArtical)
          .then(resp => {
            console.log(resp);
            for (let i = 0; i < resp.data.data.list.length; i++) {
              this.articleList.unshift({
                id: resp.data.data.list[i].id,
                articleName: resp.data.data.list[i].articleName
              });
            }
            this.isLoading = false;
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="stylus">
.body-color {
  background-color: #f5f5f5;
}

.blog-article {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 57px;

  .blog-artleft {
    width: 730px;

    .blog-view {
      background-color: #fff;
      border-radius: 5px;
      padding: 24px;
      box-sizing: border-box;
      margin-top: 10px;
      margin-bottom: 10px;

      .v-note-wrapper.shadow {
        box-shadow: none !important;
      }

      p {
        color: #404040;
      }

      .art-name {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }

      .art-head {
        background-color: #eee;
        text-align: center;
        color: #969696;
        font-weight: 300;
        font-style: oblique;
        font-size: 12px;
        padding: 7px;
        border-radius: 5px;
        margin-top: 10px;
      }

      .art-time {
        text-align: center;
        color: #ccc;
        font-weight: 300;
        font-style: oblique;
        font-size: 12px;
        margin-top: 10px;
      }

      .art-con {
        margin-top: 15px;
        line-height: 30px;
        text-indent: 30px;
      }

      .art-bom {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        span {
          margin-right: 10px;
          color: #969696;
          cursor: pointer;

          i {
            font-size: 18px;
            color: #ec7259;
            margin-right: 5px;
          }
        }
      }
    }

    .blog-comment {
      background-color: #fff;
      border-radius: 5px;
      padding: 24px;
      box-sizing: border-box;
      margin-bottom: 20px;

      .Leave-comment {
        display: flex;

        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #eee;
          margin-right: 10px;
        }

        .my-comment {
          width: 100%;

          textarea {
            padding: 12px 16px;
            width: 100%;
            box-sizing: border-box;
            height: 90px;
            font-size: 13px;
            border: 1px solid #eee;
            border-radius: 4px;
            background-color: #fafafa;
            resize: none;
            display: inline-block;
            vertical-align: top;
            outline-style: none;
          }

          .bottom-mycon {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 16px;

            .push {
              font-size: 14px;
              color: #fff;
              background-color: #ec7259;
              border-color: #ec7259;
              border: 1px solid #ec7259;
              border-radius: 20px;
              padding: 2px 10px;
            }

            .over {
              font-size: 14px;
              color: #969696;
              background-color: #fff;
              border: 1px solid #999;
              border-radius: 20px;
              padding: 2px 10px;
              margin-left: 8px;
            }
          }
        }
      }

      .people-comment {
        .comment-tip {
          margin-bottom: 16px;
          padding-left: 12px;
          border-left: 4px solid #ec7259;
          font-size: 18px;
          font-weight: 500;
          height: 20px;
          line-height: 20px;
        }

        .comment {
          display: flex;

          .header {
            width: 40px;
            height: 40px;
            border: 1px solid #eee;
            border-radius: 50%;
            overflow: hidden;
          }

          .building-owner {
            margin-left: 10px;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid #eee;

            .building-person {
              font-size: 15px;
              font-weight: 500;
            }

            .building-time {
              margin-top: 2px;
              font-size: 12px;
              color: #969696;
            }

            .building-con {
              margin-top: 10px;
              font-size: 16px;
              line-height: 1.5;
              word-break: break-word;
            }

            .building-bom {
              margin-top: 12px;
              font-size: 15px;

              span {
                cursor: pointer;
                margin-right: 16px;
                color: #b0b0b0;
              }
            }

            .building-inside {
              padding-top: 20px;
              border-top: 1px solid #eee;
              margin-top: 20px;

              .back-top {
                display: flex;

                .back-who {
                  margin-left: 10px;

                  .inside-person {
                    font-size: 15px;
                    font-weight: 500;
                  }

                  .inside-time {
                    margin-top: 2px;
                    font-size: 12px;
                    color: #969696;
                  }
                }
              }

              .inside-con {
                margin-top: 10px;
                font-size: 16px;
                line-height: 1.5;
                word-break: break-word;
              }

              .inside-bom {
                margin-top: 12px;
                font-size: 15px;

                span {
                  cursor: pointer;
                  margin-right: 16px;
                  color: #b0b0b0;
                }
              }
            }

            .we-back {
              margin-top: 20px;

              textarea {
                padding: 12px 16px;
                width: 100%;
                height: 90px;
                font-size: 13px;
                border: 1px solid #eee;
                border-radius: 4px;
                background-color: #fafafa;
                resize: none;
                display: inline-block;
                vertical-align: top;
                outline-style: none;
                box-sizing: border-box;
              }

              .bottom-mycon {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 16px;

                .push {
                  font-size: 14px;
                  color: #fff;
                  background-color: #ec7259;
                  border-color: #ec7259;
                  border: 1px solid #ec7259;
                  border-radius: 20px;
                  padding: 2px 10px;
                }

                .over {
                  font-size: 14px;
                  color: #969696;
                  background-color: #fff;
                  border: 1px solid #999;
                  border-radius: 20px;
                  padding: 2px 10px;
                  margin-left: 8px;
                }
              }
            }
          }
        }

        .el-pagination {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .blog-artright {
    width: 260px;

    .blog-author {
      background-color: #fff;
      border-radius: 5px;
      padding: 16px;
      box-sizing: border-box;
      margin-top: 10px;

      .author-top {
        display: flex;
        align-items: center;

        img {
          display: block;
          border-radius: 50%;
          border: 1px solid #eee;
          min-width: 45px;
          min-height: 45px;
          width: 45px;
          height: 45px;
        }

        .author-area {
          display: flex;
          // justify-content: space-between;
          flex-direction: column;
          flex-grow: 1;
          overflow: hidden;
          min-height: 45px;
          margin-left: 8px;

          .areacon {
            margin-bottom: 4px;
            display: flex;
            justify-content: space-between;

            .author {
              color: #2d2d2d;
              font-weight: 500;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .add-guanzhu {
              font-size: 12px;
              color: #ec7259;
              background-color: #fff;
              border-color: #ec7259;
              border-radius: 10px;
              border: 1px solid #ec7259;
            }
          }

          .how-many {
            color: #969696;
            font-size: 12px;
          }
        }
      }

      .line-works {
        width: 100%;
        height: 1px;
        margin: 16px 0;
        background-color: #eee;
      }

      .works {
        margin-top: 16px;

        .work-name {
          font-size: 14px;
          line-height: 22px;
          color: #2d2d2d;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .work-read {
          font-size: 12px;
          color: #969696;
        }
      }
    }
  }

  .guding {
    position: fixed;
    top: 216px;
    left: calc((100vw - 1000px) / 2 - 78px);

    .circle-click {
      width: 48px;
      margin-bottom: 20px;

      button {
        width: 48px;
        height: 48px;
        font-size: 18px;
        border-radius: 50%;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        background-color: #fff;
        cursor: pointer;
        color: #969696;

        i {
          font-size: 20px;
        }
      }

      p {
        font-size: 14px;
        text-align: center;
        color: #969696;
        margin-top: 5px;
      }
    }
  }
}
</style>
