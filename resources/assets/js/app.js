
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './components/App'
import Hero from './components/Hero'
// import router from './router/route.config.js'

const hero = new Vue({
  el: '#hero',
  template: '<Hero/>',
  components: { Hero }
})

// const experiences = new Vue({
//   el: '#experiences',
//   template: '<App/>',
//   components: { App },
//   // router: router
// })
