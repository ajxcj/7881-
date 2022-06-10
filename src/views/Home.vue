<template>
  <div id="jia">
    <div class="top">
      <div class>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcdnf4tnf49rg49rg4tzh5Nrg5Nrf4uPj6tvh5Mz5+dzc49vi5dzh5N/m5tvh5Nrf4t/k59nf4v////7+/v+dZt/k5vP19c3Nzejq7OLm6e3w8fv7/Pf4+N3i5f+peNvb29XV1f/49P+1jP/Cn//Zw/zp3enHs7r8CaAAAAASdFJOUwD7pMaNVH7tENIFI2BzM9+0pUTmnn4AAAMKSURBVFjDrVfrmqMgDK2t13Y67URWEfDS677/G65iEYSgzvdt/gwdzZGEcxKy23ksjeKf7JIEQXLJ9nGU7n5l32EWQG9NwVjRDKsgC7+3eqfnbHCpSkFyaaSBhvX/yc5b9pHGCUgr88kKYDkpK4AkXoX4+rhbANXwR/AGkq9F99MBwA/QB8MBDie/f5SAB4CrpaggiXz+IYAPYPYDQtT9uAc/QK1/DKe6PyL+V1gAENOayIdXF8H6vgVAprUYn+6X47cBGr2uP4+tPESwCFDodamez87ilCwDML3m6nli8uEAywAVAgAHg7+wAsD1utJvTKxOk18AMP1GopQVwxrAnIiTxUsbMAFKMSeitYUz6l8ZToaR2UtnCZAh7kWd5xsAMln/sM8Tj79isrJvlMQL/jZAiEbA/P6TFHQMaWD7N8Lvr6UwWpAiMpLnJ8gmgF5SDoukcCpK600AsaeQ3CitUABuvb13hTjsnVBKTSay2gdw2F2wCMoeQKdSUHrzAVx2thD4JwU3Y9s9HKLmUQ67AEsBo7QzFGzA2QCBAyCPT3Q34xA6Shs/gBVCgWTePBLmhGAlETu8ziAFc5J4QHJoC4iVaEEaj9HXEeuuaxC0xiFS7AHo9z0j08fAoXL0KwACjpgsOXOTPTeyUk8GOVsFhRn8Y2JVjJlb0iankiIlweZR6BZVRQR+64q1ijgWVbso1qqZEFjdQIY1loJsraiqsditzVuUhc0i1V3tsljgZbluXBbh3ZWT193taW+nfE/tfX7BGE7/3T5f77uxkfur/esAfKFXHC4z8PojrW3bx+P5fLT98s4cISKXLBX+B0Bb+87JHGF2yZokpQrH0/J/DkmZI0ToRVMBPKYAhhBUTk2EEL/qKi3d7ygZRKELieeyzfuhYqE7Ky5dj97rfj+kLVwPPmrArvuGsD0AsmkWaPzmyFMUHibn/cVHZtE/8oxDF/dFAIwP318ausaxr8GySEQtw18Z+9TgWZX2Nspy+PyGwXMafRnXo68oebN59P0Pw7c7/v8sjP//APg38NzYhF39AAAAAElFTkSuQmCC"
          alt
        />
        <span>欢迎来到7811</span>
      </div>
      <div class="right">快捷搜索</div>
    </div>
    <section>
      <div class="banner">
        <dl v-for="(iten,index) in headline" :key="index">
          <dt>
            <img :src="iten.content" alt />
          </dt>
          <dd>{{iten.title}}</dd>
        </dl>
      </div>
      <van-tabs v-model="active" line-width="25%" @click="onClick">
        <van-tab title="热门"></van-tab>
        <van-tab title="手游"></van-tab>
        <van-tab title="端游"></van-tab>
        <van-tab title="查看更多"></van-tab>
      </van-tabs>
      <router-view :propName="obj"></router-view>
      <div class="lunbo">
        <van-swipe :autoplay="3000" width="100%">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <div class="bottom">
          <van-swipe
            style="height: 6.4rem;"
            vertical
            :autoplay="3000"
            :loop="true"
            :show-indicators="false"
          >
            <van-swipe-item v-for="(itme,index) in hint" :key="index">{{itme.title}}</van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="be relieved">
        <div v-for="(item,index) in platform" :key="index">
          <span>{{item.title}}</span>
          <br />
          {{item.content}}
        </div>
      </div>
      <div class="hot-recommend-area">
        <div class="hot-recommend-box">
          <div class="tit">
            <span class="left">热门推荐</span>
            <span class="right">
              <router-link to="/buy">查看更多></router-link>
            </span>
          </div>
          <div class="item-box">
            <div class="item" v-for="(item,index) in recommend" :key="index">
              <img :src="item.content" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="account-recommend-area">
        <div class="account-recommend-box">
          <div class="tit">
            <span class="left">精品账号推荐</span>
          </div>
          <div class="account-recommend-content">
            <div class="text-01">终身找回包赔服务</div>
            <div class="text-02">卖号当天提现 买号售后终身</div>
            <div class="text-03">
              累计
              <span class="number-bold">879842</span>
              卖家开通包赔
            </div>
            <div class="text-04">
              <span>93.63%</span>
              玩家购买包赔账号
            </div>
            <div class="btn-area">
              <div class="u-btn">去了解一下</div>
            </div>
            <div class="item-box">
              <van-swipe
                style="height: 6rem;"
                vertical
                :autoplay="3000"
                :loop="true"
                :show-indicators="false"
              >
                <van-swipe-item v-for="(itme,index) in compensate" :key="index">
                  <p>{{itme.phone}}({{itme.gameName}})获赔</p>

                  <span>￥{{itme.compensateAmount}}</span>
                  <p>{{itme.auditTime}}</p>
                </van-swipe-item>
              </van-swipe>
            </div>
          </div>
        </div>
      </div>

      <div class="list-wrap">
        <div class="tabs-box">
          <div class="tabs-area">
            <div class="tabs-item" v-for="(item,index) in navigation" :key="index">
              <p class="tabs-txt" @click="Switchingdata(item.content)">{{item.title}}</p>
            </div>
          </div>
        </div>

        <div class="list-box">
          <div class="game-account-box" v-for="(item,index) in commodity" :key="index">
            <div class="box-header">
              <img
                src="data:image/png;base64,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"
                alt
              />
              <span>{{item.title}}</span>
            </div>
            <div class="box-center">
              <span>{{item.groupName}}</span>

              <p>￥{{item.originPrice}}</p>
            </div>
            <div class="box-img">
              <img
                src="data:image/png;base64,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"
                alt
              />
              <p>{{item.titleAlias}}</p>
            </div>
            <img :src="item.defaultImg" alt class="jia" />
            <div class="footer">
              <p>终生包赔</p>
              <p>人脸认证</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div>
        <span @click="add">查看更多</span>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload, ImagePreview } from "vant";
import axios from "axios";
import { Getdata } from "../api/Getdata.js";
import BScroll from "@better-scroll/core";
Vue.use(Lazyload);
export default {
  data() {
    return {
      headline: [],
      active: 0,
      body: [],
      obj: {},
      images: [],
      hint: [],
      platform: [],
      recommend: [],
      compensate: [],
      navigation: [],
      commodity: [],
      number: 0,
      gameId: "A2705"
    };
  },
  methods: {
    add() {
      this.number++;
      Getdata.post("/goods-service-api/api/goods/list", {
        pageNum: this.number,
        pageSize: 20,
        gameId: this.gameId,
        gtid: "100003",
        minPrice: 500
      }).then(res => {
        this.commodity = [...this.commodity, ...res.data.body.results];
      });
    },
    onClick(name, title) {
      if (title == "热门") {
        this.obj = this.body.allHotGames;
      } else if (title == "手游") {
        this.obj = this.body.clientHotGames;
      } else if (title == "端游") {
        this.obj = this.body.mobileHotGames;
      } else if (name == 3) {
        this.$store.commit("bottomNav/alternum", 1);
        this.$router.push({
          path: "/buy"
        });
      }
    },
    Switchingdata(string){
      this.gameId = string
      Getdata.post("/goods-service-api/api/goods/list", {
        pageNum: this.number,
        pageSize: 20,
        gameId: this.gameId,
        gtid: "100003",
        minPrice: 500
      }).then(res => {
        console.log(res);
        this.commodity = res.data.body.results
      });
    }
  },
  created() {
    Getdata.get(
      "/conf-service-api/api/postion/list?positionName=APP%E9%A6%96%E9%A1%B5%E9%A1%B6%E9%83%A8%E7%B1%BB%E7%9B%AE"
    ).then(res => {
      this.headline = res.data.body;
    }),
      Getdata.get("/conf-service-api/api/m/conf/hot-games").then(res => {
        this.body = res.data.body;
        this.obj = res.data.body.allHotGames;
      }),
      Getdata.get(
        "/conf-service-api/api/postion/list?positionName=APP%E9%A6%96%E9%A1%B5banner%E8%BD%AE%E6%92%AD%E5%9B%BE"
      ).then(res => {
        let arr = [];
        res.data.body.forEach(element => {
          arr.push(element.content);
        });
        this.images = arr;
      }),
      Getdata.post("/help-service-api/api/article/query/list-cache", {
        bigCategoryName: "新闻公告",
        retSize: 5,
        siteDomain: "www.7881.com",
        smallCategoryName: "新闻公告"
      }).then(res => {
        this.hint = res.data.body;
      }),
      Getdata.get(
        "/conf-service-api/api/postion/list?positionName=APP%E9%A6%96%E9%A1%B53%E5%9D%97%E7%8A%B6%E5%B9%BF%E5%91%8A"
      ).then(res => {
        this.platform = res.data.body;
      }),
      Getdata.get(
        "/conf-service-api/api/postion/list?positionName=APP%E9%A6%96%E9%A1%B5%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90"
      ).then(res => {
        // console.log(res.data);
        this.recommend = res.data.body;
      }),
      Getdata.get("order-service-api/api/find-back/recover-result").then(
        res => {
          this.compensate = res.data.body;
        }
      ),
      Getdata.get(
        "/conf-service-api/api/postion/list?positionName=APP%E9%A6%96%E9%A1%B5%E7%B2%BE%E5%93%81%E8%B4%A6%E5%8F%B7%E6%8E%A8%E8%8D%90"
      ).then(res => {
        console.log(res.data.body);
        this.navigation = res.data.body;
      }),
      Getdata.post("/goods-service-api/api/goods/list", {
        pageNum: this.number,
        pageSize: 20,
        gameId: "A2705",
        gtid: "100003",
        minPrice: 500
      }).then(res => {
        this.commodity = res.data.body.results;
      });
  }
};
</script>
<style src="../assets/css/Home.css" scoped></style>
<style lang="less" scoped>
</style>