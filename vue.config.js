const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //跨域问题
  // devServer:{
  //   proxy:{
  //     './api':{
  //       target:'',

  //     }
  //   }
  // }
})
