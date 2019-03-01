import { registerComponents } from './utils'
import * as components from './components'

// TODO: test options
const createInstaller = (components) => (Vue, options) => {
  // do something with options
  registerComponents(Vue, components)
}

const createEsriVueaflet = () => { 
  // https://vuejs.org/v2/guide/plugins.html
  // Vue plugins, at minimum, need to return an object with an install function
  // createInstaller is a double arrow function; returns another function, creates a closure over imported components
  return { install: createInstaller(components) }
}

export default createEsriVueaflet()
