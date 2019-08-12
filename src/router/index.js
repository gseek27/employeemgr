import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import newemployee from '@/components/newemployee'
import viewemployee from '@/components/viewemployee'
import editEmployee from '@/components/editEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: newemployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: editEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: viewemployee
    }
  ]
})
