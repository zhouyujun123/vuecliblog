<template>
  <div>
    <new-work-left></new-work-left>
    <div class="new-work">
      <div class="gundong">
        <div class="newWorkName">
          <input class="fir" type="text" placeholder="给你的新文章取个名字吧！" v-model="workName" />
          <div class="collectde-buttom">
            <button class="putout_btn" @click="submit">添加至列表</button>
            <button class="putout_btn del-add" @click="backUrl">取消添加</button>
          </div>
        </div>
        <div class="height">
          <mavon-editor v-model="content" @save="save" @change="change" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newWorkLeft from "@/components/blogWrite/newWorkLeft.vue";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

let myData = new Date();
export default {
  name: "newWork",
  components: {
    newWorkLeft,
    mavonEditor
  },
  data() {
    return {
      // 文集id
      corpusId: "",
      // 文章名称
      workName: "",
      // 文章内容
      content: "",
      html: ""
    };
  },
  computed: {},
  methods: {
    created() {
      return (this.corpusId = this.$route.params.id);
    },
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    save() {
      console.log(1);
    },
    // 添加至列表
    submit() {
      console.log(this.content);
      if (this.workName == "") {
        alert("文章名字不能为空！");
      } else if (this.content == "") {
        alert("文章内容不能为空！");
      } else {
        this.$axios
          // .post("http://localhost:8092/tArticle/addArticle", {
          //   articleId: this.$options.methods.randData(),
          //   articleName: this.workName,
          //   articleCorpusId: this.corpusId,
          //   articleAuthor: this.$store.state.UserId,
          //   articleContent: this.html,
          //   articleTime: this.$options.methods.formatDateTime(myData)
          // })
          .get("http://localhost:8092/tArticle/addArticle", {
            params: {
              articleId: this.$route.params.articleId,
              articleName: this.workName,
              articleCorpusId: this.corpusId,
              articleAuthor: this.$store.state.UserId,
              articleContent: this.html,
              articleTime: this.$options.methods.formatDateTime(myData)
            }
          })
          .then(resp => {
            console.log(resp);
            if (resp.data.resultCode == 5000) {
              alert("添加文章失败！");
            } else if (resp.data.resultCode == 2000) {
              alert("文章添加成功！");
              this.$router.go(-1);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 文章随机数id--->文集id+4位随机数
    randData() {
      return Math.floor(Math.random() * (999999 - 100000));
    },
    backUrl() {
      this.$router.go(-1);
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
    }
  },
  mounted() {
    return (this.corpusId = this.$route.params.colId);
  }
};
</script>

<style scoped lang="stylus">
.new-work {
  z-index: 999;
  padding: 20px;
  padding-left: 80px;
  background-color: #f5f5f5;
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
    box-sizing: border-box;
    padding: 0 20px;

    .height {
      margin-top: 10px;
      height: 88%;

      .v-note-wrapper.shadow {
        height: 100%;
        box-shadow: none !important;
      }
    }

    .collectde-top {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
      color: #ea6f5a;
      font-size: 16px;
      line-height: 35px;
    }

    .newWorkName {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;

      // flex-direction: column;
      .fir {
        width: 40%;
        height: 35px;
        font-size: 18px;
        color: #969696;
        border-bottom: 1px solid #ccc;
      }

      .sen {
        width: 80%;
        // height: 35px;
        font-size: 14px;
        color: #969696;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #f5f5f5;
        border: 1px solid #eee;
        border-radius: 5px;
      }
    }

    .collectde-buttom {
      text-align: center;

      .putout_btn {
        width: 100px;
        height: 35px;
        background-color: #ea6f5a;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        border: 1.5px solid #ea6f5a;
        border-radius: 20px;
      }

      .del-add {
        width: 80px;
        border: 1px solid #666;
        background-color: #fff;
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
