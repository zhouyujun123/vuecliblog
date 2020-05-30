<template>
  <div class="peopleHead">
    <div class="people-area">
      <div class="area-top">
        <div class="flex">
          <div class="people-img">
            <img :src="imgSrc" />
          </div>
          <div class="area-detail">
            <p class="name">{{ nickName }}</p>
            <p class="detail">{{ introduction }}</p>
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
import { get } from "@/axios/axios.js";
export default {
  name: "peopleHead",
  data() {
    return {
      nickName: "",
      introduction: "",
      imgSrc: "http://115.28.105.227:8888/blog/d67874a2e425bf6c330898f9db68812d"
    };
  },
  props: {
    peopleUserId: String
  },
  methods: {
    showUserMassage() {
      let userId = this.peopleUserId;
      let data = {
        id: userId
      };
      get("/getUserInfo/" + userId, data)
        .then(resp => {
          console.log(resp);
          this.imgSrc = resp.data.data.headImg;
          this.nickName = resp.data.data.nickName;
          this.introduction = resp.data.data.introduction;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.showUserMassage();
    console.log(this.peopleUserId);
  }
};
</script>
<style scoped lang="stylus">
.peopleHead {
  padding-top: 56px;
  background-image: url('../../../public/images/bgc3.png');
  // background-size: 100% 100%;
  height: 200px;

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
        top: 50px;
        left: 0;
        display: flex;
        justify-content: start;
        box-sizing: border-box;
        width: 380px;
        background-image: url('../../../public/images/lable.png');
        background-size: 100% 100%;
        padding: 20px 20px 20px 40px;

        .people-img {
          width: 80px;
          height: 80px;
          margin-right: 10px;
          margin-left: 15px;
          margin-top: 15px;

          img {
            width: 100%;
            border-radius: 50%;
          }
        }

        .area-detail {
          .name {
            font-size: 18px;
            font-weight: bold;
            // color: #666;
            color: #c6ddfe;
            margin-top: 20px;
          }

          .detail {
            font-size: 14px;
            color: #deebfd;
            margin-top: 5px;
          }

          .time {
            font-size: 12px;
            color: #deebfd;
            margin-top: 5px;
          }
        }
      }

      .area-btn {
        position: absolute;
        top: 110px;
        right: 0;

        .btn {
          text-align: center;
          height: 80px;
          width: 80px;
          border-radius: 50%;
          box-sizing: border-box;
          padding: 5px;
          padding-top: 14px;

          i {
            font-size: 30px;
            font-weight: bolder;
            color: #ea6f5a;
          }

          p {
            font-size: 12px;
            font-weight: bolder;
            color: #ea6f5a;
          }
        }
      }
    }
  }
}
</style>
