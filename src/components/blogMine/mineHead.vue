<template>
  <div class="mineHead">
    <div class="counter">
      <!-- <div class="head-top">
        <div class="left">
          <i class="zyjFamily">&#xe74b;</i>
          <span>一只兔子的主页</span>
        </div>
        <div class="right">
          <span>退出登录</span>
        </div>
      </div>-->
      <div class="people-area">
        <div class="area-top">
          <div class="flex">
            <div class="people-img">
              <img :src="imgSrc" />
            </div>
            <div class="area-detail">
              <p class="name">一只兔子</p>
              <p class="detail">是一只在加拿大留过学的兔子</p>
              <p class="time">2020-03-04 00:00:00注册</p>
            </div>
          </div>
          <div class="area-btn">
            <div class="btn">
              <i class="zyjFamily">&#xe62a;</i>
              <p>粉丝(112)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mineHead",
  data() {
    return {
      imgSrc: require("@/assets/images/headPhoto.png")
    };
  },
  created() {
    // $webfont.load("body", "ea64072ce3f14c799f6ba9a173144f10", "DroidSans");
    // $webfont.draw();
  }
};
</script>
<style scoped lang="stylus">
.mineHead {
  padding-top: 56px;

  .people-area {
    background-image: url('../../../public/images/topback.jpg');
    background-size: 100% 100%;
    border-radius: 10px;

    .area-top {
      // background-color: rgba(0, 0, 0, 0.2);
      padding: 80px 10px;
      margin: 20px 0;
      // border: 1px solid #eee;
      display: flex;
      justify-content: space-between;

      .flex {
        display: flex;
        justify-content: start;

        .people-img {
          width: 100px;
          height: 100px;
          margin-right: 20px;

          img {
            width: 100%;
          }
        }

        .area-detail {
          .name {
            font-size: 18px;
            font-weight: bold;
            color: #666;
            margin-top: 20px;
          }

          .detail {
            font-size: 14px;
            color: #666;
            margin-top: 5px;
          }

          .time {
            font-size: 12px;
            color: #666;
            margin-top: 5px;
          }
        }
      }

      .area-btn {
        display: flex;

        .btn {
          text-align: center;
          margin-left: 10px;
          margin-top: 13.5px;
          background-color: #FFF;
          height: 63px;
          width: 63px;
          border-radius: 50%;
          border: 1px solid #f5f5f5;
          padding: 5px;

          i {
            font-size: 30px;
            color: #ea6f5a;
          }

          p {
            font-size: 12px;
            color: #333;
          }
        }
      }
    }
  }
}
</style>
