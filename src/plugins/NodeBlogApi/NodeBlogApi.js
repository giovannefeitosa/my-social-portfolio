import axios from 'axios'

export default {
  store: null,
  autoload: false,
  endpoint: '',

  install(Vue, options) {
    this.endpoint = options.endpoint || 'http://localhost'
    this.store = options.store
    this.autoload = options.autoload
    Vue.prototype.$blog_endpoint = this.endpoint

    this.registerStore()
    
    if(this.autoload) {
      this.store.dispatch('node-blog-api/fetch_page')
    }
  },

  /**
   * Register Vuex module
   */
  registerStore() {
    this.store.registerModule('node-blog-api', {
      namespaced: true,
      
      state: {
        error_message: '',
        posts: [],
        total: 0,
        page: 0,
        totalPages: 0
      },
      
      mutations: {
        /**
         * Fill state.error with useful message from last error
         */
        set_error(state, error_message) {
          state.error_message = error_message
        },

        /**
         * Handle response from node-blog-api GET /posts
         */
        handle_page(state, pageResponse) {
          state.error_message = ''
          state.posts = pageResponse.rows
          state.total = pageResponse.total
          state.page = pageResponse.page
          state.totalPages = pageResponse.totalPages
        }
      },

      actions: {
        /**
         * fetch list of posts from a page
         */
        fetch_page: async ({ commit }, page) => {
          try {
            if(!page) page = 1

            let response = await axios.get(this.endpoint+'/posts?page='+page)
            
            if(response.status !== 200) {
              throw new Error(`Received invalid HTTP status code #${response.status} from server`)
            }
      
            commit('handle_page', response.data)
          } catch(err) {
            console.error('[NodeBlogApi] fetch_page', err)
            commit('set_error', err.message || 'Erro desconhecido')
          }
        }
      }
    })
  }
}
