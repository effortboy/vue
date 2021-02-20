<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:39:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-20 16:46:37
-->
<template>
  <div>
    <first :name="name"></first>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue" >
      <van-swipe-item v-for="(image, index) in images" :key="index">
         <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    data(){
      return {
        name:'商品详情',
        images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        value: '',
        goods:[{'id':1,'title':'旺财的世界周游史','prize':25,'num':30},{'id':2,'title':'旺财的世界周游史2','prize':45,'num':50},{'id':3,'title':'旺财的世界周游史3','prize':75,'num':80},{'id':4,'title':'旺财的世界周游史4','prize':105,'num':120},{'id':5,'title':'旺财的世界周游史5','prize':125,'num':230},{'id':6,'title':'旺财的世界周游史6','prize':105,'num':430}]
      }
    },
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