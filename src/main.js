import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router/index'

import {
  Style,
  Button,
  TabBar,
  Input
} from 'cube-ui'

Vue.use(Button)
Vue.use(TabBar)
Vue.use(Input)
Vue.config.productionTip = false
new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
