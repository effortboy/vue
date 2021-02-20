/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:34:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-20 16:53:04
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/goodsdetail',
    name: 'goodsdetail',
    component: () => import( '../views/Goodsdetail.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: () => import( '../views/Index.vue'),
  },
  {
    path: '/main',
    name: 'mian',
    component: () => import( '../views/Main.vue'),
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import( '../views/Pay.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import( '../views/Mine.vue'),
  }   
];

const router = new VueRouter({
  routes
});

export default router;
