<template>
  <div class="example-map">
    <h2>Working with events</h2>
    <p>Pass in an array events (as strings) that are supported by the layer type. See <a href="http://leafletjs.com/reference-1.3.0.html" target="_blank">Leaflets docs for events</a>. There is a "ready" event that is handle by Vueaflet for you :)</p>
    <l-map :map-id="mapId"
      :events="['click']"
      v-on:click="handleMapClick">
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker v-bind="markerProps"
        :events="['dragend']"
        v-on:dragend="handleMarkerDrag"/>
      <l-circle v-bind="circleProps"
        :events="['popupopen']"
        v-on:popupopen="handleCirclePopup"
        popup="Yas, queen."/>
      <l-polygon v-bind="polygonProps" 
        enable-bus
        :events="['mouseover']"
        v-on:ready="handlePolygonReady"
        v-on:mouseover="handlePolygonHover"/>
    </l-map>

    <div class="event-list">
      <span>Map Clicks: {{ mapClick }}</span>
      <span>Polygon Hovers: {{ polygonHovers }}</span>
      <span>Marker Drags: {{ markerDrags }}</span>
      <span>Circle Popup: {{ circlePopups }}</span>
    </div>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/WorkingWithEvents.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([51.5079, -0.0787], 13);
    },

    data() {
      return {
        mapId: 'working-with-events',
        markerProps: { 
          latlng: [51.5, -0.09],
          options: {
            draggable: true
          }
        },
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
        },
        mapClick: 0,
        polygonHovers: 0, 
        markerDrags: 0,
        circlePopups: 0
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    },

    methods: {
      handlePolygonReady(polygon) {
        polygon.bindTooltip("Boo.")
      },
      handleMapClick(event) {
        console.info("Event: ", event)
        this.mapClick++
      },
      handlePolygonHover({ event, layer }) {
        console.info("Event: ", event, ", Layer: ", layer)
        this.polygonHovers++
      },
      handleMarkerDrag({ event, layer }) {
        console.info("Event: ", event, ", Layer: ", layer)
        this.markerDrags++
      },
      handleCirclePopup({ event, layer }) {
        console.info("Event: ", event, ", Layer: ", layer)
        this.circlePopups++
      },
    }
  }
</script>

<style lang="css">
  .event-list {
    display: flex;
  }

  .event-list span {
    flex: 1;
    font-size: 12px;
    padding: 3px;
    background-color: grey;
    color: #fff;
    font-weight: bold;
  }
</style>
