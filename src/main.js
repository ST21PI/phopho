import Vue from 'vue'
import App from './Page.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import vueMoment from 'vue-moment' 

Vue.use(vueMoment)

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
