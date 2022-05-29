import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import index from '@/pages/index'
import navBar from '@/components/navBar'
import basicInfo from "../pages/basicInfo";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basicInfo',
      component: basicInfo
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
    ,
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/navBar',
      name: 'navBar',
      component: navBar
    }
  ]
})
