<template>
  <div>
    <div class="topDiv">
      <img v-for="(item,index) in imge" :key="index" :src="item" alt />
    </div>
    <van-swipe :autoplay="3000" class="banner" :touchable="false">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="stepDiv">
      <ul>
        <li  v-for="(ite,index) in lis" :key="index"><img :src="ite[0]" alt="">
        {{ite[1]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload, ImagePreview } from "vant";
import axios from "axios";
import {Getdata} from "../api/Getdata.js"

Vue.use(Lazyload);
export default {
  data() {
    return {
      imge: [
        "http://www.geilisx.com/public/Mobile/images/wap_catalog.png",
        "http://www.geilisx.com/public/Mobile/images/logo.png",
        "http://www.geilisx.com/public/Mobile/images/wap_search.png"
      ],
      images: [
        "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5Gia2ARS31AACpB-LsCdE4856717",
        "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GiaWAVnGfAAC3B-z8J2c7045126",
        "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GiYWAPztqAAD0akkXmFo1618513",
        "http://image-python.itheima.net/group1/M00/00/01/rBAAlV5GiZaAN7tcAAETwXb_pso9087865"
      ],
      lis: [['http://www.geilisx.com/public/Mobile/images/nav-3.png','蔬菜豆菇'],
              ['http://www.geilisx.com/public/Mobile/images/nav-4.png','新鲜水果'],
              ['http://www.geilisx.com/public/Mobile/images/nav-5.png','鲜肉蛋禽'],
              ['http://www.geilisx.com/public/Mobile/images/nav-6.png','水产海鲜'],
              ['http://www.geilisx.com/public/Mobile/images/nav-7.png','速食速冻'],
              ['http://www.geilisx.com/public/Mobile/images/nav-8.png','粮油副食'],
              ['http://www.geilisx.com/public/Mobile/images/nav-9.png','酒类'],
              ['http://www.geilisx.com/public/Mobile/images/nav-10.png','牛奶饮料'],
              ['http://www.geilisx.com/public/Mobile/images/nav-11.png','日用百货'],
              ['http://www.geilisx.com/public/Mobile/images/nav-12.png','关于我们']
      
      
      
      
      ]
    };
  },
  created() {
    Getdata.post("/Mobile/Index/loadProductInfo.html").then(res => {
      console.log(res);
    })
  }
};
</script>

<style lang="less" scoped>
.topDiv {
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 2rem;
  background-color: #fff;
  align-items: center;
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  img:nth-of-type(2) {
    height: 6rem;
    width: 22rem;
  }
}
.banner{
  height: 23.1rem;
  img{
    width: 100%;
  }
}
.stepDiv {
  height: 24.2rem;
  background-color: #fff;
  ul{
    display: flex;
    flex-wrap: wrap;
    padding-top:1rem ;
    li{
      width: 20%;
      height: 12rem;
      display: flex;flex-direction: column;
     justify-content: center;
     align-items: center;
      img{
        width: 7.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>