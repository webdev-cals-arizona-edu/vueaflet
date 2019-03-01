<template></template>

<script>
  import Leaflet from 'leaflet'
  import LayerMixin from '@/mixins/LayerMixin'

  export default {
    name: 'l-polygon',

    mixins: [LayerMixin],

    data() {
      return {
        type: 'polygon',
        defaultOptions: {}
      }
    },

    watch: {
      latlng(newArray) {
        this.innerLayer.setLatLng(newArray)
      }
    }
  }
</script>
