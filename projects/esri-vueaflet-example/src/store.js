import Vue from 'vue';
import Vuex from 'vuex';
import { createVueafletStore } from '@vueaflet/core'

const VueafletStore = createVueafletStore()

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [VueafletStore]
});
