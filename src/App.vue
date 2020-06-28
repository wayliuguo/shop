<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ul class="footer-bar">
      <li class="footer-bar-item">
        <router-link to="/">首页</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/category">分类</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/cart">购物车</router-link>
      </li>
      <li class="footer-bar-item">
        <router-link to="/profile">我的</router-link>
      </li>
    </ul> -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="records">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: ''
    }
  }
}
</script>

<style lang="scss">
.footer-bar {
  position: fixed;
  display: flex;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  bottom: 0;
  background-color: #eee;
  &-item {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
