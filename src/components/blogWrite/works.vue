<template>
  <div class="works">
    <div class="gundong">
      <div class="collectde-top">
        <span>文章(1)</span>
        <div class="top-right">
          <div class="search">
            <input type="text" placeholder="搜索" v-model="search" />
            <button>
              <i class="zyjFamily">&#xe65b;</i>
            </button>
          </div>
          <button class="newWork">新文章</button>
        </div>
      </div>
      <!-- <div class="add-collectde">
        <input
          @keyup.enter="addNewWork()"
          type="text"
          placeholder="请输入新的文集标题"
          v-model="work"
        />
        <button @click="addNewWork()">新文章</button>
      </div>-->
      <div class="collectde-table">
        <table>
          <tr class="head">
            <td>文章名称</td>
            <td>更新时间</td>
            <td>状态</td>
            <td></td>
          </tr>
          <tr
            class="body"
            v-for="(item, index) in searchWorks(search)"
            :key="index"
          >
            <td>
              <div class="collectde-line">
                <i class="zyjFamily">&#xe615;</i>
                <span>{{ item.work }}</span>
              </div>
            </td>
            <td>{{ item.workTime | dateFormat() }}</td>
            <td>{{ item.workState }}</td>
            <td>
              <i class="zyjFamily deleteIcon" @click="handleDeleteItem(item.id)"
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
// let id = 0;
export default {
  name: "collectedWorks",
  data() {
    return {
      workAll: 0,
      workLine: [
        {
          id: 0,
          work: "vue实战训练",
          workTime: "2020-04-11 03:04:56",
          workState: "已发布"
        },
        {
          id: 1,
          work: "zyj",
          workTime: "2020-04-11 03:04:56",
          workState: "正在写"
        },
        {
          id: 2,
          work: "ymt",
          workTime: "2020-04-11 03:04:56",
          workState: "正在写"
        }
      ],
      search: "",
      work: ""
    };
  },
  methods: {
    searchWorks(keywords) {
      return this.workLine.filter(item => {
        if (item.work.includes(keywords)) {
          return item;
        }
      });
    },
    // addNewWork() {
    //   if (this.work === "") return;
    //   this.workLine.unshift({
    //     id: id++,
    //     work: this.work,
    //     workTime: new Date(),
    //     workState: "正在写"
    //   });
    //   this.work = "";
    // },
    handleDeleteItem(id) {
      // let id = this.item.id;
      this.workLine.splice(
        this.workLine.findIndex(item => item.id === id),
        1
      );
    }
    // jumpToCollectdeIn() {}
  },
  filters: {
    dateFormat: function(dateStr, pattern = "") {
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
  }
};
</script>

<style scoped lang="stylus">
.works {
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

    .top-right {
      display: flex;
      justify-content: space-between;

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

      .newWork {
        width: 80px;
        height: 32px;
        font-size: 14px;
        color: white;
        background-color: #ea6f5a;
        box-shadow: 0px 0px 5px #ea6f5a;
        border-radius: 20px;
        cursor: pointer;
        margin-left: 10px;
      }
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
