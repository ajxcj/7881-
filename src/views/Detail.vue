<template>
  <div id="app">
    <section>
      <!-- 顶部导航 -->
      <div class="nav">
        <ul>
          <li class="active">蔬菜豆菇</li>
          <li>新鲜水果</li>
          <li>鲜肉蛋禽</li>
          <li>速食速冻</li>
          <li>粮油副食</li>
          <li>水产海鲜</li>
          <li>酒类</li>
          <li>牛奶饮品</li>
          <li>日用百货</li>
        </ul>
      </div>

      <main>
        <!-- 侧边导航 -->
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="不限" />
          <van-sidebar-item title="精品蔬菜" />
          <van-sidebar-item title="豆类制品" />
          <van-sidebar-item title="叶菜类" />
          <van-sidebar-item title="根茎类" />
          <van-sidebar-item title="茄果类" />
          <van-sidebar-item title="新菌菇类" />
          <van-sidebar-item title="葱蒜调味类" />
          <van-sidebar-item title="有机蔬菜" />
          <van-sidebar-item title="方便净菜" />
        </van-sidebar>

        <!-- 商品内容区 -->
        <div class="right_prolist">
          <div class="prolist_boxs">
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
            <div class="pro_item">
              <img
                src="http://www.geilisx.com/uploads/images/products/50a84e6322ce9.jpg"
                alt=""
              />
              <h3>苦瓜 &nbsp;(<span>500g</span>)</h3>
              <h4>$ <span>7.00</span>/ <span>500.00g</span></h4>
              <h5>售出 <span>126</span>件,共0条评论</h5>
              <img
                src="http://www.geilisx.com/public/Mobile/images/car_icon.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
</script>
<style src="../assets/css/reset.css" scoped></style>
<style src="../assets/css/detail.css" scoped></style>
<style lang="less" scoped>
</style>