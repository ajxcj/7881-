<template>
  <div class="big">
    <!-- 头部 -->
    <div class="top">
      <van-icon
        name="arrow-left"
        size="4.8rem"
        color="#333"
        style="float: left; line-height: 8rem; margin-left: 2rem"
        @click="back"
      />
      <form action="">
        <input type="text" value="请输入游戏名称" />
      </form>
      <van-icon
        name="service"
        size="4.8rem"
        color="#333"
        style="margin-top: 2rem; margin-left: 3rem"
      />
    </div>
    <!-- 轮播 -->
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img
            v-lazy="image"
            width="100%"
            height="100px"
            style="border-radius: 2rem"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门账号 -->
    <div class="hot">
      <div class="top">
        <h2>热门账号</h2>
        <h5>
          全部
          <van-icon name="arrow" />
        </h5>
      </div>
      <div class="container">
        <div class="item" v-for="(item, index) in gameList" :key="index">
          <img :src="item.content" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- 轮播2 -->
    <div class="ban">
      <img
        src="data:image/png;base64,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"
        alt=""
      />

      <van-swipe
        style="height: 30px; width: 70%; margin-left: 4rem"
        vertical
        autoplay="2000"
        :show-indicators="false"
      >
        <van-swipe-item
          v-for="(item, index) in AccountQuickQeport"
          :key="index"
          style="display: flex; align-items: center"
        >
          <span
            style="
              color: #ff6600;
              font-weight: bold;
              weight: 6.5rem;
              font-size: 1.4rem;
              overflow: hidden;
            "
            >{{ item.buyerTelephone }}</span
          >
          <span style="color: #999; margin-left: 1rem">刚买了</span
          ><span
            style="
              display: inline-block;
              color: #ff6600;
              font-weight: bold;
              margin-left: 1rem;
              width: 12rem;
              text-align: left;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >{{ item.gamename }}</span
          >
          <p style="float: left; color: #ff6600; font-weight: bold">
            &yen;<span> {{ item.billmoney }}</span
            >.00
          </p>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 游戏 -->
    <div class="center">
      <div class="one" v-for="(item, index) in game" :key="index">
        <div class="left">
          <h2>{{ item.title }}</h2>
          <h3>{{ item.content }}</h3>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAA4CAMAAABwtmJXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURUxpcf9oAP9oAP9nAP9oAP9nAP9nAP9nAP9oAP92AP9nAP9nAP9nAP////+XUf94Hf+8j/+LPf+vev9+KP+pcP/bw//Cmf9sCf/t4f/07P/gzP/59f9qBf+fX//LqP9zFf/w5/9vDv/UuP+RR/+FNP/o2P+2hf/k0v97IjKxa6MAAAAMdFJOUwA/riB7WfXq2AjCm2LNVgUAAAOwSURBVGje3VrZlqIwFFQbBZSwb7Ivovz/F06wbQ0hJDdNz7RMvcmpA5VYd8my2bCwVU5HTT0Yb4CDqh1PynYDg77fvYVqagy7vS6WrqjGm0JVBPL3byv9Ln/Pkb7VjDeHNmt+xVgBFLbbd8YqsGM4/0MzVgLtY6JdNVYDlVKvC+a9DcNW9hu1k5s/ySPmfuwckd9dhFzoq6PeyX27qRBCaf8DPJbvpfIMR/zFNM0cw3ftsGiC2xm9kLryPNmcszUWiHcRC+db4Zr9d3gwvPK9tkR8/5y+qrvdEAr83Omj7/OAtn/2BMYS8YZVlmVdf8q4InRZyoPh0SnoKjsHkAgRCkcPauYbswp1kC9Debx8qXOitUVcPOctMgngCS3MEUpZnlzMsiceLN7i81pZntzUzzjes0kEOMBGD6y/Lf5ahZnY9aB+bD5gM+8JJ0XpxRsjkuV9oUOoyYSV6rBMPIEQWIZBPDxC1HAz6QFSoHjiI+sFE5ccz5qglOGRlRuX4CDiFyplkXhBWA8IZXgT9TU335zeVvxdfcJRf9ocF4m3/C/ECHU+C60Mj8p4uONM5ivAcaMZPxKwNu5ZPMCLoLyHejzUWznf37BLVBOPgf/AM/WooDQhE6Ydyaw8ep56dSZTJmKPBpSmNJnCZWiH8AhfxuMvjXMlW3xzJoAzbnqeoBlrggShDQ9WiPhsA1h44+Y757WI4fD9yqZRUKKgPAnbiAM2x/nhq1AzioaVTFz0iLaxKChPJmCFqTKqXhPfxhN3tsNa1BeLgvKkUuUJkCU7YiVHLYCugxMcA0dFQCMhRUF5ckVK1B6UKZHc8EBi8m1lMxgBt8eCQITyZNsDUWOGw4nIK7ivJ/N7jT1pD/GAB+XSsF+ioDzZxkzQEufjitin48xjpp+/RF6G8iRbYv5ixMLDv3IGYzxWVEJRUJ7kYoS78YG9mmS0jW7TCYF6Ge75a2UDloG6KtVG3e37D8QD9z4UXpac1lYHMTaM8N/h0MiZ4mE88Hbl7NTjkjI2fO05uRsOlWMqCuZlyQor3nSacX2N3Y3zYmRd2ty/hk0Sp6//2Z+Kimhc2OJBPPB2H3ujNevubVQ63dftcLI/l7/seY2/xR2Tb0/joAjd3LxY0WcOKn5Z/JZ/uGAnTRFe/dx0PCuauDS1KFGdScNniofxJA4XgNtmxMBu3q8G7E7qQI0OZrp+RBGjojAeQnkCw+v/z1Hmug+R1318v+6LEyu/srLuy0Irv6a17gtyq7qa+AfAUgA1+V0+xAAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <img :src="item.color" alt="" />
      </div>
    </div>
    <!-- 全部 -->
    <div class="all">
      <div class="head">
        <h2 @click="checkOne(1)" :class="page == 1 ? 'active' : ''">
          王者荣耀
        </h2>
        <h2 @click="checkTow(2)" :class="page == 2 ? 'active' : ''">
          和平精英
        </h2>
        <h2 @click="checkThree(3)" :class="page == 3 ? 'active' : ''">
          地下城与勇士
        </h2>
        <span>全部&gt;</span>
      </div>
      <div class="item" v-for="(item, index) in oneGame" :key="index">
        <div class="top">
          <p>平台代发</p>
          <span>{{ item.title }}</span>
          <div class="ne">
            <p>
              {{ item.serverName }}
            </p>
            <p>&yen; {{ item.price }}</p>
          </div>
        </div>
        <img :src="item.goodsPicInfoList[0].url" alt="" />
        <div class="bot">
          <div class="a">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURUxpcf9eAP+TKv9cAP9cAP++mf9fAP+/mv++mf/Gp/++mf9dAP/Dmv+/mf++mf/Cnf/HoP/Amv+/m/++mf//yf++mv+/mf/Am/9cAP9cAP9cAP9dAP/Amf+RVf++mf9cANTELFsAAAAedFJOUwBFAsr25w+B9gvWnyVqqBgOOELBAXK4UiuIuVtVHt7f+7wAAAGPSURBVEjH3VXJloMgECROEDAC7sZknv7/XwbQ0e52Gb2mL4laBdU7Y19paW3KRMqkNDr9H21F0gNLRHYIV0L2xKSw+/iW9xvGix14JaYzG12kSqW5bqb7RLQpx4znaaBa1eFOwap396Tnm1Gxwq8j4fHRYxjuN/wl6OH5+ua8DnjHQHe0IYjbARnxw/CADnit/Bg/dESQzI/xPzHIrwyxOI0PF3B1Hs98/Wj/J4728SDhqffA5avqSLQh/rdfard2hMb9+s+QgfGjhmBmVPQOHxcGxOcOYmZC6Z6cwm5ADORv4SAl8tkJfN4hA8fHu8lngs+CD+oNMEg8Mx8XRAhFvTBo/DFhkgQZL5IvLymhTkMGzS922vRLkBFjqQeNwvqXOMoA9dM4SL0qDcIA+EzObuLigwxYnxr5vCrvwID40JCwX2gDOcaL9ou07KBFYzQh8nVDHg0BZvlGQx6MGRvmeUtf7w+yaVqyc6NyWgCmOjeMMz0uAKPOjPtiGffVtYXSXlxZ6tpStFfWbp2yr7QPLK1IBo8WnYgAAAAASUVORK5CYII="
              alt=""
            />
            <span>终生包赔</span>
          </div>
          <div class="a">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABgUExURUxpcf9eAP+TKv9cAP9cAP++mf9fAP+/mv++mf/Gp/++mf9dAP/Dmv+/mf++mf/Cnf/HoP/Amv+/m/++mf//yf++mv+/mf/Am/9cAP9cAP9cAP9dAP/Amf+RVf++mf9cANTELFsAAAAedFJOUwBFAsr25w+B9gvWnyVqqBgOOELBAXK4UiuIuVtVHt7f+7wAAAGPSURBVEjH3VXJloMgECROEDAC7sZknv7/XwbQ0e52Gb2mL4laBdU7Y19paW3KRMqkNDr9H21F0gNLRHYIV0L2xKSw+/iW9xvGix14JaYzG12kSqW5bqb7RLQpx4znaaBa1eFOwap396Tnm1Gxwq8j4fHRYxjuN/wl6OH5+ua8DnjHQHe0IYjbARnxw/CADnit/Bg/dESQzI/xPzHIrwyxOI0PF3B1Hs98/Wj/J4728SDhqffA5avqSLQh/rdfard2hMb9+s+QgfGjhmBmVPQOHxcGxOcOYmZC6Z6cwm5ADORv4SAl8tkJfN4hA8fHu8lngs+CD+oNMEg8Mx8XRAhFvTBo/DFhkgQZL5IvLymhTkMGzS922vRLkBFjqQeNwvqXOMoA9dM4SL0qDcIA+EzObuLigwxYnxr5vCrvwID40JCwX2gDOcaL9ou07KBFYzQh8nVDHg0BZvlGQx6MGRvmeUtf7w+yaVqyc6NyWgCmOjeMMz0uAKPOjPtiGffVtYXSXlxZ6tpStFfWbp2yr7QPLK1IBo8WnYgAAAAASUVORK5CYII="
              alt=""
            />
            <span>人脸认证</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Lazyload } from "vant";
Vue.use(Lazyload);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Getdata } from "../api/Getdata.js";

export default {
  data() {
    return {
      images: [
        "https://pic.7881.com/7881-2016/images/account/686_180/001.jpg",
        "https://pic.7881.com/7881-2016/images/account/686_180/002.jpg",
      ],
      gameList: [], //热门账号
      AccountQuickQeport: [], //账号捷报
      game: [], //游戏
      oneGame: [], //一款游戏
      page: 1,
    };
  },
  methods: {
    back() {
      this.$router.push("./Home");
    },
    checkOne(i) {
      this.page = i;
      Getdata.get("/7881accountchannel/api/account/recommend-account").then(
        (res) => {
          // console.log(res);
          this.oneGame = res.data.body.firstRecommendList;
        }
      );
    },
    checkTow(i) {
      this.page = i;

      Getdata.get("/7881accountchannel/api/account/recommend-account").then(
        (res) => {
          // console.log(res);
          this.oneGame = res.data.body.secondRecommendList;
        }
      );
    },
    checkThree(i) {
      this.page = i;

      Getdata.get("/7881accountchannel/api/account/recommend-account").then(
        (res) => {
          // console.log(res);
          this.oneGame = res.data.body.lastRecommendList;
        }
      );
    },
  },
  created() {
    //热门账号
    Getdata.get(
      "/conf-service-api/api/postion/list?positionName=APP%E8%B4%A6%E5%8F%B7%E7%83%AD%E9%97%A8%E6%B8%B8%E6%88%8F"
    ).then((res) => {
      //   console.log(res);
      this.gameList = res.data.body;
    });
    //账号捷报
    Getdata.get("/7881accountchannel/api/account/trans-account").then((res) => {
      // console.log(res);
      this.AccountQuickQeport = res.data.body;
    });
    //游戏
    Getdata.get(
      "/conf-service-api/api/postion/list?positionName=APP%E8%B4%A6%E5%8F%B7%E8%B1%86%E8%85%90%E5%9D%97%E5%B9%BF%E5%91%8A%E4%BD%8D"
    ).then((res) => {
      // console.log(res);
      this.game = res.data.body;
    });
    //一款游戏
    Getdata.get("/7881accountchannel/api/account/recommend-account").then(
      (res) => {
        // console.log(res);
        this.oneGame = res.data.body.firstRecommendList;
      }
    );
  },
};
</script>
<style src="../assets/css/buyAccount.css" scoped></style>
<style lang="less" scoped>
</style>