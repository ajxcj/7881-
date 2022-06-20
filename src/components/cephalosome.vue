<template>
  <div>
    <div class="center">
      <van-collapse v-model="activeNames" accordion @change = "change">
        <van-collapse-item :title="gttyname" name="1">
          <van-grid class="jia">
            <van-grid-item
              :text="iten.gtidname"
              v-for="iten in gttype"
              :key="iten.gtid"
              @click="handd(iten.gtidname)"
            />
          </van-grid>
        </van-collapse-item>
        <van-collapse-item :title="title2" name="2">
          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            @click-nav="onNavClick"
            @click-item="ItemClick"
          />
        </van-collapse-item>
        <van-collapse-item :title="option1[num].text" name="3">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option1" @change="closed" />
          </van-dropdown-menu>
        </van-collapse-item>
      </van-collapse>
    </div>

    <section>
      <div class="game-currency-item">
        <div class="top">
          <span>卖家发货</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Getdata } from "../api/Getdata.js";
export default {
  data() {
    return {
      activeNames: "",
      gttype: [],
      gttyname: "游戏币",
      items: [],
      activeId: 0,
      activeIndex: 0,
      value: 0,
      option1: [
        { text: "默认排序", value: 0 },
        { text: "比例最好", value: 1 },
        { text: "总价低到高", value: 2 },
        { text: "总价高到低", value: 3 },
        { text: "发货最快", value: 4 },
        { text: "最新发布", value: 5 }
      ],
      title2: "区服",
      num: 0
    };
  },
  created() {
    Getdata.get("/basic/api/game-detail?gameId=G10&openChannel=m").then(res => {
      this.gttype = res.data.body.gttype;
      console.log(res.data.body.list);
      let arr = [];

      res.data.body.list.forEach(element => {
        let obj = {};
        obj.text = element.name;
        if (element.children) {
          obj.children = [];
          element.children.forEach((ele, idx) => {
            let bj = {};
            bj.id = idx;
            bj.text = ele.name;
            obj.children.push(bj);
          });
        }
        arr.push(obj);
      });
      this.items = arr;
      console.log(this.items);
    });
  },
  methods: {
    onNavClick(index) {
      console.log(index);
    },
    ItemClick(data) {
      this.title2 = data.text;
       this.activeNames = ""
    },
    closed(value) {
      this.activeNames = "";
      this.num = value;
    },
    handd(e){
 
      this.gttyname = e
      this.activeNames = ""
    },
    change(e){
      
    }
  }
};
</script>

<style lang="less" scoped>
// .van-collapse-item {
//   background-color: #ff7400;
//   border: 1px solid #ff7400;
// }
.van-collapse-item__content {
  padding: 0px;
}
.center {
  width: 100%;
  display: flex;
  .active {
    background-color: rgb(255, 222, 204);
  }
  .van-collapse {
    width: 100%;
  }
  .van-collapse-item {
    width: 100%;
  }
}
section {
  .game-currency-item {
    box-sizing: border-box;
    padding: 16px;
    background: #fff;
    position: relative;
    .top {
      span {
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 700;
        color: #37cdaf;
      }
    }
  }
}
</style>
