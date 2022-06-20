<!--
  文件描述：无缝滚动组件
-->
<template>
  <div class v-loading.fullscreen.lock="bool">
    <div class="page-example3" style>
      <vue-seamless-scroll :data="data" :class-option="defaultOption">
        <ul class="ul-scoll">
          <li v-for="(item, index) in data" :key="index">
            <span class="phone">{{item.phone}}</span>
            <span class="name">{{item.gameName}}</span>
            <span>刚刚估值</span>
            <span class="Price">￥{{item.estMaxPrice}}</span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>
 
<script>
import { Getdata } from "../api/Getdata.js";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: "Example3",
  components: {
    vueSeamlessScroll
  },
  data() {
    // 这里存放数据
    return {
      data: [],
      bool:true
    };
  },
  // 监听属性 类似于data概念
  computed: {
    defaultOption() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  },
  // 方法集合
  methods: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    Getdata.get("/goods-service-api/api/untoken/est/case-record").then(res => {
      this.data = res.data.body.recordInfo;
      this.bool = false
    });
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
   
  }
};
</script>
 
<style scoped lang="less">
//@import url(); 引入公共css类
.page-example3 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .ul-scoll {
    li {
      margin-top: 0.6rem;
      padding: 0.5rem;
      
      span {
        display: inline-block;
        margin-left: 1rem;
      }
      .phone {
        color: #ff6300;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.5rem;
      }
      .name {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.5rem;
        color: #303133;
      }
      .Price {
        color: #ff6300;
        height: 2.5rem;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.5rem;
      }
    }
  }
}
</style>