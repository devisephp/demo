
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// 3rd party libraries to showcase how you might utilize libs in and around Devise
// Headroom - Navigation helper for when a user scrolls down
import Headroom from 'headroom.js'
// Carousel for the events section
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import App from './components/App'
import Hero from './components/Hero'
import Devise from './devise-dev/main.js';
import { EventBus } from './event-bus.js';

window.bus = EventBus

import router from './router/route.config.js'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.use(Devise, {
  store: store,
  router: router,
  bus: window.bus,
  options: {
    adminClass: ''
  }
})

Vue.component('Hero', Hero)
Vue.component('ExperiencesApp', {
  template: '<App :devise="devise"/>',
  components: { App }
})

// When we want to initialize something after Devise is done loading
window.bus.$on('devise-loaded', function () {
  var navigation = document.querySelector("#headroom")
  var headroom  = new Headroom(navigation)
  headroom.init()
})

const app = new Vue({
  el: '#app',
  router: router
})
