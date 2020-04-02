import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import toast from 'components/common/toast/index.js'

import Fastclick  from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()


Vue.use(toast)
Vue.use(vueLazyLoad)

//解决移动端点击延迟
Fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
