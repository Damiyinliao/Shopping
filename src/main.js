import Vue from 'vue'
import App from './App.vue'
// 关闭生产环境下的提示
Vue.config.productionTip = false
//引入路由
import router from '@/router'
//引入vuex仓库
import store from '@/store'
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav"; 
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination"
//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
//引入mockServer.js----mock数据
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.css";







import { reqGetSearchInfo } from './api'
console.log(reqGetSearchInfo({}));


















new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  //注册路由：底下的谢凤孙KV一致省略V【router小写的】
  //注册路由信息，当这里书写router的时候，组件身上都拥有$route，$router属性
  router,
  //注册仓库，组件实例的身上会多一个$store属性
  store
}).$mount('#app')
