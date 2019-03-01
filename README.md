# Vueaflet #

A component driven approach to managing Leaflet objects using Vue and Vuex. Each component registers its Leaflet object in a Vuex store, allowing easy access to your Leaflet objects anywhere in your Vue application.

> BREAKING CHANGES from v0.6.0 to v1.0.0

 - Import changed from `vueaflet` to `@vueaflet/core` and `@vueaflet/esri`
 - `VueafletBus` now attached to root `Vue` instance
	 - Use `this.$vueafletBus` instead of  `import { VueafletBus } from 'vueaflet'`
  
[@vueaflet/core README](https://github.com/webdev-cals-arizona-edu/vueaflet/packages/core)
[@vueaflet/esri README](https://github.com/webdev-cals-arizona-edu/vueaflet/packages/esri)
