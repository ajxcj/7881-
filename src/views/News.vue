<template>
  <div class="box">
    <div class="header">
      <h1>消息</h1>
    </div>
    <div class="img">
      <img
        src="https://h5.7881.com/static/img/notlogin-img.c1b81f1c.png"
        alt=""
      />
    </div>

    <p>登录后查看消息</p>
    <button @click="to">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.push("/GoLogin");
    },
  },
};
</script>
<style src="../assets/css/news.css" scoped></style>
<style lang="less" scoped>
</style>