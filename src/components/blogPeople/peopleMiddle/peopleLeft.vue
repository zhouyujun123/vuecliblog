<template>
  <div class="peopleMiddle">
    <div class="counter">
      <div class="peopleLeft">
        <router-link
          to="/blogPeople/peopleCorpus"
          tag="div"
          :class="{ 'activePeople': $route.meta.active === '/blogPeople/peopleCorpus' }"
        >
          <div class="option">
            <div class="bgcImg">
              <i class="zyjFamily">&#xe62a;</i>
              <span>他的文集</span>
            </div>
          </div>
        </router-link>
        <router-link
          to="/blogPeople/peopleArtical"
          tag="div"
          :class="{ 'activePeople': $route.meta.active === '/blogPeople/peopleArtical' }"
        >
          <div class="option">
            <div class="bgcImg">
              <i class="zyjFamily">&#xe62a;</i>
              <span>他的文章</span>
            </div>
          </div>
        </router-link>
        <router-link
          to="/blogPeople/peopleLike"
          tag="div"
          :class="{ 'activePeople': $route.meta.active === '/blogPeople/peopleLike' }"
        >
          <div class="option">
            <div class="bgcImg">
              <i class="zyjFamily">&#xe62a;</i>
              <span>他的关注</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="peopleRight">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "peopleLeft",
  data() {
    return {};
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
    padding-top: 200px;

    .option {
      margin-bottom: 15px;

      span {
        font-size: 18px;
      }

      i {
        font-size: 16px;
        margin-right: 5px;
        font-weight: bold;
      }

      .bgcImg {
        margin: 0 auto;
        margin-top: 20px;
        width: 180px;
        height: 60px;
        box-sizing: border-box;
        padding-left: 35px;
        padding-top: 20px;
        background-image: url('../../../assets/images/biaoqian.png');
        background-size: 100% 100%;
      }
    }

    .activePeople {
      span {
        color: #fff;
      }

      i {
        color: #fff;
      }
    }
  }

  .peopleRight {
    width: 630px;
    box-sizing: border-box;
    padding: 10px;
    padding-top: 50px;
  }
}
</style>
