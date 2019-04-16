
# Esri-Vueaflet #
This library (or set of components) uses [Vueaflet](https://github.com/webdev-cals-arizona-edu/vueaflet) as its primary dependency. Similar to how Vueaflet provides a "vuetified" approach to handling Leaflet objects, Esri-Vueaflet provides the same methodology for handling Esri-Leaflet objects. All objects are managed in a Vuex store, providing the developer easy access from anywhere in their Vue application.

**This project is currently in development with ZERO test coverage! Use at your own risk :)** 

 - [Getting Started](#getting-started)
 - [Code Examples](#code-examples)
 - [Quick Start Guide](#quick-start-guide)

----------
## Getting Started
```
npm install --save @vueaflet/esri
yarn add @vueaflet/core
```
Esri-Vueaflet will npm install vueaflet as well. However, you must `Vue.use()` both Esri-Vueaflet and Vueaflet. Assuming you are using a `vue-cli` template, your `src/main.js` will look something like this:
```
import Vue from 'vue'
import App from './App'
import store from 'store'
import Vueaflet from '@vueaflet/core' // core comes as a dependency of @vueaflet/esri
import EsriVueaflet from '@vueaflet/esri'

// attaches a 'vueaflet' module into your Vuex store
Vue.use(Vueaflet, { store })
Vue.use(EsriVueaflet)

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
```
NOTE: This library relies on Vuex in order to store your Leaflet objects.

----------
## Code Examples
These simple examples mirror the examples found in the [Esri-Leaflet documentation](https://esri.github.io/esri-leaflet/examples/)

 - [Showing ArcGIS Basemap](https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/ShowingArcGisBasemap.vue)
 - [Basemap With Labels](https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/BasemapWithLabels.vue)
 - [Simple Feature Layer](https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/SimpleFeatureLayer.vue)
 - [Simple Image Map Layer](https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/SimpleImageMapLayer.vue)
 - [Clustering Points](https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/ClusteringPoints.vue)

More examples coming soon!

----------
## Quick Start Guide
Coming soon! Will provide a full walk through to take advantage of all sorts of Esri-Leaflet features, working with events, working with queries, and managing your Esri-Leaflet objects using Vuex.

### Events
Pass in an array events (as strings) that are supported by the esri layer type. There is a "ready" event that is handle by EsriVueaflet for you :). Each Leaflet supported event `$emits` back an `{ event, layer }` object:
```
<template>
  <div class="example-map">
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      ...
      
      <e-cluster-feature-layer 
        v-bind="featureLayerOptions"
        :events="['clusterclick']"
        enable-bus
        v-on:clusterclick="handleClusterClick"/>
        
      ...
    </l-map>
  </div>
</template>

...
```
Additionaly, you can pass a boolean prop called `enabled-bus` which will also attach each event passed in the array of events to property attached to each component as `this.$vueafletBus`. See the `EventSibling.vue` component as an example.