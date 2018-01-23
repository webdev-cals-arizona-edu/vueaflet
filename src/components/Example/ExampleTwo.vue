<template>
  <div class="example-map">
    <h2>Markers, circles and polygons</h2>
    <l-map :map-id="mapId">
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker v-bind="markerProps"/>
      <l-circle v-bind="circleProps"/>
      <l-polygon v-bind="polygonProps"/>
      <l-rectangle v-bind="rectangleProps"/>
      <l-polyline v-bind="polylineProps"/>
    </l-map>
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
        mapId: 'example-two',
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
        polylineProps: {
          latlng: [
            [45.51, -122.68],
            [37.77, -122.43],
            [34.04, -118.2]
          ],
          options: { color: 'red' }
        },
        rectangleProps: {
          latlng: [[54.559322, -5.767822], [56.1210604, -3.021240]],
          options: {color: "#ff7800", weight: 1}
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
    }
  }
</script>
