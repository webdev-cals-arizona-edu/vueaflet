<template>
  <div class="example-map">
    <h2>Simple Image Map Layer</h2>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Gray"/>
      <e-image-map-layer v-bind="imageMapLayerOptions"/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/SimpleImageMapLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([37.75, -122.23], 10)
    },

    data() {
      return {
        mapId: 'simple-image-map-layer',
        imageMapLayerOptions: {
          layerName: 'simpleImageMapLayer',
          options: {
            url: 'https://landsat.arcgis.com/arcgis/rest/services/Landsat/PS/ImageServer',
            attribution: 'United States Geological Survey (USGS), National Aeronautics and Space Administration (NASA)'
          }
        }
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
