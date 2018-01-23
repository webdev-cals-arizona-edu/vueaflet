<template></template>

<script>
  import Leaflet from 'leaflet'
  import LayerMixin from 'mixins/LayerMixin'
  import { VueafletBus } from '../../buses'

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
    },

    mounted() {
      events.forEach((event) => {
        this.innerLayer.on(event, (ev) => { this.$emit(event, this.innerLayer) })
        this.innerLayer.on(event, (ev) => { VueafletBus.$emit(`${this.type}-${this.mapId}-${event}`, this.innerLayer) })
      })
    }
  }
</script>
