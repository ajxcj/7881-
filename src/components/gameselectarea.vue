<template>
  <div>
    <div class="center">
      <div class="game-item" v-for="(item,index) in propName" :key="index" @click="to">
        <img :src="'https://pic.7881.com/7881/market/images/game_logo/'+item.gameId+'.png'" alt />
        <span>{{item.alias}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {Getdata} from "../api/Getdata.js"
export default {
  props: {
    propName: {}
  },
  methods: {
    to() {
      this.$router.push("/pages-list-index")
    }
  },
};
</script>
<style src="../assets/css/gameselectarea.css" scoped>
</style>
<style lang="less" scoped>
</style>