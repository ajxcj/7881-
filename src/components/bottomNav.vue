<template>
  <van-tabbar router v-model="active" active-color="orange">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/buy">我要买</van-tabbar-item>
    <van-tabbar-item icon="gold-coin-o" to="/sell">我要卖</van-tabbar-item>
    <van-tabbar-item icon="more-o" to="/news">消息</van-tabbar-item>
    <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(name) {
      switch (name) {
        case 0:
          this.$store.commit("bottomNav/alternum", name);
          break;
        case 1:
          this.$store.commit("bottomNav/alternum", name);
          break;
        case 2:
          this.$store.commit("bottomNav/alternum", name);
          break;
        case 3:
          this.$store.commit("bottomNav/alternum", name);
          break;
      }
    },
  },
  computed: {
    act() {
      return (this.active = this.$store.state.bottomNav.activenum);
    },
  },
};
</script>

<style lang="less" scoped>
</style>