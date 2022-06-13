<template>
  <div>
    <div class="big" v-loading.fullscreen.lock="bol">
      <div class="list-item" v-for="(item,index) in key" :key="index" loding>
        <span>{{item.phone}}</span>
        <span>{{item.gameName}}</span>
        <span>刚刚估值</span>
        <span>￥{{item.estMaxPrice}}</span>
      </div>
    </div>
    <div class="big">
      <div class="list-item" v-for="(item,index) in key" :key="index">
        <span>{{item.phone}}</span>
        <span>{{item.gameName}}</span>
        <span>刚刚估值</span>
        <span>￥{{item.estMaxPrice}}</span>
      </div>
    </div>
  </div>
</template>
<script>
setInterval(() => {}, 3000);
</script>
<script>
import { Getdata } from "../api/Getdata.js";
export default {
  mounted() {
    let big = document.getElementsByClassName("big");
    // let big = document.getElementsByClassName("big");

    // let time = setInterval(() => {
    //    this.bol =false
    //    clearInterval(time)
    // }, 1000);
    // let i = 5
    //  let k = 5
    // setInterval(() => {
    //   i = i-5
    //   big[0].style.transform = `translateY(${i}rem)`
    //   if(i==-170){
    //      big[0].style.transform = `translateY(35rem)`
    //         i = 30
    //   }
    // }, 1000);
    // setInterval(() => {
    //   k = k - 5
    //   big[1].style.transform = `translateY(${k}rem)`
    //   if(k==-270){
    //      big[1].style.transform = `translateY(75rem)`
    //         k = -70
    //   }
    // }, 1000);
  },
  created() {
    Getdata.get("/goods-service-api/api/untoken/est/case-record").then(res => {
      this.key = res.data.body.recordInfo;
      this.bol = false;
      let k = 0;
      let time = setInterval(() => {
        k++;
        this.key.splice(0, 1);
        if (this.key.length == 14) {
          k = 0;
          Getdata.get("/goods-service-api/api/untoken/est/case-record").then(
            res => {
              this.key = [...this.key, ...res.data.body.recordInfo];
            }
          );
        }
      }, 2000);
    });
  },
  data() {
    return {
      key: null,
      bol: true
    };
  },
  beforeDestroy() {
    if (this.time) {
      clearInterval(this.time);
    }
  }
};
</script>

<style scoped lang="less">
.jia {
  margin-top: -8.5%;
}
.big {
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: 1s;
}
.list-item {
  display: flex;
  transition: 1s;
  align-items: center;
  height: 5rem;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 5rem;
  justify-content: space-between;
  span {
    display: inline-block;
    margin-left: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span:nth-of-type(1) {
    color: #ff6300;
    margin-left: 2.5rem;
  }
  span:nth-of-type(2) {
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 5rem;
    color: #303133;
  }
  span:nth-of-type(3) {
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 5rem;
    color: #303133;
  }
  span:nth-of-type(4) {
    color: #ff6300;
  }
}
</style>
