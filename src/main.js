import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NodeBlogApi from './plugins/NodeBlogApi/NodeBlogApi'

Vue.config.productionTip = false

Vue.use(NodeBlogApi, {
  store,
  autoload: true,
  endpoint: 'http://localhost:3000'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
