import Vue from 'vue'
import Vuex from 'vuex'

import maps from './modules/maps'
import vueaflet from './modules/vueaflet'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  modules: {
    maps,
    vueaflet
  }
})
