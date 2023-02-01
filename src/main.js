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

//按需引入Element-ui
import { Button, MessageBox } from 'element-ui'

//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

//注册为全局组件
Vue.component(Button.name,Button);
//ElementUI注册为全局组件的时候，还有一种写法，挂载在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入mockServer.js----mock数据
import '@/mock/mockServe';

//引入swiper样式
import "swiper/css/swiper.css";

//引入表单校验插件
import "@/plugins/validate";

//引入所有请求API
import * as API from '@/api'

//引入vue-lazyload图片懒加载 插件
import VueLazyload from 'vue-lazyload'
//引入默认加载的图片
import sph from '@/assets/shangpinhui.jpeg'
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认的图片
  loading: sph
})

new Vue({
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由：底下的谢凤孙KV一致省略V【router小写的】
  //注册路由信息，当这里书写router的时候，组件身上都拥有$route，$router属性
  router,
  //注册仓库，组件实例的身上会多一个$store属性
  store
}).$mount('#app')
