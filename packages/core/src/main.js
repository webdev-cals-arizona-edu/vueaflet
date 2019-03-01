import { registerComponents } from './utils'
import vueafletStore from './store/modules/vueaflet'
import * as components from './components'
import VueafletBus from './buses'

// TODO: test options
const createInstaller = c => (Vue) => {
  var bus = VueafletBus

  Object.defineProperty(Vue.prototype, '$vueafletBus', { //for "this.$bus"
    get() { return bus },
    set(evt) { //alt way to send an event (this.$bus=['event_name',arg1,arg2])
      if (typeof evt === 'string') evt = [evt]
      bus.$emit.apply(bus, evt)
    }
  })

  // do something with options
  registerComponents(Vue, c)
}

// https://vuejs.org/v2/guide/plugins.html
// Vue plugins, at minimum, need to return an object with an install function
// createInstaller is a double arrow function;
//returns another function, creates a closure over imported components
const Vueaflet = { install: createInstaller(components) }

// TODO: test module name
export const createVueafletStore = (moduleName = 'vueaflet') => (store) => {
  store.registerModule(moduleName, { ...vueafletStore })
}

export const Bus = VueafletBus
export default Vueaflet
