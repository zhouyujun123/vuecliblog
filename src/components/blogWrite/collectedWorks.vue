<template>
  <div class="collected-works">
    <div class="gundong">
      <div class="collectde-top">
        <span>文集({{ corpusLength }})</span>
        <div class="search">
          <input type="text" placeholder="搜索" v-model="search" />
          <button>
            <i class="zyjFamily">&#xe65b;</i>
          </button>
        </div>
      </div>
      <div class="add-collectde">
        <input
          @keyup.enter="addNewWork()"
          type="text"
          placeholder="请输入新的文集标题"
          v-model="newWork"
        />
        <button @click="addNewWork()">新文集</button>
      </div>
      <div class="collectde-table">
        <table>
          <tr class="head">
            <td>文集名称</td>
            <td>更新时间</td>
            <td>文章数量</td>
            <td></td>
          </tr>
          <tr
            class="body"
            v-for="(item, index) in searchWorks(search)"
            :key="index"
            @click="handleClick(item.id, item.newWork)"
          >
            <td>
              <div class="collectde-line">
                <i class="zyjFamily">&#xe62d;</i>
                <span>{{ item.newWork }}</span>
              </div>
            </td>
            <td>{{ item.workTime | dateFormat() }}</td>
            <td>{{ item.workNum }}</td>
            <td>
              <i
                class="zyjFamily deleteIcon"
                @click.prevent="handleDeleteItem(item.id)"
                >&#xe614;</i
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
let id = 0;
export default {
  name: "collectedWorks",
  data() {
    return {
      workAll: 0,
      // 文集数量
      // corpusLength: 0,
      workLine: [
        {
          id: 0,
          newWork: "vue实战训练",
          workTime: "2020-04-11 03:04:56",
          workNum: 0
        },
        {
          id: 1,
          newWork: "zyj",
          workTime: "2020-04-11 03:04:56",
          workNum: 0
        },
        {
          id: 2,
          newWork: "ymt",
          workTime: "2020-04-11 03:04:56",
          workNum: 0
        }
      ],
      search: "",
      newWork: ""
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
    addNewWork() {
      this.$axios
        .get("localhost:8090/add", {
          params: {
            id: id++,
            newWork: this.newWork,
            workTime: new Date(),
            workNum: 0
          }
        })
        .then(resp => {
          console.log(resp);
          if (this.newWork === "") return;
          this.workLine.unshift({
            id: id++,
            newWork: this.newWork,
            workTime: new Date(),
            workNum: 0
          });
          this.newWork = "";
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDeleteItem(id) {
      // let id = this.item.id;
      console.log(id);
      this.workLine.splice(
        this.workLine.findIndex(item => item.id === id),
        1
      );
    },
    handleClick(id, newWork) {
      console.log(id);
      this.$router.push({
        name: "collectedIn",
        params: {
          id: id,
          newWork: newWork
        }
      });
    }
    // jumpToCollectdeIn() {}
  },
  filters: {
    dateFormat: function (dateStr, pattern = "") {
      var dt = new Date(dateStr);
      var y = dt.getFullYear();
      // ES6字符串新方法padStart在开始位置补位，padEnd在结束位置补位
      var m = (dt.getMonth() + 1).toString().padStart(2, "0");
      var d = dt
        .getDate()
        .toString()
        .padStart(2, "0");

      if (pattern.toLowerCase() === "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
      } else {
        var hh = dt
          .getHours()
          .toString()
          .padStart(2, "0");
        var mm = dt
          .getMinutes()
          .toString()
          .padStart(2, "0");
        var ss = dt
          .getSeconds()
          .toString()
          .padStart(2, "0");

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
      }
    }
  },
  // 数据监听
  // watch: {
  //   workLine: {
  //     deep: true,
  //     handler() {
  //       this.corpusLength = this.workLine.length;
  //     }
  //   }
  // },
  // 计算属性
  computed: {
    // 计算属性的 getter
    corpusLength: function () {
      // `this` 指向 vm 实例
      return this.workLine.length;
    }
  }
};
</script>

<style scoped lang="stylus">
.collected-works {
  z-index: 999;
  padding: 20px;
  padding-left: 260px;
  background-color: #f5f5f5;
  // height: 680px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .gundong {
    height: 100%;
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
    display: flex;

    input {
      border-radius: 5px;
      outline: none;
      border: 0px;
      border: 1px dashed #C8C8C8;
      padding: 5px 10px;
      background: white;
    }

    .longinput {
      width: 260px;
    }

    button {
      width: 80px;
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

          .deleteIcon {
            color: #fff;
            cursor: pointer;
          }
        }

        &:hover {
          background-color: #fafafa;

          .deleteIcon {
            color: #969696;
          }
        }
      }
    }
  }
}
</style>
