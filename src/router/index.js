import Vue from 'vue'
import Router from 'vue-router'
import Axis from '@/components/Axis'
import Index from '@/components/Index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/axis',
      name: 'Axis',
      component: Axis
    }
  ]
})
