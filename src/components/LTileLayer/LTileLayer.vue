<template></template>

<script>
  import Leaflet from 'leaflet'
  import { VueafletBus } from '../../buses'
  import { mapMutations } from 'vuex'
  import { VUEAFLET_ADD_MAP_LAYER, VUEAFLET_REMOVE_MAP_LAYER } from '../../store/mutation-types'

  // TODO: add events

  let LTileLayer = {
    name: 'l-tile-layer',

    inject: ['mapId'],

    props: {
      urlTemplate: {
        type: String,
        required: true
      },
      options: {
        type: Object,
        required: true,
        default: () => {
          return {}
        }
      }
    },

    data() {
      return {
        innerLayer: null
      }
    },

    created() {
      this.innerLayer = Leaflet.tileLayer(this.urlTemplate, this.options)

      this.addLayer({ id: this.mapId, layer: this.innerLayer })
    },

    destroyed() {
      this.removeLayer({ id: this.mapId, layer: this.innerLayer })
    },

    methods: {
      ...mapMutations({
        addLayer: VUEAFLET_ADD_MAP_LAYER,
        removeLayer: VUEAFLET_REMOVE_MAP_LAYER
      })
    }
  }

  export default LTileLayer
</script>
