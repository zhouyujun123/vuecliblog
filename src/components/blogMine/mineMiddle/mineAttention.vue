<template>
  <div class="mineAttention">
    <div class="attent">
      <div class="left">
        <img src="../../../assets/images/headPhoto2.png" />
        <div class="simple">
          <p class="name">一只兔子的关注</p>
          <p>我被关注了我被关注了我被关注了</p>
        </div>
      </div>
      <div class="right">
        <button>取消关注</button>
      </div>
    </div>
    <div class="attent">
      <div class="left">
        <img src="../../../assets/images/headPhoto2.png" />
        <div class="simple">
          <p class="name">一只兔子的关注</p>
          <p>我被关注了我被关注了我被关注了</p>
        </div>
      </div>
      <div class="right">
        <button>取消关注</button>
      </div>
    </div>
    <div class="attent">
      <div class="left">
        <img src="../../../assets/images/headPhoto2.png" />
        <div class="simple">
          <p class="name">一只兔子的关注</p>
          <p>我被关注了我被关注了我被关注了</p>
        </div>
      </div>
      <div class="right">
        <button>取消关注</button>
      </div>
    </div>
    <div class="attent">
      <div class="left">
        <img src="../../../assets/images/headPhoto2.png" />
        <div class="simple">
          <p class="name">一只兔子的关注</p>
          <p>我被关注了我被关注了我被关注了</p>
        </div>
      </div>
      <div class="right">
        <button>取消关注</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mineAttention"
};
</script>

<style lang="stylus" scoped>
.mineAttention {
  .attent {
    padding: 20px 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      justify-content: start;

      img {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }

      .simple {
        p {
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          color: #666;
        }

        .name {
          color: #ea6f5a;
          font-size: 18px;
        }
      }
    }

    .right {
      button {
        width: 100px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #409EFF;
        background-color: #FFF;
        color: #409EFF;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
}
</style>
