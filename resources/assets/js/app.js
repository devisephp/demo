
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// Headroom - Navigation helper for when a user scrolls down
import Headroom from 'headroom.js'

import App from './components/App'
import Hero from './components/Hero'
import Devise from './devise-dev/main.js';
import { EventBus } from './event-bus.js';

window.bus = EventBus

import router from './router/route.config.js'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

import holderjs from 'holderjs'

sync(store, router)

Vue.use(Devise, {
  store: store,
  bus: window.bus,
  options: {
    adminClass: ''
  }
})

Vue.component('Hero', Hero)
Vue.component('ExperiencesApp', {
  template: '<App :devise="devise"/>',
  components: { App },
  router: router
})

const app = new Vue({
  el: '#app'
})
