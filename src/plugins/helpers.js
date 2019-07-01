import _ from 'lodash'

export default {
  router: null,
  install(Vue, options) {
    // this.router = options

    Vue.prototype.$url = function(uri) {
      return 'https://' + window.location.host
        + _.trimEnd(process.env.BASE_PATH, '/')
        + ( process.env.NODE_ENV === 'production' ? '' : '/#' )
        + uri
    }
  }
}
