import Vue from 'vue'
import VueRouter from 'vue-router'

import MainMenu from '../components/devise-admin/MainMenu'

import Experience from '../components/Experience'
import Experiences from '../components/Experiences'
import MenusIndex from '../components/devise-admin/menus/Index'
import EventsIndex from '../components/devise-admin/events/Index'

var routes = [
  // You don't want to remove this. This is the Main administration menu for
  // Devise. This allows you to add new menu items to the primary navigation.
  {
    path: '/devise',
    name: 'devise-index',
    components: {
      'devise': MainMenu
    }
  },
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
    name: 'devise-menus-index',
    components: {
      'devise': MenusIndex
    },
    meta: {
      title: 'Testing',
      wide: true
    },
  },
  {
    path: '/devise/events',
    name: 'devise-events-index',
    components: {
      'devise': EventsIndex
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
