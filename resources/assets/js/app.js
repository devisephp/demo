// Laravel's bootstrap boilerplate
require('./bootstrap');

window.Vue = require('vue');
// Devise
import Devise from './devise-dev/main.js';

// Devise requires a bus, vue-router and vuex. We initialize these in your application
// so that both apps can share the same store and router. All devise vuex
// is namespaced under the "devise" namespace.
import { EventBus } from './event-bus.js';
window.bus = EventBus
import router from './router/route.config.js'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
sync(store, router)

// We initialize the Devise plugin and pass our router, store, and bus to share
// these resources so that your application can tap into them.
Vue.use(Devise, {
  store: store,
  router: router,
  bus: window.bus,
  options: {
    adminClass: ''
  }
})

// 3rd party libraries to showcase how you might utilize libs in and around Devise
// Headroom - Navigation helper for when a user scrolls down
import Headroom from 'headroom.js'
// Carousel for the events section
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// Demo Components
import App from './components/App'
import Hero from './components/Hero'
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

// Initialize the application's Vue app
const app = new Vue({
  el: '#app',
  router: router
})
