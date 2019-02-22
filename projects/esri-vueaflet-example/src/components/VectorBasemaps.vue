<template>
  <div class="example-map">
    <h2>Vector Basemaps</h2>
    <l-map :map-id="mapId">
      <e-basemap-layer basemap="Newspaper" vector/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/SettingUpMap.vue" target="_blank" rel="noopener">Code on Github</a>
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
        mapId: 'vector-basemaps'
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    }
  }
</script>
