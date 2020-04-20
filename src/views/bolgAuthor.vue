<template>
  <div class="blog-author">
    <blog-Head></blog-Head>
    <blog-foot></blog-foot>
  </div>
</template>

<script>
import blogHead from "@/components/blogHead.vue";
import blogFoot from "@/components/blogFoot.vue";
export default {
  name: "bolgAuthor",
  components: {
    blogHead,
    blogFoot
  }
};
</script>

<style scoped lang="stylus"></style>
