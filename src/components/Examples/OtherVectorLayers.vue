<template>
  <div class="example-map">
    <h2>Other vector layers</h2>
    <p>Reactangle (&lt;l-rectangle/&gt;), Polyline (&lt;l-polyline/&gt;), and MultiPolyline (&lt;l-polyline/&gt; but with multiPolyline options)</p>
    <l-map :map-id="mapId">
      <l-tile-layer v-bind="tileLayer"/>
      <l-rectangle v-bind="rectangleProps"/>
      <l-polyline v-bind="polylineProps"/>
      <l-polyline v-bind="multiPolylineProps"/>
    </l-map>
    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/OtherVectorLayers.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([45.486462908978254, -122.51129150390626], 10);
    },

    data() {
      return {
        mapId: 'example-four',
        polylineProps: {
          latlng: [
            [45.51, -122.68],
            [45.4209555656326, -122.72964477539062],
            [45.31192948557737, -122.64724731445314]
          ],
          options: { color: 'red' }
        },
        rectangleProps: {
          latlng: [[45.51, -122.68], [45.32771146627378, -122.35748291015626]],
          options: {color: "#ff7800", weight: 1}
        },
        multiPolylineProps: {
          latlng: [
            [
              [45.55381745910754, -122.59368896484376], [45.606682327975896, -122.50305175781251]
            ],
            [
              [45.613407013426034, -122.59506225585939], [45.55958695452742, -122.52639770507814]
            ]
          ],
          options: { color: 'blue' }
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
