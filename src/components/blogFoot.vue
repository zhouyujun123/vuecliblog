<template>
  <div class="blog-foot">
    <p>
      <a href>咨询管理员</a>&nbsp;|&nbsp;<a href>成为作者</a>&nbsp;|&nbsp;
      <a href>系统维护</a>&nbsp;|&nbsp; <a href>金主爸爸</a>&nbsp;|&nbsp;
      <a href>投诉用户</a>
    </p>
    <p>
      <a href>管理员入口</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "NevFooter"
};
</script>

<style scoped lang="stylus">
.blog-foot {
  text-align: center;
  font-size: 14px;
  color: rgb(150, 150, 150);
  width: 1200px;
  margin: 0 auto;

  p {
    padding: 5px 0;
  }

  a {
    color: rgb(150, 150, 150);
    text-decoration: none;

    &:hover {
      color: #ea6f5a;
    }
  }
}
</style>
