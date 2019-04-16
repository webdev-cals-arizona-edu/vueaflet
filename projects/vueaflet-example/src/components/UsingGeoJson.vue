<template>
  <div class="example-map">
    <h2>Using GeoJSON</h2>
    <p>Contains all the GeoJSON examples from the <a href="http://leafletjs.com/examples/geojson/" target="_blank">Leaflet documentation</a></p>

    <l-map :map-id="mapId">
      <l-tile-layer v-bind="tileLayer"/>

      <l-geo-json-layer layer-name="geojsonFeature" :features="geojsonFeature" :options="optionsForPopupFeatures"/>
      <l-geo-json-layer layer-name="myLines" :features="myLines"/>
      <l-geo-json-layer layer-name="statesWithStyles" :features="states" :options="optionsForStates"/>
      <l-geo-json-layer layer-name="pointToLayer" :features="someGeojsonFeature" :options="optionsForPointToLayer"/>
      <l-geo-json-layer layer-name="filterFeatures" :features="filterFeatures" :options="optionsForFilter"/>
    </l-map>

    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/vueaflet/blob/master/src/components/Examples/UsingGeoJson.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import * as Leaflet from 'leaflet'
  import { mapGetters} from 'vuex'

  export default {
    components: {},

    mounted() {
      this.getMap(this.mapId).setView([44.28650, -104.897460], 4);
    },

    data() {
      return {
        mapId: 'example-five',
        tileLayer: {
          urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
          options: {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 18,
            accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
            label: 'Default'
          }
        },
        geojsonFeature: [{
          "type": "Feature",
          "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [-104.99404, 39.75621]
          }
        }],
        myLines: [
          {
            "type": "LineString",
            "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
          }, 
          {
            "type": "LineString",
            "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
          }
        ],
        states: [
          {
            "type": "Feature",
            "properties": {"party": "Republican"},
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-104.05, 48.99],
                [-97.22,  48.98],
                [-96.58,  45.94],
                [-104.03, 45.94],
                [-104.05, 48.99]
              ]]
            }
          }, 
          {
            "type": "Feature",
            "properties": {"party": "Democrat"},
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-109.05, 41.00],
                [-102.06, 40.99],
                [-102.03, 36.99],
                [-109.04, 36.99],
                [-109.05, 41.00]
              ]]
            }
          }
        ],
        someGeojsonFeature: [{
          "type": "Point",
          "coordinates": [-99.9316, 43.2171]
        }],
        filterFeatures: [
          {
            "type": "Feature",
            "properties": {
              "name": "Coors Field",
              "show_on_map": true
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-105.0183, 41.87211]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Busch Field",
              "show_on_map": false
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-104.98404, 39.74621]
            }
          }
        ]
      }
    },

    computed: {
      ...mapGetters(['getMap']),
      optionsForStates() {
        return {
          style: function(feature) {
            switch (feature.properties.party) {
              case 'Republican': return { color: "#ff0000" }
              case 'Democrat':   return { color: "#0000ff" }
            }
          }
        }
      },
      optionsForPointToLayer() {
        const geojsonMarkerOptions = {
          radius: 8,
          fillColor: "#ff7800",
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }

        return {
          pointToLayer: function (feature, latlng) {
            return Leaflet.circleMarker(latlng, geojsonMarkerOptions);
          }
        }
      },
      optionsForPopupFeatures() {
        return {
          onEachFeature: this.onPopupFeature
        }
      },
      optionsForFilter() {
        return {
          filter: function(feature, layer) {
            return feature.properties.show_on_map;
          }
        }
      }
    },

    methods: {
      onPopupFeature(feature, layer) {
        if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        }
      }
    }
  }
</script>
