<template></template>

<script>
  import Leaflet from 'leaflet'
  import LayerMixin from '@/mixins/LayerMixin'

  const events = [
    'click',
    'dblclick',
    'mousedown',
    'mouseover',
    'mouseout',
    'contextmenu',
    'dragstart',
    'drag',
    'dragend',
    'move',
    'add',
    'remove',
    'popupopen',
    'popupclose',
    'tooltipopen',
    'tooltipclose'
  ]

  export default {
    name: 'l-polyline',

    mixins: [LayerMixin],

    data() {
      return {
        type: 'polyline',
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
