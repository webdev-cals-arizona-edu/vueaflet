<template></template>

<script>
  import Leaflet from 'leaflet'
  import { MapBus } from 'buses'
  import { mapMutations } from 'vuex'
  import { VUEAFLET_ADD_MAP_LAYER, VUEAFLET_REMOVE_MAP_LAYER } from 'store/mutation-types'

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
    
    inject: ['mapId', 'registerOptions'],

    props: {
      latlng: {
        type: [Array, Object],
      },
      options: {
        type: Object,
        default: () => { return {} }
      }
    },

    data() {
      return {
        innerMarker: null,
        parent: null,
        defaultIcon: Leaflet.icon({
          iconUrl: require('leaflet/dist/images/marker-icon.png'),
          shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
          iconSize: [25, 41],
          shadowSize: [41, 41],
          iconAnchor: [12.5, 41],
          shadowAnchor: [13.1, 41]
        })
      }
    },

    watch: {
      latlng(newArray) {
        this.innerMarker.setLatLng(newArray)
      },
      'options.draggable'(newValue) {
        (newValue)
          ? this.innerMarker.dragging.enable()
          : this.innerMarker.dragging.disable()
      },
      'options.icon': {
        handler(icon) {
          this.innerMarker.setIcon(icon)
        },
        deep: true
      }
    },

    mounted() {
      let options = (this.registerOptions) ? this.registerOptions(this.options) : {}

      this.innerMarker = Leaflet.marker(this.latlng, Object.assign({
        icon: this.defaultIcon
      }, options))

      // TODO: can probably do this during the "registerOptions" call back
      let { 
        $data: {
          innerFeatureGroup
        } = {} 
      } = this.$parent

      this.parent = innerFeatureGroup

      this.parent
        ? this.parent.addLayer(this.innerMarker)
        : this.addLayer({ id: this.mapId, layer: this.innerMarker })

      events.forEach((event) => {
        this.innerMarker.on(event, (ev) => { this.$emit(event, this.innerMarker) })
        this.innerMarker.on(event, (ev) => { MapBus.$emit(`marker-${this.mapId}-${event}`, this.innerMarker) })
      })
    },

    destroyed() {
      if (!this.parent) {
        this.removeLayer({ id: this.mapId, layer: this.innerMarker })
      }
    },

    methods: {
      ...mapMutations({
        addLayer: VUEAFLET_ADD_MAP_LAYER,
        removeLayer: VUEAFLET_REMOVE_MAP_LAYER
      })
    }
  }

  export default LMarker
</script>
