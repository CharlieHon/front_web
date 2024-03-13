import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Hsp from '@/components/Hsp'
import Homework from '@/components/Homework'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    { // 配置一组路由
      path: '/hsp',
      name: 'Hsp',
      component: Hsp
    },
    {
      path: '/homework',
      name: 'Homework',
      component: Homework
    }
  ]
})
