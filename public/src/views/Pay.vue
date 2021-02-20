<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-19 16:02:26
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-28 14:42:30
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
    <first :name="name"></first>
    <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
        <div slot="tags">
            <van-tag plain type="danger">标签</van-tag>
            <van-tag plain type="danger">标签</van-tag>
        </div>
        <div slot="footer">
            <van-button size="mini">按钮</van-button>
            <van-button size="mini">按钮</van-button>
        </div>
    </van-card>
    <end></end>
  </div>
</template>

<script>

export default {
    data(){
      return {
        name:"购物车",
      }
    }
}
</script>

<style>

</style>