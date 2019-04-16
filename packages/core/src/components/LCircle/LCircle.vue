<template></template>

<script>
  import * as Leaflet from 'leaflet'
  import LayerMixin from '@/mixins/LayerMixin'

  export default {
    name: 'l-circle',

    mixins: [LayerMixin],

    data() {
      return {
        type: 'circle',
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
