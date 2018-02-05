import Vue from 'vue'
import VueRouter from 'vue-router'

import Experience from '../components/Experience'
import Experiences from '../components/Experiences'

/****************************************/
/*    NEW STUFF                         */
/****************************************/

var routes = [
  {
    path: '/',
    alias: ['*'],
    name: 'index',
    component: Vue.component('experiences', Experiences),
    props: true
  },
  {
    path: '/experience/:experiencename',
    name: 'experience',
    component: Vue.component('experience', Experience),
    props: true,
    meta: {
      title: 'Devise Sea-Cruises FTW'
    }
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  history: true,
  transitionOnLoad: true,
  routes: routes
})

router.beforeEach((to, from, next) => {
  // Set the page title
  if (typeof to.meta.title !== 'undefined') {
    document.title = to.meta.title
  } else {
    document.title = 'Welcome to Devise Sea Cruises'
  }
  next()
})

export default router
