<template>
  <div class="body-color">
    <blog-Head></blog-Head>
    <div class="blog-corpus">
      <div class="blog-corleft fl">
        <div class="blog-view">
          <div class="book-top">
            <div class="left">
              <img src="@/assets/images/book3.png" />
              <div class="nameDetail">
                <p class="fir">文集的名字</p>
                <p class="sen">123人关注</p>
              </div>
            </div>
            <div class="right">
              <button>+关注</button>
            </div>
          </div>
          <div class="artical-list">
            <div class="book-unit">
              <div class="left">
                <i class="zyjFamily">&#xe615;</i>
                <span>文章的名字</span>
              </div>
              <div class="right">
                <span>2019-00-00 00:00:00</span>
              </div>
            </div>
            <div class="book-unit">
              <div class="left">
                <i class="zyjFamily">&#xe615;</i>
                <span>文章的名字</span>
              </div>
              <div class="right">
                <span>2019-00-00 00:00:00</span>
              </div>
            </div>
            <div class="book-unit">
              <div class="left">
                <i class="zyjFamily">&#xe615;</i>
                <span>文章的名字</span>
              </div>
              <div class="right">
                <span>2019-00-00 00:00:00</span>
              </div>
            </div>
            <div class="book-unit">
              <div class="left">
                <i class="zyjFamily">&#xe615;</i>
                <span>文章的名字</span>
              </div>
              <div class="right">
                <span>2019-00-00 00:00:00</span>
              </div>
            </div>
          </div>
          <div class="decoration">
            <img src="@/assets/images/flowerPots.png" />
            <img src="@/assets/images/flowerPots.png" />
          </div>
        </div>
      </div>
      <div class="blog-corright fr">
        <div class="blog-author">
          <div class="author-top">
            <img src="../assets/images/headPhoto.png" />
            <div class="author-area">
              <div class="areacon">
                <p class="author">作者名字</p>
                <button class="add-guanzhu">+关注</button>
              </div>
              <p class="how-many">发布99篇文章，99文集</p>
            </div>
          </div>
          <div class="line-works"></div>
          <div class="works">
            <p class="work-name">文章题目题目文章题目题目文章题目文章题目题目文章题目题目题目文章题目题目文章题目题目</p>
            <p class="work-read">阅读量111222</p>
          </div>
          <div class="works">
            <p class="work-name">文章题目题目文章题目题目文章题目文章题目题目文章题目题目题目文章题目题目文章题目题目</p>
            <p class="work-read">阅读量111222</p>
          </div>
          <div class="works">
            <p class="work-name">文章题目题目文章题目题目文章题目文章题目题目文章题目题目题目文章题目题目文章题目题目</p>
            <p class="work-read">阅读量111222</p>
          </div>
          <div class="works">
            <p class="work-name">文章题目题目文章题目题目文章题目文章题目题目文章题目题目题目文章题目题目文章题目题目</p>
            <p class="work-read">阅读量111222</p>
          </div>
        </div>
      </div>
      <div class="guding">
        <div class="circle-click">
          <button>
            <i class="zyjFamily">&#xe745;</i>
          </button>
          <p>置顶</p>
        </div>
      </div>
    </div>
    <blog-foot></blog-foot>
  </div>
</template>

<script>
import blogHead from "@/components/blogHead.vue";
import blogFoot from "@/components/blogFoot.vue";
export default {
  name: "blogCorpus",
  components: {
    blogHead,
    blogFoot
  }
};
</script>

<style lang="stylus" scoped>
.body-color {
  background-color: #f5f5f5;
}

.blog-corpus {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 57px;

  .blog-corleft {
    width: 730px;

    .blog-view {
      background-color: #fff;
      border-radius: 5px;
      padding: 24px;
      box-sizing: border-box;
      margin-top: 10px;
      margin-bottom: 10px;

      .book-top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 2px solid #eee;

        .left {
          display: flex;
          justify-content: space-between;

          img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            border: 1px solid #eee;
            margin-right: 20px;
          }

          .nameDetail {
            .fir {
              color: #ea6f5a;
              font-size: 18px;
              margin-bottom: 10px;
            }

            .sen {
              color: #666;
              font-size: 12px;
            }
          }
        }

        .right {
          line-height: 100px;

          button {
            width: 100px;
            height: 35px;
            border-radius: 20px;
            color: #fff;
            font-size: 16px;
            background-color: #ea6f5a;
          }
        }
      }

      .artical-list {
        .book-unit {
          display: flex;
          justify-content: space-between;
          height: 50px;
          border-bottom: 1px solid #eee;
          line-height: 50px;

          .left {
            i {
              color: #ea6f5a;
              font-size: 16px;
              font-weight: bold;
              margin-right: 10px;
            }

            span {
              color: #666;
              font-size: 14px;
            }
          }

          .right {
            span {
              color: #999;
              font-size: 12px;
            }
          }
        }
      }

      .decoration {
        margin-top: 30px;
        width: 100%;

        img {
          width: 50%;
        }
      }
    }
  }

  .blog-corright {
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
