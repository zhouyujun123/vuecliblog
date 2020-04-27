<template>
  <div class="mineSetting">
    <div class="top">修改密码</div>
    <dl>
      <dt>原密码：</dt>
      <dd>
        <el-input v-model="inputName" placeholder="请输入内容"></el-input>
      </dd>
    </dl>
    <dl>
      <dt>新密码：</dt>
      <dd>
        <el-input v-model="inputName" placeholder="请输入内容"></el-input>
      </dd>
    </dl>
    <dl>
      <dt>再次输入新密码：</dt>
      <dd>
        <el-input v-model="inputName" placeholder="请输入内容"></el-input>
      </dd>
    </dl>
    <button class="saveMassage">提交</button>
  </div>
</template>
<script>
export default {
  name: "mineSetting"
};
</script>

<style lang="stylus" scoped>
.mineSetting {
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
