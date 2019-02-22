<template>
  <div class="example-map">
    <h2>Simple FeatureLayer</h2>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Streets"/>
      <e-feature-layer v-bind="featureLayerOptions"/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/SimpleFeatureLayer.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([45.526, -122.667], 13)
    },

    data() {
      return {
        mapId: 'simple-feature-layer',
        featureLayerOptions: {
          layerName: 'simpleFeatureLayer',
          options: {
            url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
          }
        }
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
