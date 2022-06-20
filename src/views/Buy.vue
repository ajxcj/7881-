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
        <h1 @click="all('', 1)" :class="page == 1 ? 'active' : ''">全部</h1>
        <h1 @click="all('1', 2)" :class="page == 2 ? 'active' : ''">手游</h1>
        <h1 @click="all('0', 3)" :class="page == 3 ? 'active' : ''">端游</h1>
      </div>
    </div>
    <!-- 右边导航 -->
    <div class="rightNav">
      <ul>
        <li
          v-for="(item, index) in alphabet"
          :key="index"
          @click="check(item, index)"
          :class="index == idx ? 'active' : ''"
        >
          {{ item }}
        </li>
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
import axios from "axios";
import { Getdata } from "../api/Getdata.js";
export default {
  data() {
    return {
      gameList: [],
      page: 1,
      alphabet: [
        "热",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      idx: 0,
    };
  },
  methods: {
    all(i, k) {
      this.page = k;
      Getdata.post("/basic/api/game-search", {
        gameType: `${i}`,
        hotFlag: "hot",
        px: null,
      }).then((res) => {
        // console.log(res);
        this.gameList = res.data.body;
      });
    },
    check(item, index) {
      this.idx = index;
      if (item == "热") {
        Getdata.post("/basic/api/game-search", {
          gameType: "",
          hotFlag: "hot",
          px: null,
        }).then((res) => {
          // console.log(res);
          this.gameList = res.data.body;
        });
        return;
      }
      // https://gw.7881.com/basic/api/game-search

      // Getdata.post("/basic/api/game-search", {
      //   gameType: "",
      //   hotFlag: null,
      //   px: `${item}`,
      // }).then((res) => {
      //   // console.log(res);
      //   this.gameList = res.data.body;
      // });
      axios
        .post(
          "http://localhost:3001/home/help-service-api/api/article/query/list-cache",
          {
            headers: {
              "Content-Type": "application / json",
            },
            gameType: "",
            hotFlag: null,
            px: `${item}`,
          }
        )
        .then((res) => {
          console.log(res);
          this.gameList = res.data.body;
        });
    },
  },
  created() {
    let i = "";
    Getdata.post("/basic/api/game-search", {
      gameType: "",
      hotFlag: "hot",
      px: null,
    }).then((res) => {
      // console.log(res);
      this.gameList = res.data.body;
    });
  },
};
</script>
<style src="../assets/css/reset.css" scoped></style>
<style src="../assets/css/buy.css" scoped></style>
<style lang="less" scoped>
</style>