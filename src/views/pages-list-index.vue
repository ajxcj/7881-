<template>
  <div class="cephalosome">
     <div class="top">
      <van-icon name="arrow-left" size="4rem" color="#fff" @click="to" />
      <span>地下城与勇士</span>
      <div class="shousuo">
        <!-- <van-icon name="search" size="4rem" color="#fff" /> -->
        <!-- <input placeholder="快捷搜索" /> -->
        <van-search v-model="value" placeholder="快捷搜索" background="transparent"  shape="round" />
      </div>
    </div>
    <cephalosome />

  </div>
</template>

<script>
import cephalosome from "../components/cephalosome.vue";
export default {
  components: {
    cephalosome
  },methods: {
    to() {
      this.$router.push("/home")
    }
  },data() {
    return {
      value:null
    }
  },
};
</script>

<style lang="less" scoped>
.cephalosome {
  height: 100%;
  overflow: hidden;
  
  width: 100%;}
input::-webkit-input-placeholder {
  color: #fff;
}
.top {
  height: 8.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 3.2rem;
  box-sizing: border-box;
  justify-content: space-between;
  background: linear-gradient(270deg, #ff9700, #ff7400);
  span {
    margin-left: 3.2rem;
    font-size: 3.6rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 32rem;
  }
  .shousuo {
    width: 23.7rem;
    height: 6.4rem;
    // background: rgba(244, 248, 251, 0.2);
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding-left: 2rem;
    input {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      font-size: 3rem;
      color: #fff;
    }
  }
}
</style>