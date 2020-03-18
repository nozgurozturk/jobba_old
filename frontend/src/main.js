import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import graphqlError from './utils/graphqlError'
import { apolloProvider } from './apollo'
import './styles/element-variables.scss'

Vue.prototype.$graphqlError = graphqlError

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueApollo)

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
