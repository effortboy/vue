<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-19 16:22:35
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-19 17:15:06
-->
<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-19 16:10:18
 * @LastEditors: Seven
 * @LastEditTime: 2021-01-19 16:10:26
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
      <div class="content">{{name}}</div>
  </div>
</template>

<script>

export default {
  props:["name"]
}
</script>

<style>
.content{
    width:100%;
    height: 3.5rem;
    background: black;
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size:1rem;
}
</style>