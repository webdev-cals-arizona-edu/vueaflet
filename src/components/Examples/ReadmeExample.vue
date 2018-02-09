<template>
  <div class="example-map">
    <h2>Readme Example</h2>
    <p>Find the tutorial to put this map together on the main <a href="https://github.com/webdev-cals-arizona-edu/vueaflet#getting-started" target="_blank">GitHub README page</a>.</p>
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker v-bind="dragMarkerProps"
          :events="['dragend']"
          v-on:ready="handleMarkerReady"
          v-on:dragend="handleMarkerDragEnd"/>
      <l-rectangle v-bind="rectangleProps"/>
      <l-polyline v-bind="polylineProps"/>
      <l-polyline v-bind="multiPolylineProps"/>

      <l-feature-group v-if="toggleFeatureGroup" layer-name="featureGroup">
        <l-marker v-bind="markerProps" popup="Hello. I am a marker."/>
        <l-circle v-bind="circleProps" popup="Hello. I am a circle."/>
        <l-polygon v-bind="polygonProps" popup="Hello. I am a polygon."/>
      </l-feature-group>
    </l-map>

    <button @click.prevent="toggleFeatureGroup = !toggleFeatureGroup">Toggle Feature Group</button>
    <mock-controls/>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/ReadmeExample.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MockControls from './MockControls'

  export default {
    components: {
      MockControls
    },

    mounted() {
      this.getMap(this.mapId).setView([51.506071, -0.082998], 13)
    },

    data() {
      return {
        mapId: 'exampleMap',
        toggleFeatureGroup: true,
        tileLayer: {
          urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
          options: {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 18,
            accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
            label: 'Default'
          }
        },
        dragMarkerProps: { 
          latlng: [51.488224, -0.090208],
          options: { draggable: true }
        },
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
            [51.518, -0.1124],
            [51.522, -0.0890],
            [51.518, -0.0556]
          ],
          options: { color: 'red' }
        },
        rectangleProps: {
          latlng: [[51.496, -0.115], [51.489, -0.102]],
          options: {color: "#ff7800", weight: 1}
        },
        multiPolylineProps: {
          latlng: [
            [[51.495, -0.0705], [51.489, -0.058]],
            [[51.488, -0.07084], [51.498, -0.0506]]
          ],
          options: { color: 'blue' }
        }
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    },

    methods: {
      handleMapClick(e) {
        alert(e.latlng)
      },
      handleMarkerReady(marker) {
        marker.bindPopup('Drag me!').openPopup()
      },
      handleMarkerDragEnd({ event, layer }) {
        alert(`Marker dragged to: ${layer.getLatLng()}`)
      }
    }
  }
</script>

<style type="text/css">
  .map-container {
    height: 400px;
    width: 500px;
    margin: 10px auto;
  }
</style>