<template></template>

<script>
  import Leaflet from 'leaflet'
  import { basemapLayer } from 'esri-leaflet'
  import LayerMixin from '@/mixins/LayerMixin'

  let EBasemapLayer = {
    name: 'e-basemap-layer',
    
    mixins: [LayerMixin],

    props: {
      basemap: {
        type: String,
        required: true
      },
      options: Object,
      vector: Boolean // vector not supported yet
    },

    data() {
      return {
        type: 'basemapLayer',
        defaultOptions: {}
      }
    },

    methods: {
      // overrides "construct" method within mixins/LayerMixin.js
      construct() {
        return basemapLayer(this.basemap, Object.assign({}, this.defaultOptions, this.mergedOptions))

        // Vector not supported yet

        // if (!this.basemap) throw new Error('esri.basemapLayer requires basemap string for hosted basemap')

        // return (this.vector)
        //   ? esri.Vector.basemapLayer(this.basemap, Object.assign({}, this.defaultOptions, this.mergedOptions))
        //   : 
      }
    }
  }

  export default EBasemapLayer
</script>
