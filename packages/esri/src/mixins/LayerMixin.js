import Leaflet from 'leaflet'
import * as esri from 'esri-leaflet'
import { mapMutations, mapGetters, mapActions } from 'vuex'
import { 
  VUEAFLET_ADD_MAP_LAYER,
  VUEAFLET_ADD_NAMED_LAYER, 
  VUEAFLET_REMOVE_MAP_LAYER 
} from '@vueaflet/core/src/store/mutation-types'
import { Bus as VueafletBus } from '@vueaflet/core'

export default {
  inject: {
    mapId: { default: 'mainMap' },
    registerOptions: {
      default: () => {}
    }
  },

  // most esri-leaflet constuctors just take an options object
  // but Basemap, DynamicMap, FeatureLayer, TiledMapLayer, ImageMapLayer, ClusterFeatureLayer all require URL
  props: {
    options: {
      type: Object,
      required: true,
      validator: (value) => {
        // make sure props.options.url exists
        if (!value.url) console.error(`${this.type} requires options.url`)

        return !!value.url
      },
      default: () => {
        return {}
      }
    },
    layerName: String,
    order: {
      type: Number,
      default: 1
    },
    events: {
      type: Array,
      default: () => { return [] }
    },
    // this prop enables VueafletBus which broadcasts all data.events across the app
    // uses same bus from Vueaflet
    enableBus: Boolean
  },

  data() {
    return {
      mergedOptions: null
    }
  },

  created() {
    let existingLayer = this.getNamedLayer(this.layerName)
    
    // this.registerOptions is not being used by any parent components yet
    this.mergedOptions = (this.registerOptions) ? this.registerOptions(this.options) : this.options
    // this.construct is a methed, see below, which allows components that use this mixin to defined their own
    // construct method to overwrite this, see EClusterFeatureLayer
    this.innerLayer = existingLayer || this.construct()

    // if a layer already exists with this name, then just re-add it back to the main map
    this.layerName && !existingLayer
      ? this.addNamedLayer({
          id: this.mapId,
          name: this.layerName,
          order: this.order,
          layer: this.innerLayer
        })
      : this.addLayer({
          id: this.mapId,
          order: this.order,
          layer: this.innerLayer
        })
  },

  mounted() {
    this.addEventListeners()

    this.$emit('ready', this.innerLayer)
    this.enableBus && VueafletBus.$emit(`${this.type}-${this.mapId}-ready`, this.innerLayer)
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
    construct() {
      return esri[this.type](Object.assign({}, this.defaultOptions, this.mergedOptions))
    },
    addEventListeners() {
      // only $emit on the VueafletBus is flag is enabled
      this.events.forEach((event) => {
        this.innerLayer.on(event, (ev) => { this.$emit(event, { event: ev, layer: this.innerLayer }) })
        this.enableBus && this.innerLayer.on(event, (ev) => { VueafletBus.$emit(`${this.type}-${this.mapId}-${event}`, { event: ev, layer: this.innerLayer }) })
      })
    }
  },

  destroyed() {
    this.layerName
      ? this.removeNamedLayer({ id: this.mapId, name: this.layerName })
      : this.removeLayer({ id: this.mapId, layer: this.innerLayer })
  }
}