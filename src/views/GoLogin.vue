<template>
  <div>
    <div class="header">
      <div class="san" @click="to"></div>
    </div>
    <div class="logo">
      <img src="https://h5.7881.com/static/img/logo.6a0f6679.png" alt="" />
    </div>
    <main>
      <button>微博登录</button>
      <button>QQ登录</button>
      <button>手机登录</button>
    </main>
    <div class="footer">
      <input type="checkbox" />
      <p>登录即代表同意<span>《用户协议》</span>和<span>《隐私协议》</span></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    to() {
      this.$router.push("/Home");
    },
  },
};
</script>
<style src="../assets/css/gologin.css" scoped></style>
<style lang="less" scoped>
</style>