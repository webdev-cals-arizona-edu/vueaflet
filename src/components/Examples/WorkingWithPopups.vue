<template>
  <div class="example-map">
    <h2>Working with popups</h2>
    <l-map :map-id="mapId">
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker v-bind="markerProps" v-on:ready="handleReadyMarker"/>
      <l-circle v-bind="circleProps" popup="I am a circle."/>
      <l-polygon v-bind="polygonProps" popup="I am a polygon."/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/WorkingWithPopups.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([51.505, -0.09], 13);
    },

    data() {
      return {
        mapId: 'example-three',
        markerProps: { latlng: [51.5, -0.09] },
        circleProps: {
          latlng: [51.508, -0.11],
          options: {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
          }
        },
        polygonProps: {
          latlng: [
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047]
          ],
        },
        tileLayer: {
          urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
          options: {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 18,
            accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
            label: 'Default'
          }
        }
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    },

    methods: {
      handleReadyMarker(marker) {
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
      }
    }
  }
</script>
