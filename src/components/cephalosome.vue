<template>
  <div>
    <div class="center">
      <van-collapse v-model="activeNames" accordion>
        <van-collapse-item :title="gttyname" name="1">
          <van-grid class="jia">
            <van-grid-item
              :text="iten.gtidname"
              v-for="iten in gttype"
              :key="iten.gtid"
              @click="gttyname=iten.gtidname"
            />
          </van-grid>
        </van-collapse-item>
        <van-collapse-item title="区服" name="2">
          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            @click-item="value"
          />
        </van-collapse-item>
        <van-collapse-item title="区服" name="3">
          <van-dropdown-menu @closed="closed()">
            <van-dropdown-item v-model="value1" :options="option1" />
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
      value1: 0,
      option1: [
        { text: "默认排序", value: 0 },
        { text: "比例最好", value: 1 },
        { text: "总价低到高", value: 2 },
        { text: "总价高到低", value: 3 },
        { text: "发货最快", value: 4 },
        { text: "最新发布", value: 5 }
      ],
      value: null
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
    closed() {
      this.activeNames = "";
      console.log(1);
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