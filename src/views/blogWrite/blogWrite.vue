<template>
  <div>
    <write-left></write-left>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import writeLeft from "@/components/blogWrite/writeLeft.vue";
export default {
  name: "blogWrite",
  data() {
    return {};
  },
  components: {
    writeLeft
  },
  methods: {}
};
</script>

<style scoped lang="stylus"></style>
