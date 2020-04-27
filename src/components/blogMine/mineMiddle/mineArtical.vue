<template>
  <div class="mineArtical">
    <div class="article">
      <div class="top">
        <span>time</span>
      </div>
      <p class="articleName">jkjkjk</p>
      <p class="articleCon">ghjgjh</p>
      <div class="foot">
        <div class="cell">
          <i class="zyjFamily">&#xe60c;</i>
          <span>456</span>
        </div>
        <div class="cell">
          <i class="zyjFamily">&#xe60a;</i>
          <span>dhf</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mineArtical"
};
</script>

<style lang="stylus" scoped>
.mineArtical {
  padding: 10px;

  .article {
    padding: 20px 0;
    border-bottom: 2px solid #eee;

    .top {
      margin-bottom: 10px;
      display: flex;
      line-height: 30px;

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      span {
        font-size: 12px;
        color: #666;
        margin-right: 10px;
      }
    }

    .articleName {
      font-size: 16px;
      color: #333;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .articleCon {
      font-size: 12px;
      color: #666;
    }

    .foot {
      display: flex;
      margin-top: 10px;

      .cell {
        margin-right: 10px;

        span {
          color: #666;
        }

        i {
          color: #ea6f5a;
        }
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
