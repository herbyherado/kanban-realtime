// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import VeeValidate from 'vee-validate'
import firebase from 'firebase'

Vue.use(VeeValidate)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyCJLHWpnL-H7DPHgvA8NvJhluLrYI6Snvo',
  authDomain: 'herbyherado-198014.firebaseapp.com',
  databaseURL: 'https://herbyherado-198014.firebaseio.com',
  projectId: 'herbyherado-198014',
  messagingSenderId: '274437662526'
}
firebase.initializeApp(config)
// console.log(firebase)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
