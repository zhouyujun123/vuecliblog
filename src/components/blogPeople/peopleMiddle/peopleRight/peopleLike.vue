<template>
  <div class="peopleLike">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        @click="toggle(index, tab.view)"
        :class="{ active: active == index }"
      >{{ tab.type }}</li>
    </ul>
    <component :is="currentView" :peopleId="thePeoplelike"></component>
  </div>
</template>

<script>
import peopleLikeArt from "@/components/blogPeople/peopleMiddle/peopleRight/peopleLikeArt.vue";
import peopleLikeCor from "@/components/blogPeople/peopleMiddle/peopleRight/peopleLikeCor.vue";
export default {
  name: "peopleLike",
  data() {
    return {
      active: 0,
      currentView: "peopleLikeArt",
      thePeoplelike: this.peopleId,
      tabs: [
        {
          type: "文章",
          view: "peopleLikeArt"
        },
        {
          type: "文集",
          view: "peopleLikeCor"
        }
      ]
    };
  },
  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  },
  components: {
    peopleLikeArt,
    peopleLikeCor
  },
  props: {
    peopleId: String
  },
  created() {
    console.log(this.peopleId);
  }
};
</script>

<style lang="stylus" scoped>
.peopleLike {
  ul {
    width: 200px;
    display: flex;
    padding-top: 10px;

    li {
      width: 80px;
      height: 30px;
      background: #fff;
      display: inline-flex;
      // border-right: 1px solid #ddd;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 14px;

      &.active {
        background: #f5f5f5;
        border-radius: 20px;
        border: 1px solid #eee;
        color: #ea6f5a;
      }
    }
  }
}
</style>
