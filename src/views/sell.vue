<template>
  <div>
    <div class="header">
      <h1>大家正在卖</h1>
      <h2>定制推荐/极速响应/专属推荐</h2>
      <img
        src="https://h5.7881.com/static/images/publish/publish-head.png"
        alt=""
      />
    </div>
    <div class="container">
      <div class="top">
        <h2>热门游戏发布</h2>
        <img
          src="https://h5.7881.com/static/images/sell/title-icon.png"
          alt=""
        />
        <img
          src="https://h5.7881.com/static/images/sell/title-icon.png"
          alt=""
        />
      </div>
      <div class="bottom">
        <div class="left">
          <img src="https://pic.7881.com/7881-app/images/hot/001.png" alt="" />
          <h2>地下城与勇士</h2>
          <h3>需求火爆供不应求</h3>
        </div>
        <div class="rightTop">
          <img src="https://pic.7881.com/7881-app/images/hot/002.png" alt="" />
          <h2>王者荣耀</h2>
          <h3>开启包赔当天到账</h3>
        </div>
        <div class="rightBottom">
          <img src="https://pic.7881.com/7881-app/images/hot/003.png" alt="" />
          <h2>魔兽70级服</h2>
          <h3>价格好 出货快</h3>
        </div>
        <div class="rightBottomm">
          <img src="https://pic.7881.com/7881-app/images/hot/004.png" alt="" />
          <h2>和平精英</h2>
          <h3>在线收号</h3>
        </div>
      </div>
      <div class="footer">
        <div class="box">
          <h2>发布手游</h2>
          <h3>玩游戏也赚钱</h3>
        </div>
        <div class="box">
          <h2>发布端游</h2>
          <h3>闲置账号能赚钱</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Getdata } from "../api/Getdata.js";
export default {
  data() {
    return {
      gameRelease: [],
    };
  },
  created() {
    Getdata.get(
      "/conf-service-api/api/postion/list?positionName=APP%E5%8F%91%E5%B8%83%E7%83%AD%E9%97%A8%E6%B8%B8%E6%88%8F%E6%8E%A8%E8%8D%90"
    ).then((res) => {
      console.log(res.data.body);
      this.gameRelease = res.data.body;
    });
  },
};
</script>
<style src="../assets/css/Sell.css" scoped></style>
<style lang="less" scoped>
</style>