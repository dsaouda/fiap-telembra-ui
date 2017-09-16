import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import AppLayout from '@/components/AppLayout'

Vue.use(Vuetify)
Vue.component(AppLayout.name, AppLayout)

Vue.config.productionTip = false

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
