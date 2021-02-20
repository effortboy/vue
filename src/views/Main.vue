<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-19 16:02:26
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-28 13:58:53
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
    <van-tree-select
      height="55vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template slot="content">
        <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" rel="external nofollow"  />
        <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" rel="external nofollow"  />
      </template>
    </van-tree-select>
    <end></end>
  </div>
</template>

<script>

export default {
    data(){
      return {
        name:"内容",
        active: 0,
        items: [{ text: '分组 1' }, { text: '分组 2' }]
      }
    }
}
</script>

<style>

</style>