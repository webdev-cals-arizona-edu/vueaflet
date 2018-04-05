import Leaflet from 'leaflet'
import { mapMutations } from 'vuex'
import { 
  VUEAFLET_ADD_MAP_LAYER, 
  VUEAFLET_REMOVE_MAP_LAYER 
} from '../store/mutation-types'
import { VueafletBus } from '../buses'

export default {
  inject: {
    mapId: { default: 'mainMap' },
    registerOptions: {
      default: () => {}
    }
  },

  props: {
    latlng: {
      type: [Array, Object],
    },
    options: {
      type: Object,
      default: () => { return {} }
    },
    events: {
      type: Array,
      default: () => { return [] }
    },
    enableBus: Boolean,
    popup: String
  },

  data() {
    return {
      parent: null,
      mergedOptions: null
    }
  },

  created() {
    this.mergedOptions = (this.registerOptions) ? this.registerOptions(this.options) : this.options
    this.innerLayer = Leaflet[this.type](this.latlng, Object.assign({}, this.defaultOptions, this.mergedOptions))
  },

  mounted() {
    this.addEventListeners()
    this.addLayerToParent()

    this.popup && this.innerLayer.bindPopup(this.popup)

    this.$emit('ready', this.innerLayer)
    this.enableBus && VueafletBus.$emit(`${this.type}-${this.mapId}-ready`, this.innerLayer)
  },

  destroyed() {
    if (!this.parent) {
      this.removeLayer({ id: this.mapId, layer: this.innerLayer })
    }
  },

  methods: {
    ...mapMutations({
      addLayer: VUEAFLET_ADD_MAP_LAYER,
      removeLayer: VUEAFLET_REMOVE_MAP_LAYER
    }),
    addLayerToParent() {
      let { 
        $data: {
          innerFeatureGroup
        } = {} 
      } = this.$parent

      this.parent = innerFeatureGroup

      this.parent
        ? this.parent.addLayer(this.innerLayer)
        : this.addLayer({ id: this.mapId, layer: this.innerLayer })
    },
    addEventListeners() {
      // only $emit on the VueafletBus is flag is enabled
      this.events.forEach((event) => {
        this.innerLayer.on(event, (ev) => { this.$emit(event, { event: ev, layer: this.innerLayer }) })
        this.enableBus && this.innerLayer.on(event, (ev) => { VueafletBus.$emit(`${this.type}-${this.mapId}-${event}`, { event: ev, layer: this.innerLayer }) })
      })
    }
  }
}