<template>
  <div>
    <van-icon name="arrow-left" size="6rem" class="a1" @click="to" />
    <van-form @submit="onSubmit" class="header">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
        <router-link to="/register" class="jia">去注册</router-link>
        <!-- <van-button round block type="validate" >登录</van-button> -->
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      axios
        .get("http://120.48.73.122:3001/users", {
          params: values,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data.msg);
          if (res.data.code == 1) {
            this.$router.push("/home");
          }
          if (res.data.code == 2) {
            this.$router.push("/register");
          }
        });
    },
    to() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  top: calc(35%);
  left: calc(50% - 30rem);
  width: 60rem;
  height: 13.4rem;
}
.a1 {
  margin-top: 3rem;
  margin-left: 3rem;
}
.jia {
  width: 100%;
  height: 42px;
  color: #fff;
  background-color: #1989fa;
  border: 1px solid #1989fa;
  display: inline-block;
  margin-top: 1rem;
  border-radius: 30px;
  text-align: center;
  line-height: 42px;
}
</style>