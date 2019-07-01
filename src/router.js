import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/views/Timeline'
import Post from '@/views/Post'

Vue.use(Router)

export default new Router({
  // History mode didn't work on github pages
  // mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import(/* webpackChunkName: "skills" */ './views/Skills.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
