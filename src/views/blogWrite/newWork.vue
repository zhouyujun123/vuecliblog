<template>
  <div>
    <new-work-left></new-work-left>
    <div class="new-work">
      <div class="gundong">
        <div class="newWorkName">
          <input class="fir" type="text" placeholder="给你的新文章取个名字吧！" v-model="workName" />
          <div class="collectde-buttom">
            <button class="putout_btn" @click="submit" v-if="show">添加至列表</button>
            <button class="putout_btn fabu" @click="changeState">发布</button>
            <button class="putout_btn del-add" @click="backUrl">返回</button>
          </div>
        </div>
        <div class="height">
          <mavon-editor
            v-model="content"
            @save="save"
            @change="change"
            ref="md"
            @imgAdd="$imgAdd"
            @imgDel="$imgDel"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import newWorkLeft from "@/components/blogWrite/newWorkLeft.vue";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { post, get } from "@/axios/axios.js";

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
      html: "",
      show: true,
      showFabu: true
    };
  },
  created() {
    // console.log(this.$route.params.colId);
    if (this.$route.params.articleId != 0) {
      this.show = false;
      get("/tArticle/selectOne", {
        id: this.$route.params.articleId
      })
        .then(resp => {
          console.log(resp);
          this.workName = resp.data.articleName;
          this.content = resp.data.articleIntroduct;
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.show = true;
    }
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 发布文章
    changeState() {
      if (this.workName == "") {
        alert("文章名字不能为空！");
      } else if (this.content == "") {
        alert("文章内容不能为空！");
      } else {
        let data = {
          articleState: 1,
          id: this.$route.params.articleId
        };
        post("/tArticle/updateArticle", data)
          .then(resp => {
            console.log(resp);
            if (resp.data.resultCode == 2000) {
              alert("发布成功！");
              this.$router.go(-1);
            } else if (resp.data.success == false) {
              alert("请先将文章添加至列表！");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    // 保存
    save() {
      let data = {
        id: this.$route.params.articleId,
        articleName: this.workName,
        articleContent: this.html,
        articleIntroduct: this.content,
        articleCreateTime: this.$options.methods.formatDateTime(myData)
      };
      post("/tArticle/updateArticle", data)
        .then(resp => {
          console.log(resp);
          if (resp.data.resultCode == 5000) {
            alert("保存失败！");
          } else if (resp.data.resultCode == 0) {
            alert("请先添加新文章至列表");
          } else if (resp.data.resultCode == 2000) {
            alert("保存成功！");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("files", $file);
      axios({
        url: "http://localhost:8092/tImg/uploadFile",
        method: "post",
        data: formdata,
        headers: {
          "Content-Type": "multipart/form-data",
          token: localStorage.getItem("Authorization")
        }
      }).then(url => {
        console.log(url);
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        this.$refs.md.$img2Url(pos, url.data.data[0]);
      });
    },
    $imgDel(pos) {
      console.log(pos);
    },
    // 添加至列表
    submit() {
      // console.log(this.content);
      if (this.workName == "") {
        alert("文章名字不能为空！");
      } else if (this.content == "") {
        alert("文章内容不能为空！");
      } else {
        let data = {
          articleState: 0,
          articleName: this.workName,
          articleCorpusId: this.$route.params.colId,
          userId: this.$store.state.UserId,
          articleContent: this.html,
          // articleIntroduct: this.content.substring(2, 100),
          articleIntroduct: this.content,
          articleCreateTime: this.$options.methods.formatDateTime(myData)
        };
        post("/tArticle/addArticle", data)
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
    // 返回上一页
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
        margin-left: 10px;
      }

      .fabu {
        width: 80px;
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
