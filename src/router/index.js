import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserManager from '@/components/Sys/UserManager'
import TrainerManager from '@/components/Ppo/TrainerManager'
import DiseaseTypes from '../components/Res/DiseaseTypes'
import ProjectConfiguration from '../components/Res/ProjectConfiguration'
import MarkedWords from '../components/Res/MarkedWords'
import TrainingRecords from '../components/Tra/TrainingRecords'
import VoucherCenter from '../components/New/VoucherCenter'
import CourseNotice from '../components/New/CourseNotice'
import TrainingNotification from '../components/New/TrainingNotification'
import SystematicNotification from '../components/New/SystematicNotification'
import SystemAnnouncement from '../components/New/SystemAnnouncement'
import RechargeRecord from '../components/Rec/RechargeRecord'
import RechargeType from '../components/Rec/RechargeType'


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
        {
          path: 'Res/DiseaseTypes',
          name:'DiseaseTypes',
          component:DiseaseTypes
        },//症状类型
        {
          path: 'Res/ProjectConfiguration',
          name:'ProjectConfiguration',
          component:ProjectConfiguration
        },//项目配置
        {
          path: 'Res/MarkedWords',
          name:'MarkedWords',
          component:MarkedWords
        },//提示语
        {
          path: 'Tra/TrainingRecords',
          name:'TrainingRecords',
          component:TrainingRecords
        },//训练记录
        {
          path: 'New/VoucherCenter',
          name:'VoucherCenter',
          component:VoucherCenter
        },//充值通知
        {
          path: 'New/CourseNotice',
          name:'CourseNotice',
          component:CourseNotice
        },//课程通知
        {
          path: 'New/TrainingNotification',
          name:'TrainingNotification',
          component:TrainingNotification
        },//训练通知
        {
          path: 'New/SystematicNotification',
          name:'SystematicNotification',
          component:SystematicNotification
        },//系统通知
        {
          path: 'New/SystemAnnouncement',
          name:'SystemAnnouncement',
          component:SystemAnnouncement
        },//系统公告
        {
          path: 'Rec/RechargeRecord',
          name:'RechargeRecord',
          component:RechargeRecord
        },//充值记录
        {
          path: 'Rec/RechargeType',
          name:'RechargeType',
          component:RechargeType
        },//充值类型
      ]
    },
  ]
})
