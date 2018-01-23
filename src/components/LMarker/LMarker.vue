<template></template>

<script>
  import Leaflet from 'leaflet'
  import { VueafletBus } from '../../buses'
  import LayerMixin from 'mixins/LayerMixin'

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

  let LMarker = {
    name: 'l-marker',

    mixins: [LayerMixin],

    data() {
      return {
        type: 'marker',
        defaultOptions: {
          icon: Leaflet.icon({
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
            iconSize: [25, 41],
            shadowSize: [41, 41],
            iconAnchor: [12.5, 41],
            shadowAnchor: [13.1, 41],
            popupAnchor: [2, -33]
          })
        }
      }
    },

    watch: {
      latlng(newArray) {
        this.innerLayer.setLatLng(newArray)
      },
      'options.draggable'(newValue) {
        (newValue)
          ? this.innerLayer.dragging.enable()
          : this.innerLayer.dragging.disable()
      },
      'options.icon': {
        handler(icon) {
          this.innerLayer.setIcon(icon)
        },
        deep: true
      }
    },

    mounted() {
      events.forEach((event) => {
        this.innerLayer.on(event, (ev) => { this.$emit(event, this.innerLayer) })
        this.innerLayer.on(event, (ev) => { VueafletBus.$emit(`${this.type}-${this.mapId}-${event}`, this.innerLayer) })
      })
    }
  }

  export default LMarker
</script>
