import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router/index'

import {
  Style,
  TabBar
} from 'cube-ui'

import './plugins/element.js'
import {
  Card,
  Input,
  Button
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button)
Vue.use(TabBar)
Vue.use(Input)
Vue.use(Card)
Vue.config.productionTip = false
new Vue({
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
