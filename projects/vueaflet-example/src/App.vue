<template>
  <div id="app">
    <h1>Vueaflet</h1>
    <a href="https://github.com/webdev-cals-arizona-edu/vueaflet" target="_blank" rel="noopener">Github</a>
    <a href="https://www.npmjs.com/package/vueaflet" target="_blank" rel="noopener">NPM</a>

    <setting-up-map></setting-up-map>
    <markers-circles-polygons></markers-circles-polygons>
    <working-with-popups></working-with-popups>
    <other-vector-layers></other-vector-layers>
    <working-with-events></working-with-events>
    <event-sibling></event-sibling>
    <using-geo-json></using-geo-json>
    <vueaflet-geo-json-collection></vueaflet-geo-json-collection>
    <readme-example></readme-example>
  </div>
</template>

<script>
import SettingUpMap from '@/components/SettingUpMap'
import MarkersCirclesPolygons from '@/components/MarkersCirclesPolygons'
import WorkingWithPopups from '@/components/WorkingWithPopups'
import OtherVectorLayers from '@/components/OtherVectorLayers'
import WorkingWithEvents from '@/components/WorkingWithEvents'
import EventSibling from '@/components/EventSibling'
import UsingGeoJson from '@/components/UsingGeoJson'
import VueafletGeoJsonCollection from '@/components/VueafletGeoJsonCollection'
import ReadmeExample from '@/components/ReadmeExample'

export default {
  name: 'app',
  components: {
    SettingUpMap,
    MarkersCirclesPolygons,
    WorkingWithPopups,
    OtherVectorLayers,
    EventSibling,
    WorkingWithEvents,
    UsingGeoJson,
    VueafletGeoJsonCollection,
    ReadmeExample
  },
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
</style>
