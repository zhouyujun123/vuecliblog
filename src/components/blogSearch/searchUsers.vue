<template>
  <div class="searchUsers">
    <div class="user" v-for="(item, index) in userList" :key="index">
      <div class="left">
        <div class="img">
          <img src="@/assets/images/headPhoto.png" />
        </div>
        <div class="userDetail">
          <p class="name">{{ item.userName }}</p>
          <p class="mineDetail">{{ item.userIntrduct }}</p>
          <div class="contribution">
            <div class="cell">
              <i class="zyjFamily">&#xe6ef;</i>
              <span>粉丝{{ item.userFans }}</span>
            </div>
            <div class="cell">
              <i class="zyjFamily">&#xe615;</i>
              <span>文章{{ item.userArtical }}</span>
            </div>
            <div class="cell">
              <i class="zyjFamily">&#xe610;</i>
              <span>文集{{ item.userCorpus }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="userGet">
        <!-- <button class="get">已关注</button> -->
        <button class="willGet">+关注</button>
      </div>
    </div>
    <button class="more">更多搜索结果...</button>
  </div>
</template>

<script>
export default {
  name: "searchUsers",
  data() {
    return {
      userList: [
        {
          userName: "zyj", // 用户名
          userIntrduct: "123456789789456123", // 用户介绍
          userFans: "233", // 粉丝
          userArtical: "456", // 文章
          userCorpus: "123", // 文集
          userGet: "get" // 是否关注
        },
        {
          userName: "zyj", // 用户名
          userIntrduct: "123456789789456123", // 用户介绍
          userFans: "233", // 粉丝
          userArtical: "456", // 文章
          userCorpus: "123", // 文集
          userGet: "get" // 是否关注
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
.searchUsers {
  padding: 10px;

  .user {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding: 20px 0;

    .left {
      display: flex;

      .img {
        width: 60px;
        height: 60px;
        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .userDetail {
        .name {
          color: #333;
          font-size: 18px;
          margin-bottom: 5px;
        }

        .mineDetail {
          color: #666;
          font-size: 14px;
        }
      }

      .contribution {
        display: flex;

        .cell {
          margin-right: 10px;

          span {
            color: #999;
            font-size: 12px;
          }

          i {
            color: #ea6f5a;
            font-size: 12px;
          }
        }
      }
    }

    .userGet {
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
