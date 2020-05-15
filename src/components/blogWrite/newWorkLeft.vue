<template>
  <div class="newWorkLeft">
    <div class="whoWrite">
      <router-link :to="{ name: 'blogMine' }">
        <img src="../../assets/images/headPhoto2.png" />
      </router-link>
    </div>
    <router-link :to="{ name: 'blogHome' }">
      <button>
        <i class="zyjFamily">&#xe74b;</i>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "newWorkLeft",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="stylus">
.newWorkLeft {
  width: 60px;
  box-sizing: border-box;
  background-color: #404040;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  flex: 0 0 240px;
  z-index: 1040;

  .whoWrite {
    // display: flex;
    // justify-content: space-between;
    // border-bottom: 1px solid #969696;
    padding-bottom: 20px;
    margin: 10px;

    img {
      width: 40px;
      height: 40px;
    }

    span {
      color: #eeeeee;
      font-size: 12px;
      line-height: 40px;
    }
  }

  .options {
    margin-top: 30px;

    .option {
      width: 100%;
      height: 45px;
      line-height: 45px;
      color: #969696;
      font-size: 14px;
      padding: 0px 10px;
      box-sizing: border-box;
      cursor: pointer;

      i {
        margin-right: 20px;
      }
    }

    .activeOption {
      border-left: 3px solid #ea6f5a;
      background-color: DimGray;

      .option {
        color: #ea6f5a;
      }
    }
  }

  button {
    position: fixed;
    bottom: 20px;
    left: 10px;
    width: 40px;
    height: 40px;
    background-color: #404040;

    i {
      color: #ea6f5a;
      font-size: 28px;
    }
  }
}
</style>