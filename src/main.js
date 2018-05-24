// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import "./style/style.less"
import 'mint-ui/lib/style.css'


Vue.use(Vuex)
Vue.config.productionTip = false


const stores = new Vuex.Store(
  store
)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:stores,
  components: { App },
  template: '<App/>'
})
