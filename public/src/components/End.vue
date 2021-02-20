<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-19 16:10:18
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-19 14:55:41
-->
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-19 16:02:26
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-19 16:06:44
-->
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:39:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-07 14:49:57
-->
<template>
  <div>
      <van-tabbar  route active-color="#1989fa" >
      <van-tabbar-item  name="home" icon="home-o" to='/'>首页</van-tabbar-item>
      <van-tabbar-item  name="home" icon="search" to="/main" badge="2">分类</van-tabbar-item>
      <van-tabbar-item name="home" icon="cart-o" to="/pay" :dot='true'>购物车</van-tabbar-item>
      <van-tabbar-item name="home" icon="manager-o" to="/mine">我的</van-tabbar-item>
      
    </van-tabbar>
  </div>
</template>

<script>

export default {
    data(){
      return {
        active:0
      }
    }
}
</script>

<style>

</style>