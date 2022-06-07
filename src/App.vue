<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部导航 -->
    <bottomNav />
  </div>
</template>

<script>
import bottomNav from "./components/bottomNav.vue";
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  components: {
    bottomNav,
  },
};
</script>

<style lang="less">
</style>
