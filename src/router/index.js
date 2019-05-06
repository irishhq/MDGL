import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserManager from '@/components/Sys/UserManager'
import TrainerManager from '@/components/Ppo/TrainerManager'

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
        {
          path: 'Ppo/TrainerManager',
          name: 'TrainerManager',
          component: TrainerManager
        },//医师管理
      ]
    },
  ]
})
