<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:39:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-22 17:23:05
-->
<template>
  <div>
    <first :name="name"></first>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
         <img v-lazy="image" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/{{images.length}}
      </div>
    </van-swipe>
    <div class="center">
      <p>你打算大苏打萨达你打算大苏打萨达你打算大苏打萨达你打算大苏打萨达你打算大苏打萨达</p>
      <div>
        ￥<div class="prize">13</div>
      </div>
    </div>
    <div class="goodsdetail">
      <div>图片详情</div>
      <img src="../assets/1.jpg" alt="">
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data(){
      return {
        current:0,
        name:'商品详情',
        images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        value: '',
        goods:[{'id':1,'title':'旺财的世界周游史','prize':25,'num':30},{'id':2,'title':'旺财的世界周游史2','prize':45,'num':50},{'id':3,'title':'旺财的世界周游史3','prize':75,'num':80},{'id':4,'title':'旺财的世界周游史4','prize':105,'num':120},{'id':5,'title':'旺财的世界周游史5','prize':125,'num':230},{'id':6,'title':'旺财的世界周游史6','prize':105,'num':430}]
      }
    },
    methods:{
      onChange(index) {
        this.current = index;
      },
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
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
.custom-indicator{
  position:absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 0.2rem;
}
.center{
  width: 100%;
  height: 7rem;
  background: blanchedalmond;
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.center>p{
  margin: 0;
  display: block;
  width: 100%;
  height: 3rem;
  /* background: white; */
  font-size: 1.2rem;
  /* white-space: inherit; */
  font-weight: bold;
}
.center>div{
  width: 90%;
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  color: orangered;
  align-items: center;
}
.prize{
  font-size: 1.9rem;
  margin-right: 0.5rem;

}
.goodsdetail{
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
}
.goodsdetail>div{
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.goodsdetail>img{
  width: 100%;
}
</style>