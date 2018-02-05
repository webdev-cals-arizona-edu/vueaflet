<template>
  <div id="app">
    <example-one/>
    <example-two/>
    <example-three/>
    <example-four/>
    <example-five/>
    <example-six/>
    <!-- <h1>From Store config</h1>
    <div class="example-map">
      <l-map map-id="storedMap"
        :options="{ zoom: 12, center: [32.231139, -110.953296] }"
        :basemaps="storedBasemaps" 
        :layers="storedLayers" 
        active-basemap="Street"/>
    </div>

    <h1>From Components</h1>
    <div class="example-map">
      <l-map map-id="componentMap" :options="{ zoom: 12, center: [32.231139, -110.953296] }">
        <l-tile-layer v-bind="streetBasemap"/>
        <l-feature-group layer-name="basic-markers-v2" :order="12">
          <l-marker :latlng="[32.231139, -110.953296]"/>
        </l-feature-group>

        <l-feature-group layer-name="more-markers-v2" :order="10">
          <l-marker :latlng="[32.231332940630914, -110.95161437988283]" :options="{ draggable: true }"/>
        </l-feature-group>
      </l-map>
    </div> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { VueafletBus } from 'buses'
  import ExampleOne from 'components/Examples/SettingUpMap'
  import ExampleTwo from 'components/Examples/MarkersCirclesPolygons'
  import ExampleThree from 'components/Examples/WorkingWithPopups'
  import ExampleFour from 'components/Examples/OtherVectorLayers'
  import ExampleFive from 'components/Examples/UsingGeoJson'
  import ExampleSix from 'components/Examples/VueafletGeoJsonCollection'

  export default {
    name: 'app',

    components: {
      ExampleOne,
      ExampleTwo,
      ExampleThree,
      ExampleFour,
      ExampleFive,
      ExampleSix
    },

    mounted() {},

    data() {
      return {
        streetBasemap: {
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
      ...mapState({
        storedLayers: state => state.maps.layers,
        storedBasemaps: state => state.maps.basemaps
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .example-map {
    margin: 0 auto;
    width: 500px;
    height: 100%;
  }

  .example-map .map {
    height: 400px;
  }
</style>
