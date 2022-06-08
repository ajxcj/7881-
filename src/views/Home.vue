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
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload, ImagePreview } from "vant";
import axios from "axios";
import { Getdata } from "../api/Getdata.js";

Vue.use(Lazyload);
export default {
  data() {
    return {
      headline: [],
      active: 0,
      body: [],
      obj: {}
    };
  },
  methods: {
    onClick(name, title) {
      if (title == "热门") {
        this.obj = this.body.allHotGames;
      } else if (title == "手游") {
        this.obj = this.body.clientHotGames;
      } else if (title == "端游") {
        this.obj = this.body.mobileHotGames;
      }
    }
  },
  created() {
    Getdata.get(
      "/conf-service-api/api/postion/list?positionName=APP%E9%A6%96%E9%A1%B5%E9%A1%B6%E9%83%A8%E7%B1%BB%E7%9B%AE"
    ).then(res => {
      this.headline = res.data.body;
    }),
      Getdata.get("/conf-service-api/api/m/conf/hot-games").then(res => {
        console.log(res.data.body);
        this.body = res.data.body;
        this.obj = res.data.body.allHotGames;
      });
  }
};
</script>
<style src="../assets/css/Home.css" scoped></style>
<style lang="less" scoped>
</style>