<template>
  <div>
    <div class="box">
      <!-- 头部固定定位 -->
      <div class="top_fixed">我的</div>

      <div class="header"></div>
      <!-- 登录 -->
      <div class="login">
        <h2>登录</h2>
        <div class="bottom">
          <div class="con">
            <van-icon name="star-o" />
            <p>收藏</p>
          </div>
          <div class="con">
            <van-icon name="bill-o" />
            <p>红包</p>
          </div>
          <div class="con">
            <van-icon name="comment-o" />
            <p>消息</p>
          </div>
          <div class="con">
            <van-icon name="service-o" />
            <p>联系客服</p>
          </div>
        </div>
      </div>
      <!-- 内容 -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {};
</script>
<style src="../assets/css/my.css" scoped></style>
<style lang="less" scoped>
</style>