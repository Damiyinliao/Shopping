<template>
  <div>
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库当中
    this.$store.dispatch('getCategoryList');
  }
}
</script>

<style> 

</style>
