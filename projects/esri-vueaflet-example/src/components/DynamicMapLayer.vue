<template>
  <div class="example-map">
    <h2>Dynamic Map Layer</h2>
    <div id="map"></div>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Gray"/>
      <e-dynamic-map-layer v-bind="dynamicLayerOptions"/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/DynamicMapLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as esri from 'esri-leaflet'
  import L, { LatLngBounds } from 'leaflet'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([38.83,-98.5], 7)
    },

    data() {
      return {
        mapId: 'dynamic-map-layer',
        dynamicLayerOptions: {
          layerName: 'dyamicMapLayer',
          options: {
            url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Petroleum/KGS_OilGasFields_Kansas/MapServer',
            opacity : 0.25,
            useCors: false
          }
        },
        mappy: {}
      }
    },

    computed: {
      ...mapGetters(['getMap']),
    }
  }
</script>
