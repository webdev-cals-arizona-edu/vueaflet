<template>
  <div id="app">
    <h1>Esri Vueaflet</h1>
    <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet" target="_blank" rel="noopener">Github</a>
    <a href="https://www.npmjs.com/package/esri-vueaflet" target="_blank" rel="noopener">NPM</a>
    <p>This library (or set of components) uses <a href="https://cct.cals.arizona.edu/vueaflet/" target="_blank" rel="noopener">Vueaflet</a> as its primary dependency. Similar to how Vueaflet provides a "vuetified" approach to handling Leaflet objects, Esri-Vueaflet provides the same methodology for handling Esri-Leaflet objects. All objects are managed in a Vuex store, providing the developer easy access from anywhere in their Vue application.</p>

    <showing-arc-gis-basemap></showing-arc-gis-basemap>
    <basemap-with-labels></basemap-with-labels>
    <dynamic-map-layer></dynamic-map-layer>
    <simple-feature-layer></simple-feature-layer>
    <simple-image-map-layer></simple-image-map-layer>
    <clustering-points></clustering-points>
    <event-sibling></event-sibling>
  </div>
</template>

<script>
import ShowingArcGisBasemap from '@/components/ShowingArcGisBasemap'
import BasemapWithLabels from '@/components/BasemapWithLabels'
import DynamicMapLayer from '@/components/DynamicMapLayer'
import SimpleFeatureLayer from '@/components/SimpleFeatureLayer'
import SimpleImageMapLayer from '@/components/SimpleImageMapLayer'
import ClusteringPoints from '@/components/ClusteringPoints'
import EventSibling from '@/components/EventSibling'

export default {
  name: 'app',
  components: {
    ShowingArcGisBasemap,
    BasemapWithLabels,
    DynamicMapLayer,
    SimpleFeatureLayer,
    SimpleImageMapLayer,
    ClusteringPoints,
    EventSibling
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.example-map {
  margin: 0 auto 50px;
  width: 500px;
  height: 100%;
}

.example-map .map {
  height: 400px;
}

code {
  padding: 3px 5px;
  border-radius: 3px;
  background-color: #eee;
}
</style>
