// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import { AUTO_LOGIN } from '@/store/actions.type'
import firebase from '@/config/firebaseConfig'

import axios from 'axios'
var qs = require('qs')

Vue.use(ElementUI)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    mode: 'history',
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    created () {
      if (firebaseUser) {
        firebaseUser
          .getIdToken(/* forceRefresh */ true)
          .then(function (idToken) {
            console.log(idToken)
            // axios
            //   .post(
            //     process.env.ROOT_API + '/news/9t5ZDQc86My9MpqXmrPC/comments',
            //     qs.stringify({ user_token: idToken, msg: 'KUY' }),
            //     {
            //       headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded'
            //       }
            //     }
            //   )
            //   .then(function (response) {
            //     console.log(response.data)
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
          })
          .catch(function (error) {
            // Handle error
          })
        store.dispatch(AUTO_LOGIN, firebaseUser)
      }
    }
  })
  unsubscribe()
})
