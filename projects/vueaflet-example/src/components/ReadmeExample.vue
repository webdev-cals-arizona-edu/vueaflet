<template>
  <div class="example-map">
    <h2>Readme Example</h2>
    <p>Find the tutorial to put this map together on the main <a href="https://github.com/webdev-cals-arizona-edu/vueaflet#getting-started" target="_blank">GitHub README page</a>.</p>
    <l-map :mapId="mapId" :events="['click']" v-on:click="handleMapClick">
      <l-tile-layer v-bind="tileLayer"/>
      <l-marker v-bind="dragMarkerProps"
          :events="['dragend']"
          v-on:ready="handleDragMarkerReady"
          v-on:dragend="handleMarkerDragEnd"/>
      <l-rectangle v-bind="rectangleProps"/>
      <l-polyline v-bind="polylineProps"/>
      <l-polyline v-bind="multiPolylineProps"/>

      <l-feature-group v-if="toggleFeatureGroup" 
        :events="['add']"
        layer-name="featureGroup" 
        v-on:add="handleFeatureGroupAdd">
        <l-marker v-bind="markerProps"/>
        <l-circle v-bind="circleProps" popup="Hello. I am a circle."/>
        <l-polygon v-bind="polygonProps" popup="Hello. I am a polygon." v-if="togglePolygonChildOfGroup"/>
      </l-feature-group>
    </l-map>

    <button @click.prevent="toggleFeatureGroup = !toggleFeatureGroup">Toggle Feature Group</button>
    <button @click.prevent="togglePolygonChildOfGroup = !togglePolygonChildOfGroup">Toggle Polygon Child of Group</button>
    <button @click.prevent="handleDisableDragMarker">Toggle drag marker</button>
    <button @click.prevent="handleMarkerClick">Toggle marker icon</button>
    <mock-controls/>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/ReadmeExample.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MockControls from './MockControls'
  import * as Leaflet from 'leaflet'

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
        markerClicks: 0,
        toggleFeatureGroup: true,
        togglePolygonChildOfGroup: true,
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
        markerProps: { 
          popup: 'Hello. I am a marker.',
          latlng: [51.5, -0.09],
          options: {}
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
          options: { color: "#ff7800", weight: 1 }
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
      handleMarkerClick() {
        this.markerClicks = this.markerClicks + 1

        if (this.markerClicks % 2 === 0) {
          this.markerProps.options = Object.assign({}, this.markerProps.options, {
            icon: Leaflet.icon({
              iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-west.png',
              iconSize: [25, 41],
              shadowSize: [41, 41],
              iconAnchor: [12.5, 41],
              shadowAnchor: [13.1, 41],
              popupAnchor: [2, -33]
            })
          })
        } else {
          this.markerProps.options = Object.assign({}, this.markerProps.options, {
            icon: Leaflet.icon({
              iconUrl: require('leaflet/dist/images/marker-icon.png'),
              shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
              iconSize: [25, 41],
              shadowSize: [41, 41],
              iconAnchor: [12.5, 41],
              shadowAnchor: [13.1, 41],
              popupAnchor: [2, -33]
            })
          })
        }
      },
      handleDragMarkerReady(marker) {
        marker.bindPopup('Drag me!').openPopup()
      },
      handleMarkerDragEnd({ event, layer }) {
        alert(`Marker dragged to: ${layer.getLatLng()}`)
      },
      handleDisableDragMarker() {
        this.dragMarkerProps.options.draggable = !this.dragMarkerProps.options.draggable
      },
      handleFeatureGroupAdd(e) {
        console.log(e)
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
