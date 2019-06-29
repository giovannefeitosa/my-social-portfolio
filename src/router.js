import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Timeline',
      component: () => import(/* webpackChunkName: "timeline" */ './views/Timeline.vue')
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
