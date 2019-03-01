<template></template>

<script>
  import Leaflet from 'leaflet'
  import LayerMixin from '@/mixins/LayerMixin'

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
      'options.icon'(icon) {
        this.innerLayer.setIcon(icon)
      }
    }
  }

  export default LMarker
</script>
