import Vue from 'vue';
import App from './App.vue';
import store from './store';

//注册全局组件
import Nav from '@/components/sanjilist';
Vue.component('Nav',Nav);

import router from '@/router';
import 'swiper/css/swiper.css' ;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
