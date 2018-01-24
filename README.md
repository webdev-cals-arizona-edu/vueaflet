
## Vueaflet ##

A component driven approach to managing Leaflet objects using Vue and Vuex. An attempt to simplify the process of exposing all the wonders of Leaflet through a simple component interface. Each component registers its respective Leaflet object in a Vuex store (see below) for easy access to your Leaflets objects anywhere in your Vue application.

**FEATURE STILL IN DEVELOPMENT:** You have the option to use the familiar tag-like markup to create your map, OR simply pass a single Javascript object into your map component and let `Veuaflet` do the rest!

**Example coming soon...**

----------
This project is currently in development with ZERO test coverage! Use at your own risk :) To see the components in action, run the following commands:

    git clone git@github.com:webdev-cals-arizona-edu/vueaflet.git
    npm install
    npm run dev

Go to `localhost:8080` on your machine. The home page is still in progress, but will mirror the [Leaflet Quick Start Guide](http://leafletjs.com/examples/quick-start/).

To see how these examples were composed, go to `/src/components/Examples/` and look around the src code!

Until this library is up on NPM, you can install it by adding the following entry in your `package.json`:

    "vueaflet": "git@github.com:webdev-cals-arizona-edu/vueaflet.git"

**Full Feature List and examples coming soon**

----------

Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:
```
import Vue from 'vue'
import App from './App'
import store from 'store'
import Vueaflet from 'vueaflet'

Vue.use(Vueaflet)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
```
This library relies on Vuex in order to store your Leaflet objects. In your `store/index.js`, make the following modifications: 
```
import Vue from 'vue'
import Vuex from 'vuex'
import { createVueafletStore } from 'vueaflet'

const VueafletStore = createVueafletStore()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  modules: {},
  plugins: [VueafletStore]
})

```

