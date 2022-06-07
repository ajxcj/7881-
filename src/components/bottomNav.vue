<template>
  <van-tabbar v-model="active" active-color="green">
    <van-tabbar-item icon="home-o">商城首页</van-tabbar-item>
    <van-tabbar-item icon="label-o">商品分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
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