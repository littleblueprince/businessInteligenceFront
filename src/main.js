// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/style/reset.css'
import '@/assets/style/style.css'
import '@/assets/style/font-awesome.min.css'
import BootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueParticles from 'vue-particles'
import Axios from 'axios'
Vue.prototype.$axios = Axios
Vue.use(BootstrapVue)
Vue.use(ElementUI);
Vue.use(VueParticles)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  render: h => h(App)
})
