<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" size="5rem" @click="to" />
    </div>
    <div class="logo">
      <img src="https://h5.7881.com/static/img/logo.6a0f6679.png" alt />
    </div>
    <main>
      <button @click="go">微博登录</button>
      <button @click="go">QQ登录</button>
      <button @click="go">手机登录</button>
    </main>
    <div class="footer">
      <input type="checkbox" />
      <p>
        登录即代表同意
        <span>《用户协议》</span>和
        <span>《隐私协议》</span>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  methods: {
    to() {
      this.$router.push("/Home");
    },
    go() {
      this.$router.push("/Login");
    }
  }
};
</script>
<style src="../assets/css/gologin.css" scoped></style>
<style lang="less" scoped>
</style>