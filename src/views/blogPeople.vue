<template>
  <div>
    <blog-head></blog-head>
    <people-head></people-head>
    <people-left></people-left>
    <blog-foot></blog-foot>
  </div>
</template>
<script>
import peopleHead from "../components/blogPeople/peopleHead.vue";
import peopleLeft from "../components/blogPeople/peopleMiddle/peopleLeft.vue";
import blogFoot from "@/components/blogFoot.vue";
import blogHead from "@/components/blogHead.vue";
export default {
  name: "blogPeople",
  components: {
    peopleLeft,
    peopleHead,
    blogFoot,
    blogHead
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus"></style>
