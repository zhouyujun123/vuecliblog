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
          <button @click="addNewWork()">添加新的文章</button>
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
                  <span>{{ item.newWork }}</span>
                </div>
              </td>
              <td>{{ item.workTime }}</td>
              <td :class="[item.workState ? 'activeColor' : '']">
                {{ item.workState ? "已发布" : "未发布" }}
              </td>
              <td>
                <i
                  class="zyjFamily deleteIcon"
                  @click.stop="handleDeleteItem(item.id)"
                  >&#xe614;</i
                >
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
  </div>
</template>

<script>
import writeLeft from "@/components/blogWrite/writeLeft.vue";
import { get } from "@/axios/axios.js";
export default {
  name: "collectedIn",
  components: {
    writeLeft
  },
  data() {
    return {
      workLine: [],
      search: "",
      whichCorpus: "",
      // 分页
      total: 0,
      pageSize: 6,
      currentPage: 1,
      value: true
    };
  },
  methods: {
    // 搜索文章
    searchWorks(keywords) {
      return this.workLine.filter(item => {
        if (item.newWork.includes(keywords)) {
          return item;
        }
      });
    },
    // 删除文章
    handleDeleteItem(id) {
      if (window.confirm("你确定要删除该文章吗？")) {
        get("/tArticle/deleteById/" + id, { id: id })
          .then(resp => {
            console.log(resp);
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
    // 添加文章
    addNewWork() {
      this.$router.push({
        name: "newWork",
        path: "/blogWrite/newWork" + "/" + this.$route.params.id + "/" + 0,
        params: {
          colId: this.$route.params.id,
          articleId: 0
        }
      });
    },
    // 页面传值
    handleClick(id) {
      console.log(id);
      this.$router.push({
        name: "newWork",
        path: "/blogWrite/newWork" + "/" + this.$route.params.id + "/" + id,
        params: {
          colId: this.$route.params.id,
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
        articleCorpusId: this.$route.params.id,
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
              newWork: resp.data.data.list[i].articleName,
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
    return (this.whichCorpus = this.$route.params.newWork);
  }
};
</script>

<style scoped lang="stylus">
.collected-in {
  padding: 20px;
  margin-left: 240px;
  background-color: #f5f5f5;
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

          .release {
            background-color: #ea6f5a;
            color: #fff;
            font-size: 14px;
            border-radius: 5px;
            padding: 5px 10px;
          }

          .published {
            background-color: rgba(0, 0, 0, 0);
            color: #969696;
            font-size: 16px;
          }
        }

        .activeColor {
          color: #ea6f5a;
        }

        &:hover {
          background-color: #fafafa;
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
