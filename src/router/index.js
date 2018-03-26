import Vue from 'vue'
import Router from 'vue-router'
import VueFire from 'vuefire'
import Intro from '@/components/Intro'
import Dashboard from '@/components/Dashboard'
import Animate from 'animate.css'

Vue.use(Animate)
Vue.use(Router)
Vue.use(VueFire)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
