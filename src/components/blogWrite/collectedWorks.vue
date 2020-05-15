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
        <input @keyup.enter="addNewWork()" type="text" placeholder="请输入新的文集标题" v-model="newWork" />
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
              <i class="zyjFamily deleteIcon" @click.stop="handleDeleteItem(item.delId)">&#xe614;</i>
            </td>
          </tr>
        </table>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :hide-on-single-page="value"
        :page-size="6"
        layout="prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
let myData = new Date();
export default {
  inject: ["reload"],
  name: "collectedWorks",
  data() {
    return {
      workAll: 0,
      // 文集数量
      corpusLength: 0,
      corpusTime: "",
      workLine: [],
      search: "",
      newWork: "",
      value: true,
      // 分页
      total: 0,
      pageSize: 6,
      currentPage: 1
    };
  },
  created: function() {
    this.showTable();
  },
  methods: {
    // 搜索文集
    searchWorks(keywords) {
      return this.workLine.filter(item => {
        if (item.newWork.includes(keywords)) {
          return item;
        }
      });
    },
    // 添加文集
    addNewWork() {
      if (this.newWork === "") {
        alert("请输入新建的文集名称！");
      } else {
        this.$axios
          .get("http://localhost:8092/tCorpus/addCorpus", {
            params: {
              userId: this.$store.state.UserId,
              corpusId: this.$options.methods.randData(),
              corpusName: this.newWork,
              corpusTime: this.$options.methods.formatDateTime(myData),
              corpusNum: 0
            }
          })
          .then(resp => {
            console.log(resp);
            this.newWork = "";
            this.workLine = [];
            this.showTable();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 删除文集
    handleDeleteItem(id) {
      if (window.confirm("你确定要删除该文集吗？")) {
        this.$axios
          .get("http://localhost:8092/tCorpus/deleteById/" + id, {
            params: {
              id: id
            }
          })
          .then(resp => {
            console.log(resp);
            console.log(this.workLine);
            this.workLine.splice(
              this.workLine.findIndex(item => item.delId === id),
              1
            );
          })
          .catch(err => {
            console.log(err);
          });
        return true;
      } else {
        return false;
      }
    },
    // 页面传值
    handleClick(id, newWork) {
      console.log(id);
      this.$router.push({
        // name: "collectedIn",
        path: "/blogWrite/collectedIn" + "/" + id + "/" + newWork,
        params: {
          id: id,
          newWork: newWork
        }
      });
    },
    // 时间格式转换
    formatDateTime(date) {
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },
    // 文集随机数id--->日期+4位随机数
    randData() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + m + d + Math.floor(Math.random() * (99 - 10));
    },
    // 分页
    handleSizeChange(size) {
      this.pagesize = size;
      this.showTable();
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.workLine = [];
      this.showTable();
    },
    showTable() {
      this.$axios
        .get("http://localhost:8092/tCorpus/findAllCorpus", {
          params: {
            userId: this.$store.state.UserId,
            page: this.currentPage,
            size: 6
          }
        })
        .then(resp => {
          console.log(resp);
          this.total = resp.data.data.total;
          this.corpusLength = this.total;
          for (let i = 0; i < resp.data.data.list.length; i++) {
            this.workLine.unshift({
              delId: resp.data.data.list[i].id,
              id: resp.data.data.list[i].corpusId,
              newWork: resp.data.data.list[i].corpusName,
              workTime: resp.data.data.list[i].corpusTime,
              workNum: resp.data.data.list[i].corpusNum
            });
          }
          // console.log(resp.data.data.list);
          // console.log(this.total);
        })
        .catch(err => {
          console.log(err);
        });
    }
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
  // computed: {
  //   // 计算属性的 getter
  //   corpusLength: function() {
  //     // `this` 指向 vm 实例
  //     return this.workLine.length;
  //   }
  // }
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
    // overflow-y: scroll;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
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

  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
