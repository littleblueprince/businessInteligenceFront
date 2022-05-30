import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
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
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
