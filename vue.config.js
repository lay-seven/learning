const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 方式一
  // devServer: {
  //   // 开启代理服务器 无法开启多个代理服务
  //   proxy:'http://localhost:5000'
  // },

  // 方式二
  // devServer: {
  //   // 开启代理服务器
  //   proxy: {
  //     // 请求前缀
  //     '/api': {// 匹配所有以'/api'开头的请求路径
  //       target: 'http://localhost:5000',
  //       pathRewrite:{'^/api':''},
  //       ws: true,//用于支持Websocket
  //       // changeOrigin:true // 向服务端说谎，控制请求头中的host值
  //     },
  //     // 
  //     // '/foo': {
  //     //   target:'<other_url>'
  //     // }
  //   }
  // },
})
