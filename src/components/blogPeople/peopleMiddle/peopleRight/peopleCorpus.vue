<template>
  <div class="peopleCorpus">
    <div class="corpus" v-for="(item, index) in corpusList" :key="index">
      <div class="left">
        <img src="../../../../assets/images/book2.png" />
        <div class="detail">
          <p>{{ item.corpusName }}</p>
          <p>
            <span>{{ item.payPeople }}</span>
            人关注
          </p>
        </div>
      </div>
      <!-- <div class="right">
        <button class="get">取消关注</button>
      </div>-->
    </div>
  </div>
</template>

<script>
import { get } from "@/axios/axios.js";
export default {
  name: "peopleCorpus",
  data() {
    return {
      corpusList: []
    };
  },
  props: {
    peopleId: String
  },
  created() {
    console.log(this.peopleId);
    let data = {
      page: 1,
      size: 6,
      userId: this.peopleId
    };
    get("/tCorpus/findAllCorpus", data)
      .then(resp => {
        console.log(resp);
        for (let i = 0; i < resp.data.data.list.length; i++) {
          this.corpusList.unshift({
            id: resp.data.data.list[i].id,
            corpusName: resp.data.data.list[i].corpusName
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
.peopleCorpus {
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
