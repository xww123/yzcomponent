import Vue from 'vue'
import App from './App.vue'
import YzUI from '../packages'
Vue.config.productionTip = false
Vue.use(YzUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
