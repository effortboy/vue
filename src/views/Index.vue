<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:39:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-19 17:12:56
-->
<template>
  <div>
    <first :name="name"></first>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue" >
      <van-swipe-item v-for="(image, index) in images" :key="index">
         <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="4">
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <end></end>
  </div>
</template>

<script>
export default {
    data(){
      return {
        name:'首页',
        images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
      }
    }
}
</script>

<style>
/* .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
} */
img{
  width: 100%;
  height: 15rem;
}
</style>