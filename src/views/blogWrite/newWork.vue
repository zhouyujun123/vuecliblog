<template>
  <div>
    <write-left></write-left>
    <div class="new-work">
      <div class="gundong">
        <div class="collectde-top">
          <span>{{ corpusName }}</span>
        </div>
        <div class="newWorkName">
          <input class="fir" type="text" placeholder="给你的新文章取个名字吧！" v-model="workName" />
          <input class="sen" type="text" placeholder="简单介绍你要写些什么..." v-model="introduce" />
        </div>
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
        <div class="collectde-buttom">
          <button class="save_btn" @click="saveHtml">保存</button>
          <button class="putout_btn">发布</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import writeLeft from "@/components/blogWrite/writeLeft.vue";

// 引入富文本编辑器vue-quill-editor(局部)
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "newWork",
  components: {
    writeLeft,
    quillEditor
  },
  data() {
    return {
      // 文集名称
      corpusName: "",
      // 文章名称
      workName: "",
      // 文章介绍
      introduce: "",
      // 文章美容
      content: `<p>写一个精彩的故事吧...</p>`,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            // [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            // ["clean"],
            ["link", "image"]
          ]
        }
      }
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    // onEditorReady(quill) {
    //   console.log("editor ready!", quill);
    // }, // 准备编辑器
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }, // 内容改变事件
    saveHtml() {
      console.log(this.content);
      this.$axios
        .get("localhost:8090/add", {
          params: {
            id: 1
          }
        })
        .then(resp => {
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    return (this.corpusName = this.$route.params.colName);
  }
};
</script>

<style scoped lang="stylus">
.new-work {
  z-index: 999;
  padding: 20px;
  padding-left: 260px;
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

    .collectde-top {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
      color: #ea6f5a;
      font-size: 16px;
      line-height: 30px;
    }

    .newWorkName {
      display: flex;
      flex-direction: column;

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
      padding-top: 10px;

      .save_btn {
        width: 100px;
        height: 35px;
        background-color: #fff;
        color: #ea6f5a;
        font-size: 14px;
        font-weight: bold;
        border: 1.5px solid #ea6f5a;
        border-radius: 20px;
        margin-right: 20px;
      }

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
    }
  }
}

.ql-container.ql-snow {
  min-height: 430px !important;
}
</style>
