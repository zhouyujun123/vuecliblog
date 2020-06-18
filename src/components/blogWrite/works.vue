<template>
  <div class="works">
    <div class="gundong">
      <div class="collectde-top">
        <span>文章({{ corpusLength }})</span>
        <div class="top-right">
          <div class="search">
            <input type="text" placeholder="搜索" v-model="search" />
            <button>
              <i class="zyjFamily">&#xe65b;</i>
            </button>
          </div>
          <button class="newWork" @click="addNewWork(0)">新文章</button>
        </div>
      </div>
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
            @click="handleClick(item.id)"
          >
            <td>
              <div class="collectde-line">
                <i class="zyjFamily">&#xe615;</i>
                <span>{{ item.work }}</span>
              </div>
            </td>
            <td>{{ item.workTime | dateFormat() }}</td>
            <td :class="[item.workState ? 'activeColor' : '']">{{ item.workState ? "已发布" : "未发布" }}</td>
            <td>
              <i class="zyjFamily deleteIcon" @click.stop="handleDeleteItem(item.id)">&#xe614;</i>
            </td>
          </tr>
        </table>

        <div class="noContent">
          <img src="@/assets/images/nogoodBuy.png" />
          <p>还没有任何作品哦~~~</p>
        </div>
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
import { get } from "@/axios/axios.js";
export default {
  name: "works",
  data() {
    return {
      // 文章数量
      corpusLength: 0,
      // 默认文集
      colId: "0",
      // workAll: 0,
      workLine: [],
      search: "",
      work: "",
      // 分页
      total: 0,
      pageSize: 6,
      currentPage: 1,
      value: true
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
    addNewWork(id) {
      console.log(this.colId);
      this.$router.push({
        name: "newWork",
        path: "/blogWrite/newWork" + "/" + this.colId + "/" + id,
        params: {
          colId: this.colId,
          articleId: id
        }
      });
    },
    handleDeleteItem(id) {
      if (window.confirm("你确定要删除该文章吗？")) {
        get("/tArticle/deleteById/" + id, {
          id: id
        })
          .then(resp => {
            console.log(resp);
            // console.log(this.workLine);
            this.workLine.splice(
              this.workLine.findIndex(item => item.id === id),
              1
            );
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 页面传值
    handleClick(id) {
      console.log(id);
      this.$router.push({
        name: "newWork",
        path: "/blogWrite/newWork" + "/" + this.colId + "/" + id,
        params: {
          colId: this.colId,
          articleId: id
        }
      });
    },
    // 文章随机数id--->文集id+4位随机数
    randData() {
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + m + d + Math.floor(Math.random() * (999999 - 100000));
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
      let data = {
        userId: this.$store.state.UserId,
        articleCorpusId: 0,
        page: this.currentPage,
        size: 6
      };
      get("/tArticle/findAllArticle", data)
        .then(resp => {
          console.log(resp);
          this.total = resp.data.data.total;
          this.corpusLength = this.total;
          for (let i = 0; i < resp.data.data.list.length; i++) {
            this.workLine.unshift({
              id: resp.data.data.list[i].id,
              work: resp.data.data.list[i].articleName,
              workTime: resp.data.data.list[i].articleCreateTime,
              workState: resp.data.data.list[i].articleState
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.showTable();
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

        .activeColor {
          color: #ea6f5a;
        }

        &:hover {
          background-color: #fafafa;

          .deleteIcon {
            color: #969696;
          }
        }
      }
    }

    .noContent {
      padding-top: 120px;
      text-align: center;

      img {
        width: 160px;
      }

      p {
        font-size: 12px;
        color: #ccc;
      }
    }
  }

  .el-button {
    padding: 8px 10px;
  }
}
</style>
