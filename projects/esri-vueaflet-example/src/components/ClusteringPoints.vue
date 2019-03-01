<template>
  <div class="example-map">
    <h2>Clustering Points</h2>
    <p>
      This component requires <code>npm install --save-dev leaflet.markercluster esri-leaflet-cluster</code>
    </p>
    <p>
      The CSS from <code>leaflet.mark</code> is not shipped with <code>@vueaflet/esri</code> so you must include it in your component: <br />
      <code>
        import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
        import 'leaflet.markercluster/dist/MarkerCluster.css'
      </code>
    </p>
    <l-map :map-id="mapId">
      <e-basemap-layer 
        basemap="Gray"/>
      <e-cluster-feature-layer 
        v-bind="featureLayerOptions"
        :events="['clusterclick']"
        enable-bus
        v-on:clusterclick="handleClusterClick"/>
    </l-map>

    
    <p>
      <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet/blob/master/examples/ClusteringPoints.vue" target="_blank" rel="noopener">Code on Github</a>
    </p>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
  import 'leaflet.markercluster/dist/MarkerCluster.css'

  export default {
    mounted() {
      this.getMap(this.mapId).setView([45.526, -122.667], 15)
    },

    data() {
      return {
        mapId: 'clustering-points',
        featureLayerOptions: {
          layerName: 'clusteringPoints',
          options: {
            url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Trimet_Transit_Stops/FeatureServer/0'
          }
        }
      }
    },

    computed: {
      ...mapGetters(['getMap'])
    },

    methods: {
      handleClusterClick(e) {
        console.log('Cluster event: ', e)
      }
    }
  }
</script>
