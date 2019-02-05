import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Vuex from 'vuex'
const Contact = { template: '<p>contact page</p>' }
const Policy = { template: '<p>policy page</p>' }
const NotFoundComponent = { template: '<p>This page cannot be found!</p>' }

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    },
    {
      path: '/contact-us',
      name: 'Policy',
      component: Contact
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Login
    },
    {
      path: '*',
      name: 'Page is not founded',
      component: NotFoundComponent
    }
  ]
})
