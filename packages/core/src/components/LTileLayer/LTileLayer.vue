<template></template>

<script>
  import L from 'leaflet'
  import { mapMutations } from 'vuex'
  import { VUEAFLET_ADD_MAP_LAYER, VUEAFLET_REMOVE_MAP_LAYER } from '@/store/mutation-types'

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

    created() {
      this.innerLayer = L.tileLayer(this.urlTemplate, this.options)

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
