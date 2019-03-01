<template></template>

<script>
  import 'leaflet.markercluster'
  import esriCluster from 'esri-leaflet-cluster'
  import LayerMixin from '@/mixins/LayerMixin'
  import { 
    VUEAFLET_ADD_MAP_LAYER,
    VUEAFLET_REMOVE_MAP_LAYER 
  } from '@vueaflet/core/src/store/mutation-types'
  import { mapMutations } from 'vuex'

  let EClusterFeatureLayer = {
    name: 'e-cluster-feature-layer',
    
    mixins: [LayerMixin],

    // watch: {
    //   'options.url'(val) {
    //     this.innerLayer.options.url = val
    //     this.redraw()
    //   },
    //   'options.where'(val) {
    //     this.innerLayer.options.where = val
    //     this.redraw()
    //   },
    //   'options.fields'(val) {
    //     this.innerLayer.options.fields = val
    //     this.redraw()
    //   }
    // },

    data() {
      return {
        type: 'clusterFeatureLayer',
        defaultOptions: {}
      }
    },

    methods: {
      ...mapMutations({
        addLayer: VUEAFLET_ADD_MAP_LAYER,
        removeLayer: VUEAFLET_REMOVE_MAP_LAYER
      }),
      // overrides "construct" method within mixins/LayerMixin.js
      construct() {
        return esriCluster.featureLayer(Object.assign({}, this.defaultOptions, this.mergedOptions))
      },
      redraw() {
        this.removeLayer({ id: this.mapId, layer: this.innerLayer})
        this.addLayer({ id: this.mapId, layer: this.innerLayer})
      }
    }
  }

  export default EClusterFeatureLayer
</script>
