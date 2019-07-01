import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    
  },
  actions: {
    scroll_lock(ctx, is_locked) {
      if(is_locked) {
        document.body.classList.add('scroll_lock')
      } else {
        document.body.classList.remove('scroll_lock')
      }
    }
  }
})
