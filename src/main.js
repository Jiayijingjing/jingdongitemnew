import Vue from 'vue';
import App from './App.vue';
import store from './store';
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//注册全局组件
import Nav from '@/components/sanjilist';
Vue.component('Nav',Nav);
Vue.use(ElementUI);

import router from '@/router';
import 'swiper/css/swiper.css' ;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
