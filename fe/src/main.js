// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import moment from 'moment'
import swal from 'sweetalert'
import Icon from 'vue-awesome/components/Icon'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/vue-awesome/icons'
import fam from '../node_modules/fontawesome-markers/fontawesome-markers.json'
import cfg from '../static/cfg'

moment.locale('ko')
if (process.env.NODE_ENV === 'development') cfg.path.api = 'http://localhost:3000/api/'

axios.defaults.headers.common.Authorization = 'abcd'
Vue.prototype.$axios = axios
Vue.prototype.$cfg = cfg
Vue.prototype.$moment = moment
Vue.prototype.$swal = swal
Vue.prototype.$fam = fam

Vue.component('icon', Icon)

Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw'
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
  // installComponents: true,
})
Vue.config.productionTip = true

const token = VueCookie.get('token')
if (token) axios.defaults.headers.common.Authorization = VueCookie.get('token')
axios.interceptors.response.use((res) => {
  if (res.data.token) {
    VueCookie.set('token', res.data.token, { expires: '2m' })
    axios.defaults.headers.common.Authorization = VueCookie.get('token')
  }
  return Promise.resolve(res)
}, (err) => {
  if (err.response.status === 401) {
    location.href = '/#/sign'
    return
  }
  return Promise.reject(err)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
