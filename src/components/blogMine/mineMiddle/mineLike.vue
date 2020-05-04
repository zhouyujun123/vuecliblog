<template>
  <div class="mineLike">
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        @click="toggle(index, tab.view)"
        :class="{ active: active == index }"
      >
        {{ tab.type }}
      </li>
    </ul>
    <!--:is实现多个组件实现同一个挂载点-->
    <component :is="currentView"></component>
  </div>
</template>
<script>
import mineLikeArt from "@/components/blogMine/mineMiddle/mineLikeArt.vue";
import mineLikeCor from "@/components/blogMine/mineMiddle/mineLikeCor.vue";
export default {
  name: "mineLike",
  data() {
    return {
      active: 0,
      currentView: "mineLikeArt",
      tabs: [
        {
          type: "文章",
          view: "mineLikeArt"
        },
        {
          type: "文集",
          view: "mineLikeCor"
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
    mineLikeArt,
    mineLikeCor
  }
};
</script>

<style lang="stylus" scoped>
.mineLike {
  ul {
    width: 200px;
    display: flex;
  }

  ul li {
    width: 80px;
    height: 30px;
    background: #fff;
    display: inline-flex;
    // border-right: 1px solid #ddd;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }

  ul li.active {
    background: #f5f5f5;
    border-radius: 20px;
    border: 1px solid #eee;
    color: #ea6f5a;
  }
}
</style>
