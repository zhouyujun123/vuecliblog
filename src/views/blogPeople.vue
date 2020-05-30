<template>
  <div>
    <blog-head></blog-head>
    <people-head :peopleUserId="peopleUserId"></people-head>
    <people-left :LeftUserId="peopleUserId"></people-left>
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
    return {
      peopleUserId: this.$route.params.peopleId
    };
  }
};
</script>
<style scoped lang="stylus"></style>
