// import _ from 'lodash'

export default {
  router: null,
  install(Vue) {
    // this.router = options

    Vue.prototype.$url = function(uri) {
      return 'https://' + window.location.host
        // + _.trimEnd(process.env.BASE_PATH, '/')
        // + ( process.env.NODE_ENV === 'production' ? '' : '/#' )
        + '#'
        + uri
    }

    const months = [
      "January","February","March","April","May","June","July",
      "August","September","October","November","December"];
    
    const ten = n => n<10 ? '0'+n : ''+n

    Vue.prototype.$formatDate = function(jsDate) {
      if(typeof jsDate === 'string') {
        try {
          jsDate = new Date(jsDate)
        } catch(e) {
          return jsDate
        }
      }
      let hours = jsDate.getHours()
      let minutes = jsDate.getMinutes()
      let ampm = 'AM'
      if(hours >= 12) {
        hours -= 12
        ampm = 'PM'
      }
      return months[jsDate.getMonth()]
        + ' ' + ten(jsDate.getDate())
        + ' at ' + ten(hours) + ':' + ten(minutes)
        + ' ' + ampm
    }
  }
}
