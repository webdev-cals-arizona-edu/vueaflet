import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vueaflet from '@vueaflet/core'
import EsriVueaflet from '@vueaflet/esri'

Vue.use(Vueaflet, { store })
Vue.use(EsriVueaflet)
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
