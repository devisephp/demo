
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './components/App'
import Hero from './components/Hero'
import router from './router/route.config.js'
import Devise from './devise-dev/main.js';

Vue.use(Devise)

Vue.component('Hero', Hero)
Vue.component('ExperiencesApp', {
  template: '<App :devise="devise"/>',
  components: { App },
  router: router
})

const app = new Vue({
  el: '#app'
})
