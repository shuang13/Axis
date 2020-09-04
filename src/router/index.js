import Vue from 'vue'
import Router from 'vue-router'
import Axis from '@/components/Axis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Axis',
      component: Axis
    }
  ]
})
