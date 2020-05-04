<template>
  <div class="backImg">
    <blog-head></blog-head>
    <mine-head></mine-head>
    <mine-left></mine-left>
    <blog-foot></blog-foot>
  </div>
</template>
<script>
import mineHead from "../components/blogMine/mineHead.vue";
import mineLeft from "../components/blogMine/mineMiddle/mineContent.vue";
import blogFoot from "@/components/blogFoot.vue";
import blogHead from "@/components/blogHead.vue";
export default {
  name: "blogMine",
  components: {
    mineHead,
    mineLeft,
    blogFoot,
    blogHead
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
.backImg {
  // background-color: #fff;
  // background-attachment: fixed;
  // // background-image: url('../../public/images/topback.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center center;
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // z-index: -1;
}
</style>
