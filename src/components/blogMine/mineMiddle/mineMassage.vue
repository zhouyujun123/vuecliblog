<template>
  <div class="mineMassage">
    <div class="top">个人信息</div>
    <dl>
      <dt>昵称：</dt>
      <dd>
        <el-input v-model="inputName" placeholder="请输入内容"></el-input>
      </dd>
    </dl>
    <dl>
      <dt>性别：</dt>
      <dd>
        <el-radio-group v-model="form.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </dd>
    </dl>
    <dl>
      <dt>出生年份：</dt>
      <dd>
        <el-date-picker v-model="years" type="year" placeholder="选择年份"></el-date-picker>
      </dd>
    </dl>
    <dl>
      <dt>一句话简介：</dt>
      <dd>
        <el-input v-model="inputIntrduct" placeholder="请输入内容"></el-input>
      </dd>
    </dl>
    <dl>
      <dt>修改头像：</dt>
      <dd>
        <div class="noimg">
          <img :src="imgSrc" />
          <input type="file" class="inputImg" accept="image/*" @change="onchangeImgFun" />
        </div>
      </dd>
    </dl>
    <button class="saveMassage">保存修改</button>
  </div>
  <!-- "../../../assets/images/headPhoto.png" -->
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "mineMassage",
  data() {
    return {
      years: "",
      imgSrc: require("@/assets/images/headPhoto.png"),
      errorStr: "",
      inputName: "",
      inputIntrduct: "",
      form: {
        resource: ""
      }
    };
  },
  created: function() {
    console.log($);
  },
  methods: {
    //头像选择
    onchangeImgFun(e) {
      var file = e.target.files[0];
      var formFile = new FormData(); // FormData 对象
      formFile.append("files", file); // 文件对象
      // 获取图片的大小，做大小限制有用
      let imgSize = file.size;
      var _this = this;
      // 比如上传头像限制5M大小，这里获取的大小单位是b
      if (imgSize <= 50 * 1024) {
        // 合格
        _this.errorStr = "";
        console.log("大小合适");
        // 下面逻辑处理
        axios({
          url: "http://localhost:8092/tImg/uploadFile",
          method: "post",
          data: formFile,
          headers: {
            "Content-Type": "multipart/form-data",
            token: localStorage.getItem("Authorization")
          }
        }).then(url => {
          console.log(url.data.data[0]);
          this.imgSrc = url.data.data[0];
        });
      } else {
        console.log("大小不合适");
        _this.errorStr = "图片大小超出范围";
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.mineMassage {
  .top {
    padding: 10px;
    color: #999;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    margin-bottom: 40px;
  }

  dl {
    display: flex;

    dt {
      color: #666;
      font-size: 14px;
      text-align: right;
      width: 200px;
      line-height: 25px;
      height: 25px;
    }

    dd {
      input {
        border: 1px solid #b4bccc;
        height: 28px;
        padding: 5px;
      }

      .inputImg {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }

      .noimg {
        position: relative;
        width: 100px;
        height: 100px;
        border: 1px solid #f5f5f5;
        border-radius: 50%;
        padding: 5px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .saveMassage {
    display: block;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    color: #fff;
    background-color: #ea6f5a;
    // margin-left: 50%;
    // margin-right: -25%;
    margin: 50px auto;
  }
}
</style>
