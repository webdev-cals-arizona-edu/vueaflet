import { registerComponents } from 'utils'
import vueafletStore from 'store/modules/vueaflet'
import * as components from './components'

const createInstaller = (config, components) => (Vue) => {
  registerComponents(Vue, components)
}

const createVuexStore = (moduleName = 'vueaflet') => (store) => {
  store.registerModule(moduleName, { ...vueafletStore })
}

function createVueaflet() {
  return {
    install: createInstaller({}, components),
    store: createVuexStore()
  }
}

export default createVueaflet