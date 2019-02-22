<template>
  <div class="example-map">
    <h2>Basemap with labels</h2>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Imagery"/>
      <e-basemap-layer basemap="ImageryLabels"/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/BasemapWithLabels.vue" target="_blank" rel="noopener">Code on Github</a>
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
        mapId: 'basemap-with-labels'
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
