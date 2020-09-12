import Vue from 'vue'
import Router from 'vue-router'
import Axis from '@/components/Axis'
import Drag from '@/components/Drag'
import Index from '@/components/Index'
import Test from '@/components/Test'

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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
