<template>
  <div>
    <write-left></write-left>
    <div class="collected-in">
      <div class="gundong">
        <div class="collectde-top">
          <span>{{ whichCorpus }}</span>
          <div class="search">
            <input type="text" placeholder="搜索" v-model="search" />
            <button>
              <i class="zyjFamily">&#xe65b;</i>
            </button>
          </div>
        </div>
        <div class="add-collectde">
          <!-- <router-link :to="{ name: 'newWork' }"> -->
          <button @click="addNewWork()">添加新的文章</button>
          <!-- </router-link> -->
        </div>
        <div class="collectde-table">
          <table>
            <tr class="head">
              <td>文章名称</td>
              <td>更新时间</td>
              <td>状态</td>
              <td></td>
            </tr>
            <!-- <router-link
            tag="tr"
            :to="{ name: 'collectedIn' }"
            class="body"
            v-for="(item, index) in searchWorks(search)"
            :key="index"
            >-->
            <tr
              class="body"
              v-for="(item, index) in searchWorks(search)"
              :key="index"
            >
              <td>
                <div class="collectde-line">
                  <i class="zyjFamily">&#xe615;</i>
                  <span>{{ item.newWork }}</span>
                </div>
              </td>
              <td>{{ item.workTime }}</td>
              <td>{{ item.workState }}</td>
              <td>
                <i
                  class="zyjFamily deleteIcon"
                  @click="handleDeleteItem(item.id)"
                  >&#xe614;</i
                >
              </td>
            </tr>
            <!-- </router-link> -->
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import writeLeft from "@/components/blogWrite/writeLeft.vue";
export default {
  name: "collectedIn",
  components: {
    writeLeft
  },
  data() {
    return {
      workLine: [
        {
          id: 0,
          newWork: "zzz",
          workTime: "2020-04-11 03:04:56",
          workState: "已发布",
          content: "123123123123123132"
        },
        {
          id: 1,
          newWork: "yyy",
          workTime: "2020-04-11 03:04:56",
          workState: "未发布",
          content: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
        },
        {
          id: 2,
          newWork: "jjj",
          workTime: "2020-04-11 03:04:56",
          workState: "已发布",
          content: "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
        }
      ],
      search: "",
      whichCorpus: ""
    };
  },
  methods: {
    searchWorks(keywords) {
      return this.workLine.filter(item => {
        if (item.newWork.includes(keywords)) {
          return item;
        }
      });
    },
    handleDeleteItem(id) {
      this.workLine.splice(
        this.workLine.findIndex(item => item.id === id),
        1
      );
    },
    addNewWork() {
      this.$router.push({
        name: "newWork",
        params: {
          colName: this.whichCorpus
        }
      });
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.params.newWork);
    return (this.whichCorpus = this.$route.params.newWork);
  }
};
</script>

<style scoped lang="stylus">
.collected-in {
  padding: 20px;
  margin-left: 240px;
  background-color: #f5f5f5;
  // height: 680px;
  box-sizing: border-box;

  .gundong {
    height: 680px;
    overflow-y: scroll;
    background-color: #fff;
    border-radius: 10px;
  }

  .collectde-top {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    color: #969696;
    font-size: 14px;
    line-height: 30px;

    .search {
      background-color: #f5f5f5;
      width: 240px;
      height: 30px;
      border-radius: 20px;
      border: 1px solid #ced4da;

      input {
        width: 200px;
        height: 28px;
        background-color: #f5f5f5;
        border-radius: 20px;
        padding-left: 20px;
        box-sizing: border-box;
      }

      button {
        width: 40px;
        height: 30px;
        border-radius: 20px;
        background-color: #f5f5f5;
      }
    }
  }

  .add-collectde {
    padding: 20px;
    // display: flex;
    text-align: right;

    button {
      width: 120px;
      height: 32px;
      font-size: 14px;
      color: white;
      background-color: #ea6f5a;
      box-shadow: 0px 0px 5px #ea6f5a;
      border-radius: 20px;
      cursor: pointer;
      margin-left: 20px;
    }
  }

  .collectde-table {
    padding: 20px;

    table {
      width: 100%;
      border-collapse: collapse;

      .head {
        td {
          border-bottom: 1px solid #eee;
          padding: 12px;
          color: #212529;
          height: 20px;
        }
      }

      .body {
        td {
          padding: 20px 12px;
          color: #969696;
          border-top: 1px solid #eee;
          height: 30px;

          .collectde-line {
            i {
              color: #ea6f5a;
              margin-right: 20px;
            }
          }
        }

        &:hover {
          background-color: #fafafa;
        }
      }
    }
  }
}
</style>
