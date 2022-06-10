<template>
  <div>
    <div class="box">
      <!-- 头部固定定位 -->
      <div class="top_fixed">我的</div>

      <div class="header"></div>
      <!-- 登录 -->
      <div class="login">
        <h2 @click="to">登录</h2>
        <div class="bottom">
          <div class="con">
            <van-icon name="star-o" size="4rem" />
            <p>收藏</p>
          </div>
          <div class="con">
            <van-icon name="bill-o" size="4rem" />
            <p>红包</p>
          </div>
          <div class="con">
            <van-icon name="comment-o" size="4rem" />
            <p>消息</p>
          </div>
          <div class="con">
            <van-icon name="service-o" size="4rem" />
            <p>联系客服</p>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="main">
        <div class="one">
          <p></p>
          <h3>待付款-</h3>
        </div>
        <div class="one">
          <p></p>
          <h3>待发货-</h3>
        </div>
        <div class="one">
          <p></p>
          <h3>待收货-</h3>
        </div>
        <div class="tow">
          <img src="https://h5.7881.com/static/images/my/icon01.png" alt="" />
          <p>全部订单-</p>
        </div>
      </div>
      <div class="sell">
        <div class="top">
          <div class="left">我是卖家</div>
          <div class="right">
            我要卖
            <img src="https://h5.7881.com/static/images/my/icon01.png" alt="" />
          </div>
        </div>
        <div class="center">
          <p>待发货</p>
          <p>已发货</p>
          <p>订单管理></p>
        </div>
        <div class="bot">
          <img
            src="https://h5.7881.com/static/images/my/goods-icon.png"
            alt=""
          />
          <h4>我的商品</h4>
          <span>查看></span>
        </div>
      </div>
      <!-- 常用功能 -->
      <div class="out">
        <div class="box">
          <div class="top">常用功能</div>
          <div class="con">
            <div class="item">
              <van-icon name="clock-o" size="6rem" color="#FF5C00"></van-icon>
              <p>资金明细</p>
            </div>
            <div class="item">
              <van-icon
                name="user-circle-o"
                size="6rem"
                color="#FF5C00"
              ></van-icon>
              <p>实名认证</p>
            </div>
            <div class="item">
              <van-icon name="chat-o" size="6rem" color="#FF5C00"></van-icon>
              <p>快捷登录</p>
            </div>
            <div class="item">
              <van-icon
                name="phone-circle-o"
                size="6rem"
                color="#FF5C00"
              ></van-icon>
              <p>换绑手机</p>
            </div>
            <div class="item">
              <van-icon name="gift-o" size="6rem" color="#FF5C00"></van-icon>
              <p>中奖纪录</p>
            </div>
            <div class="item">
              <van-icon name="friends-o" size="6rem" color="#FF5C00"></van-icon>
              <p>我的黑名单</p>
            </div>
            <div class="item">
              <van-icon name="service-o" size="6rem" color="#FF5C00"></van-icon>
              <p>投诉咨询</p>
            </div>
            <div class="item">
              <van-icon name="font-o" size="6rem" color="#FF5C00"></van-icon>
              <p>验证中心</p>
            </div>
            <div class="item">
              <van-icon
                name="thumb-circle-o"
                size="6rem"
                color="#FF5C00"
              ></van-icon>
              <p>商务合作</p>
            </div>
            <div class="item">
              <van-icon name="records" size="6rem" color="#FF5C00"></van-icon>
              <p>我的投诉</p>
            </div>
            <div class="item">
              <van-icon
                name="free-postage"
                size="6rem"
                color="#FF5C00"
              ></van-icon>
              <p>收货角色</p>
            </div>
            <div class="item">
              <van-icon
                name="after-sale"
                size="6rem"
                color="#FF5C00"
              ></van-icon>
              <p>我的评估</p>
            </div>
            <div class="item">
              <van-icon
                name="after-sale"
                size="6rem"
                color="#FF5C00"
              ></van-icon>
              <p>我的蹲号</p>
            </div>
          </div>
        </div>
      </div>
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
      this.$router.push("/GoLogin");
    },
  },
};
</script>
<style src="../assets/css/my.css" scoped></style>
<style lang="less" scoped>
</style>