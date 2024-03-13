// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'       // './App.vue' 的简写
import router from './router' // './router/index.js' 的简写
// 引入elementUI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用ElementUI插件
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,               // router: router
  components: { App },  // {'App': App} 的简写，因为属性和值名称相同，根据es6标准，可以这么简写
  template: '<App/>'    // 对应于字符串 'App'
})
