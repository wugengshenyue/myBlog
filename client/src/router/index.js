import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import About from '../views/About.vue'
import GuestBook from '../views/GuestBook.vue'
import SiteMap from '../views/SiteMap.vue'
import AddBlog from '../views/AddBlog.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tag/:id',
    component: Home,
  },
  {
    path: '/blog/:id',
    component: Blog,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/guestbook',
    component: GuestBook
  },
  {
    path: '/sitemap',
    component: SiteMap
  },
  {
    path: '/addblog',
    component: AddBlog
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
