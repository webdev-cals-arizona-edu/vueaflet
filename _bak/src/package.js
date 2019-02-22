import { registerComponents } from 'utils'
import vueafletStore from './store/modules/vueaflet'
import * as components from './components'

// TODO: test options
const createInstaller = (components) => (Vue, options) => {
  // do something with options
  registerComponents(Vue, components)
}

const createVueaflet = () => { 
  // https://vuejs.org/v2/guide/plugins.html
  // Vue plugins, at minimum, need to return an object with an install function
  // createInstaller is a double arrow function; returns another function, creates a closure over imported components
  return { install: createInstaller(components) }
}

// TODO: test module name
export const createVueafletStore = (moduleName = 'vueaflet') => (store) => {
  store.registerModule(moduleName, { ...vueafletStore })
}

export default createVueaflet()
export { VueafletBus } from './buses'
