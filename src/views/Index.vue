<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:39:45
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-20 16:26:21
-->
<template>
  <div>
    <first :name="name"></first>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
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
    <div class="comm">
      <div class="dange" v-for="(item) in goods" :key="item.key">
        <img src="../assets/1.jpg" alt="">
        <div>
          <p>{{item.title}}</p>
          <div>
            ￥<div class="prize">
              {{item.prize}}元
            </div>
            <div class="compete">{{item.num}}人已付款</div>
          </div>
        </div>
      </div>
    </div>
    <end></end>
  </div>
</template>

<script>
export default {
    data(){
      return {
        name:'旺财商城',
        images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        value: '',
        goods:[{'id':1,'title':'旺财的世界周游史','prize':25,'num':30},{'id':2,'title':'旺财的世界周游史2','prize':45,'num':50},{'id':3,'title':'旺财的世界周游史3','prize':75,'num':80},{'id':4,'title':'旺财的世界周游史4','prize':105,'num':120},{'id':5,'title':'旺财的世界周游史5','prize':125,'num':230},{'id':6,'title':'旺财的世界周游史6','prize':105,'num':430}]
      }
    },
    methods:{
      onSearch() {
        console.log(this.value);
      },
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
.comm{
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
  padding-top: 1rem;
  margin-bottom: 5rem;
}
.dange{
  width: 45%;
  height: 20rem;
  /* background: black; */
  border-radius: 0.5rem;
  margin: 0 0 1rem 3.2%;
  border: 0.15rem solid #F4F4F4;
  box-sizing: border-box;
  overflow: hidden;
}
.dange>img{
  width: 100%;
  height: 60%;
  /* border-radius: 1rem 1rem 0 0; */
}
.dange>div{
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.dange>div>p{
    font-size: 1.2rem;
    /* box-shadow: black; */
    display: block;
    margin: 0;
    overflow-wrap: anywhere;
    width: 90%;
    height: 5rem;
    /* text-align: center; */
}
.dange>div>div{
  width: 90%;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  color: orangered;
  align-items: center;
}
.prize{
  font-size: 1.2rem;
  margin-right: 0.5rem;

}
.compete{
  font-size: 0.5rem;
  color: darkgray;
}
</style>