/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Seven
 * @Date: 2021-01-07 14:34:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-02-22 17:19:40
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css';
import axios from 'axios';
import End from './components/End'
import First from './components/First'
import {Lazyload} from 'vant';
import Vant from 'vant';
import { TreeSelect } from 'vant';
import { Card } from 'vant';
import { Search } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Search);
Vue.use(Card);
Vue.use(TreeSelect);
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.component("end",End)
Vue.component("first",First)
Vue.prototype.$axios = axios;
// 使用 vant
Vue.use(Vant)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
