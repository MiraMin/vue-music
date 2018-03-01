import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'


import 'common/stylus/index.styl'

Vue.config.productionTip = false;
fastclick.attach(document.body) // fastclick全局注册

Vue.use(VueLazyload, { // 图片全局懒加载
  loading: require('common/images/default.png')
})

/* eslint-disable no-unused-vars */
import vConsole from 'vconsole'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
