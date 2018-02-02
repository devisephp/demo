import Vue from 'vue'
import VueRouter from 'vue-router'

import Feature from '../components/Feature'
import Features from '../components/Features'

/****************************************/
/*    NEW STUFF                         */
/****************************************/

var routes = [
  {
    path: '*',
    name: 'index',
    component: Vue.component('features', Features)
  },
  {
    path: '/',
    name: 'index',
    component: Vue.component('features', Features)
  },
  {
    path: '/experience/:featurename',
    name: 'feature',
    component: Vue.component('feature', Feature),
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
