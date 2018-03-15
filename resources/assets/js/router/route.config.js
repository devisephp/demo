import Vue from 'vue'
import VueRouter from 'vue-router'

import Experience from '../components/Experience'
import Experiences from '../components/Experiences'
import MenusIndex from '../components/devise-admin/menus/Index'

var routes = [
  {
    path: '/',
    alias: ['/devise/edit-page'],
    name: 'index',
    props: true,
    meta: {
      inApp: 'in App alias'
    },
    components: {
      'experiences': Experiences
    },
  },
  {
    path: '/experience/:experiencename',
    name: 'experience',
    props: true,
    meta: {
      title: 'Devise Sea-Cruises FTW',
      inApp: 'in App'
    },
    components: {
      'experiences': Experience
    },
  },
  // Example of writing custom admin pages
  {
    path: '/devise/menus',
    name: 'devise-menus',
    components: {
      'devise': MenusIndex
    },
    meta: {
      title: 'Testing',
      wide: true
    },
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
