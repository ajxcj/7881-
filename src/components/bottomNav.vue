<template>
  <van-tabbar v-model="active" active-color="orange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">我要买</van-tabbar-item>
    <van-tabbar-item icon="gold-coin-o">我要卖</van-tabbar-item>
    <van-tabbar-item icon="more-o">消息</van-tabbar-item>
    <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
</style>