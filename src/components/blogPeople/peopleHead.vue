<template>
  <div class="peopleHead">
    <div class="people-area">
      <div class="area-top">
        <div class="flex">
          <div class="people-img">
            <img src="@/assets/images/headPhoto.png" />
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
</template>
<script>
export default {
  name: "peopleHead",
  data() {
    return {};
  },
  created() {
    // $webfont.load("body", "ea64072ce3f14c799f6ba9a173144f10", "DroidSans");
    // $webfont.draw();
  }
};
</script>
<style scoped lang="stylus">
.peopleHead {
  padding-top: 56px;
  background-image: url('../../../public/images/2.png');
  background-size: 100% 100%;
  height: 150px;

  .people-area {
    border-radius: 10px;
    width: 960px;
    margin: 0 auto;

    .area-top {
      position: relative;

      // display: flex;
      // justify-content: space-between;
      .flex {
        position: absolute;
        top: 30px;
        left: 0;
        display: flex;
        justify-content: start;
        background-image: url('../../../public/images/fox.png');
        background-size: 100% 100%;
        height: 320px;
        width: 320px;
        box-sizing: border-box;
        padding: 180px 10px 0 10px;

        .people-img {
          width: 100px;
          height: 100px;
          margin-right: 10px;

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
        position: absolute;
        top: 110px;
        right: 0;
        background-image: url('../../assets/images/circle_1.png');
        background-size: 100% 100%;

        .btn {
          // float: right;
          text-align: center;
          // background-color: #FFF;
          height: 80px;
          width: 80px;
          border-radius: 50%;
          // border: 1px solid #f5f5f5;
          box-sizing: border-box;
          padding: 5px;
          padding-top: 14px;

          i {
            color: #fff;
            font-size: 30px;
            // color: #ea6f5a;
          }

          p {
            font-size: 12px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
