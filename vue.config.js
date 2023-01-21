const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {   //表示前端发起请求时，请求路径中带有/api就进行转发，找服务器要数据
        target:"http://gmall-h5-api.atguigu.cn"     //target表示目标服务器
      }
    }
  }
})
