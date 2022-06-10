<template>
  <van-tabbar v-model="active" active-color="orange" @change="onChange">
    <van-tabbar-item icon="home-o">
      <router-link to="/home">首页</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="search">
      <router-link to="/buy">我要买</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="gold-coin-o">我要卖</van-tabbar-item>
    <van-tabbar-item icon="more-o">消息</van-tabbar-item>
    <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onChange(name){
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
    }
  },
  computed: {
    act(){
      return (this.active = this.$store.state.bottomNav.activenum);
    }
  }
};
</script>

<style lang="less" scoped>
</style>