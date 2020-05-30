<template>
  <div class="peopleMiddle">
    <div class="counter">
      <div class="peopleLeft">
        <div class="option" @click.prevent="comName = 'peopleCorpus'" @click="activePeople(1)">
          <div class="bgcImg" :class="{ 'activePeople':changeActive == 1  }">
            <i class="zyjFamily">&#xe62d;</i>
            <span>作者文集</span>
          </div>
        </div>
        <div class="option" @click.prevent="comName = 'peopleArtical'" @click="activePeople(2)">
          <div class="bgcImg" :class="{ 'activePeople':changeActive == 2  }">
            <i class="zyjFamily">&#xe610;</i>
            <span>作者文章</span>
          </div>
        </div>
        <div class="option" @click.prevent="comName = 'peopleLike'" @click="activePeople(3)">
          <div class="bgcImg" :class="{ 'activePeople':changeActive == 3  }">
            <i class="zyjFamily">&#xe62a;</i>
            <span>作者关注</span>
          </div>
        </div>
      </div>
      <div class="peopleRight">
        <component :is="comName" :peopleId="thePeopleId"></component>
      </div>
    </div>
  </div>
</template>
<script>
import peopleCorpus from "@/components/blogPeople/peopleMiddle/peopleRight/peopleCorpus.vue";
import peopleArtical from "@/components/blogPeople/peopleMiddle/peopleRight/peopleArtical.vue";
import peopleLike from "@/components/blogPeople/peopleMiddle/peopleRight/peopleLike.vue";
export default {
  name: "peopleLeft",
  data() {
    return {
      comName: "peopleCorpus",
      changeActive: 1,
      thePeopleId: this.LeftUserId
    };
  },
  props: {
    LeftUserId: String
  },
  components: {
    peopleCorpus,
    peopleArtical,
    peopleLike
  },
  methods: {
    activePeople(index) {
      this.changeActive = index;
    }
  },
  created() {
    console.log(this.LeftUserId);
  }
};
</script>
<style scoped lang="stylus">
.peopleMiddle {
  .counter {
    display: flex;
    justify-content: space-between;
  }

  .peopleLeft {
    width: 320px;

    // padding-top: 200px;
    .option {
      margin-bottom: 15px;

      span {
        font-size: 16px;
        color: #666;
      }

      i {
        font-size: 16px;
        margin-right: 5px;
        font-weight: bold;
        color: #ea6f5a;
      }

      .bgcImg {
        margin: 0 auto;
        margin-top: 10px;
        width: 200px;
        height: 60px;
        box-sizing: border-box;
        padding-left: 50px;
        padding-top: 16px;
      }
    }

    .activePeople {
      background-image: url('../../../../public/images/btnO.png');
      background-size: 100% 100%;

      span {
        color: #f87617;
        font-weight: bold;
      }

      i {
        color: #f87617;
      }
    }
  }

  .peopleRight {
    width: 630px;
    box-sizing: border-box;
  }
}
</style>
