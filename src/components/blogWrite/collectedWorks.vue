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
            <td>状态</td>
            <td>操作</td>
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
            <td>{{ item.workTime | dateFormatMore() }}</td>
            <td :class="[item.workState ? 'activeColor' : '']">{{ item.workState ? "已发布" : "未发布" }}</td>
            <td>
              <button class="fabu" @click.stop="pushCorpus(item.id)">发布</button>
              <button class="xiugai" @click.stop="changeCorpus(item.id, item.newWork)">修改</button>
            </td>
            <td>
              <i class="zyjFamily deleteIcon" @click.stop="handleDeleteItem(item.id)">&#xe614;</i>
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
      <el-dialog title="发布文集" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
        <el-form>
          <el-form-item label="文集名称">
            <el-input v-model="formName"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="pushOK()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { get, post } from "@/axios/axios.js";
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
      currentPage: 1,
      dialogFormVisible: false,
      formName: "",
      colId: ""
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
        let data = {
          userId: this.$store.state.UserId,
          corpusName: this.newWork,
          corpusCreateTime: this.$options.methods.formatDateTime(myData),
          status: 0
        };
        post("/tCorpus/addCorpus", data)
          .then(resp => {
            console.log(resp);
            if (resp.data.resultCode == 5000) {
              alert("添加文集失败！");
            } else if (resp.data.resultCode == 2000) {
              this.newWork = "";
              this.workLine = [];
              this.showTable();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 删除文集
    handleDeleteItem(id) {
      if (window.confirm("你确定要删除该文集吗？")) {
        get("/tCorpus/deleteById/" + id, { id: id })
          .then(resp => {
            console.log(resp);
            console.log(this.workLine);
            this.workLine.splice(
              this.workLine.findIndex(item => item.id === id),
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
    // 发布文集
    pushCorpus(id) {
      let data = {
        id: id,
        status: 1
      };
      post("/tCorpus/updateCorpus", data)
        .then(resp => {
          if (resp.data.resultCode == 2000) {
            alert("文集发布成功！");
            this.reload();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 修改文集标题
    changeCorpus(id, newWork) {
      this.dialogFormVisible = true;
      this.formName = newWork;
      this.colId = id;
    },
    pushOK() {
      console.log();
      let data = {
        id: this.colId,
        corpusName: this.formName
      };
      post("/tCorpus/updateCorpus", data)
        .then(resp => {
          console.log(resp);
          if (resp.data.resultCode == 2000) {
            this.dialogFormVisible = false;
            this.reload();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 页面传值
    handleClick(id, newWork) {
      console.log(id);
      this.$router.push({
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
    // randData() {
    //   let date = new Date();
    //   let y = date.getFullYear();
    //   let m = date.getMonth() + 1;
    //   m = m < 10 ? "0" + m : m;
    //   let d = date.getDate();
    //   d = d < 10 ? "0" + d : d;
    //   return y + m + d + Math.floor(Math.random() * (99 - 10));
    // },
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
        page: this.currentPage,
        size: 6
      };
      get("/tCorpus/findAllCorpus", data)
        .then(resp => {
          console.log(resp);
          this.total = resp.data.data.total;
          this.corpusLength = this.total;
          for (let i = 0; i < resp.data.data.list.length; i++) {
            this.workLine.unshift({
              id: resp.data.data.list[i].id,
              workState: resp.data.data.list[i].status,
              newWork: resp.data.data.list[i].corpusName,
              workTime: resp.data.data.list[i].corpusCreateTime
              // workNum: resp.data.data.list[i].corpusNum
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
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

          .fabu {
            padding: 5px 10px;
            background-color: #f0fcfa;
            border-radius: 5px;
            color: #07c160;
            font-size: 14px;
            cursor: pointer;
          }

          .xiugai {
            padding: 5px 10px;
            background-color: #f0fcfa;
            border-radius: 5px;
            color: #07c160;
            font-size: 14px;
            cursor: pointer;
            margin-left: 10px;
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
  }

  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
