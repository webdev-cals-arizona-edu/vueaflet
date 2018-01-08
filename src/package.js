import { registerComponents } from 'utils'
import vueafletStore from './store/modules/vueaflet'
import * as components from './components'

// TODO: test options
const createInstaller = (components) => (Vue, options) => {
  // do something with options
  registerComponents(Vue, components)
}

const createVueaflet = () => { 
  return { install: createInstaller(components) }
}

// TODO: test module name
export const createVueafletStore = (moduleName = 'vueaflet') => (store) => {
  store.registerModule(moduleName, { ...vueafletStore })
}

export default createVueaflet()
export { VueafletBus } from './buses'
