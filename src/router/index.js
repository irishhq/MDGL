import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserManager from '@/components/Sys/UserManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'Sys/UserManager',
          name: 'UserManager',
          component: UserManager
        },
      ]
    },
  ]
})
