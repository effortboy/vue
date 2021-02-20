<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-02-19 14:54:39
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-20 11:58:31
-->
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
    <div class="Mhead"></div>
    <div class="Mcenter">
        <div>
            <img src="../assets/1.jpg" alt="">
            <p>昵称</p>
        </div>
        <div>
            <div v-for="(item) in list" :key="item.key">
                <img src="../assets/1.jpg" alt="">
                <p>{{item}}</p>
            </div>
        </div>
    </div>
    <div class="Mend">
        <div v-for="(item,i) in list1" :key="item.key" @click="getbackgroud(i)" :class="[index == i ? bkClass:'']">
            <div>
                <div class="Mleft">
                    <img src="../assets/1.jpg" alt="">
                    <p>{{item}}</p>
                </div>
                <div>></div>
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
        name:"个人中心",
        list:['代发货','待收货','待评价','全部订单'],
        list1:['我的收藏','地址管理','尺码对照表','帮助中心','意见反馈','关于我们'],
        index:-1,
        bkClass:'bk'
      }
    },
    methods:{
        getbackgroud:function(i){
            this.index = i;
        }
    }
}
</script>

<style>
.Mhead{
    width: 100%;
    height: 10rem;
    /* background: red;
     */
    background:url("../assets/1.jpg");
    background-size:100% 100%;
    background-repeat:no-repeat;
}
.Mcenter{
    width: 90%;
    height: 13rem;
    position:fixed;
    background: white;
    top:8rem;
    left: 5%;
    right: 5%;
    border-radius: 0.8rem;
     box-shadow:0px 3rem 2rem -5rem #333333;
    border: 0.1rem solid #F4F4F4;
    
}
.Mcenter>div:nth-child(1){
    width: 90%;
    height: 50%;
    margin: 0 auto;
    /* background: black; */
    border-bottom: 0.15rem solid #F4F4F4;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.Mcenter>div:nth-child(1)>img{
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
}
.Mcenter>div:nth-child(1)>p{
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: bold;
}
.Mcenter>div:nth-child(2){
    width: 90%;
    height: 50%;
    margin: 0 auto;
    /* background: black; */
    /* border-bottom: 0.15rem solid #F4F4F4; */
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: space-around;
}
.Mcenter>div:nth-child(2) div{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: red; */
    justify-content: center;
    box-sizing: border-box;
    padding-top: 0.5rem;
}
.Mcenter>div:nth-child(2) div>img{
    width: 2rem;
    height: 2rem;

}
.Mcenter>div:nth-child(2) div>p{
    font-size: 1rem;
    /* font-weight: bold; */

}
.Mend{
    width: 100%;
    height: 30rem;
    /* background: blue; */
    box-sizing: border-box;
    padding-top: 10rem;
    overflow-y: scroll;
    padding-bottom: 5rem;

}
.Mend>div{
    width: 100%;
    height: 3.5rem;
    border-bottom: 0.1rem solid #F4F4F4;
}
.bk{
    background: #F6F6F6;
}
.Mend>div>div{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    /* background: black; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.Mleft{
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
}
.Mleft>img{
    width: 2rem;
    height: 2rem;
}
.Mleft>p{
    margin-left: 2rem;
}

</style>