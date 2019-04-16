<template></template>

<script>
  import * as Leaflet from 'leaflet'
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import VueafletBus from '@/buses'
  import { 
    VUEAFLET_ADD_MAP_LAYER,
    VUEAFLET_ADD_NAMED_LAYER, 
    VUEAFLET_REMOVE_MAP_LAYER 
  } from '@/store/mutation-types'


  delete Leaflet.Icon.Default.prototype._getIconUrl
  Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })

  let LGeoJsonLayer = {
    name: 'l-geo-json-layer',
    
    inject: ['mapId'],

    data() {
      return {
        innerGeoJSON: null
      }
    },
    
    props: {
      layerName: {
        type: String,
        required: true
      },
      features: {
        type: Array,
        default() { return [] }
      },
      events: {
        type: Array,
        default: () => { return [] }
      },
      enableBus: Boolean,
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      order: Number
    },

    mounted() {
      this.initRoutine()
      this.readyRoutine()
    },

    beforeDestroy() {
       this.destroyRoutine()
    },

    computed: {
      ...mapGetters(['getNamedLayer'])
    },

    methods: {
      ...mapMutations({
        addLayer: VUEAFLET_ADD_MAP_LAYER,
        addNamedLayer: VUEAFLET_ADD_NAMED_LAYER,
        removeLayer: VUEAFLET_REMOVE_MAP_LAYER
      }),
      ...mapActions(['removeNamedLayer']),
      initRoutine() {
        let existingLayer = this.getNamedLayer(this.layerName)

        // if layer already exists, use L.geoJSON.addData method
        // see https://leafletjs.com/reference-1.3.0.html#geojson
        this.innerGeoJSON = (existingLayer)
          ? existingLayer.addData(this.features)
          : Leaflet.geoJSON(
            this.features,
            Object.assign({}, this.options, { pane: this.layerName })
          )

        this.events.forEach((event) => {
          this.innerGeoJSON.on(event, (ev) => { 
            this.$emit(event, { 
              event: ev, layer: this.innerGeoJSON 
            }) 
          })

          // only $emit on the VueafletBus is flag is enabled
          this.enableBus && this.innerGeoJSON.on(event, (ev) => {
            VueafletBus.$emit(`geo-json-${this.mapId}-${event}`, {
              event: ev, layer: this.innerGeoJSON
            })
          })
        })

        this.layerName
          ? this.addNamedLayer({ id: this.mapId, name: this.layerName, layer: this.innerGeoJSON, order: this.order })
          : this.addLayer({ id: this.mapId, layer: this.innerGeoJSON })
      },
      readyRoutine() {
        this.$emit('ready', this.layerName)
        VueafletBus.$emit(`geo-json-${this.layerName}-${this.mapId}-ready`, this.layerName)
      },
      destroyRoutine() {
        if (this.layerName && this.getNamedLayer(this.layerName)) {
          this.removeNamedLayer({ id: this.mapId, name: this.layerName })
        }
      }
    }
  }

  export default LGeoJsonLayer
</script>
