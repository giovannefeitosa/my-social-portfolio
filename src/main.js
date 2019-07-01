import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NodeBlogApi from './plugins/NodeBlogApi/NodeBlogApi'
import helpers from './plugins/helpers'
import BoxWrapper from '@/components/Box/BoxWrapper'
import BoxContent from '@/components/Box/BoxContent'

Vue.config.productionTip = false

Vue.use(NodeBlogApi, {
  store,
  autoload: true,
  endpoint: 'http://localhost:3000'
})

Vue.use(helpers)

Vue.component('BoxWrapper', BoxWrapper)
Vue.component('BoxContent', BoxContent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
