<template>
  <div class="section">
    <!-- 头部固定 -->
    <div class="header">
      <div class="top">
        <form action="">
          <input type="text" placeholder="请输入游戏名称或商品编号" />
        </form>
        <span>购买历史</span>
      </div>
      <div class="bottom">
        <h1 class="active">全部</h1>
        <h1>手游</h1>
        <h1>端游</h1>
      </div>
    </div>
    <!-- 右边导航 -->
    <div class="rightNav">
      <ul>
        <li class="active">热</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>M</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </div>
    <!-- 内容区域 -->
    <div class="container">
      <div class="item" v-for="(item, index) in gameList" :key="index">
        <img
          :src="
            'https://pic.7881.com/7881/market/images/game_logo/' +
            item.gameId +
            '.png'
          "
          alt=""
        />
        <p>{{ item.gameName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { Getdata } from "../api/Getdata.js";
export default {
  data() {
    return {
      gameList: [],
    };
  },
  created() {
    // axios
    //   .post("https://gw.7881.com/basic/api/game-search", {
    //     gameType: "",
    //     hotFlag: "hot",
    //     px: null,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    Getdata.post("/basic/api/game-search", {
      gameType: "",
      hotFlag: "hot",
      px: null,
    }).then((res) => {
      // console.log(res.data.body);
      this.gameList = res.data.body;
    });
  },
};
</script>
<style src="../assets/css/reset.css" scoped></style>
<style src="../assets/css/buy.css" scoped></style>
<style lang="less" scoped>
</style>