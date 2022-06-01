import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import basicInfo from "../pages/basicInfo";
import test from "../components/test";
import result from "../pages/result";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'basicInfo',
      component: basicInfo
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
    ,
    {
      path: '/test',
      name: 'test',
      component: result
    }
  ]
})
