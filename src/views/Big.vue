<template>
  <div id="app">
    <router-view></router-view>
    <!-- 底部导航 -->
    <bottomNav />
  </div>
</template>


<script>
import bottomNav from "../components/bottomNav.vue";
export default {
  components: {
    bottomNav,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
