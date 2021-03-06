import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import AppLayout from '@/components/AppLayout'
import PublicLayout from '@/components/PublicLayout'
import axios from 'axios'

Vue.use(Vuetify)
Vue.component(AppLayout.name, AppLayout)
Vue.component(PublicLayout.name, PublicLayout)

Vue.config.productionTip = false

//  enviando token
axios.defaults.headers.common['x-api-key'] = localStorage.getItem('token')
axios.defaults.baseURL = process.env.BASE_URL

// criado para atender ao lint
Vue.create = function (options) {
  return new Vue(options)
}

Vue.create({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
