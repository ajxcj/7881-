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
  // data() {
  //   return {
  //     activeKey: 0,
  //   };
  // },
  components: {
    bottomNav,
  },
};
</script>
<style lang="less">
@import url("./assets/css/reset.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#app{
  height: 100%;
  overflow-y:scroll;
  background-color: #fff;
}
</style>
