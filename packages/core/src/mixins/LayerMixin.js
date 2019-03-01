/**
  LayerMixin.js

  This mixin does all the heavy lifting for simple Leafleft UI and Vector layers.
*/

import Leaflet from 'leaflet'
import { mapMutations } from 'vuex'
import { 
  VUEAFLET_ADD_MAP_LAYER, 
  VUEAFLET_REMOVE_MAP_LAYER 
} from '@/store/mutation-types'
import VueafletBus from '@/buses'

export default {
  inject: {
    mapId: { default: 'mainMap' },
    registerOptions: {
      default: () => {}
    }
  },

  // Marker, Circle, Polygon, Polyline, Rectangle all accept latlng(s) and options; see Leaflet docs for options
  props: {
    latlng: {
      // https://leafletjs.com/reference-1.3.0.html#latlng
      type: [Array, Object],
    },
    options: {
      type: Object,
      default: () => { return {} }
    },
    // example: ['click', 'dblclick', 'dragstart']
    // see Leaflet docs for which events are supported for each type
    events: {
      type: Array,
      default: () => { return [] }
    },
    // this prop enables VueafletBus which broadcasts all data.events across the app
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
    // this.registerOptions allows the parent to merge in options for it's children if context isn't available when child mounts
    // currently this.registerOptions is only being used by LFeatureGroup in order to set a custom "pane"
    this.mergedOptions = (this.registerOptions) ? this.registerOptions(this.options) : this.options
    this.innerLayer = Leaflet[this.type](this.latlng, Object.assign({}, this.defaultOptions, this.mergedOptions))
  },

  mounted() {
    // setup listeners
    this.addEventListeners()
    this.addLayerToParent()

    this.popup && this.innerLayer.bindPopup(this.popup)

    this.$emit('ready', this.innerLayer)
    this.enableBus && VueafletBus.$emit(`${this.type}-${this.mapId}-ready`, this.innerLayer)
  },

  destroyed() {
    this.parent
      ? this.parent.removeLayer(this.innerLayer)
      : this.removeLayer({ id: this.mapId, layer: this.innerLayer })
  },

  methods: {
    ...mapMutations({
      addLayer: VUEAFLET_ADD_MAP_LAYER,
      removeLayer: VUEAFLET_REMOVE_MAP_LAYER
    }),
    addLayerToParent() {
      // currently this logic only applies to layer that are children to a LFeatureGroup
      // innerFeatureGroup is unique to LFeatureGroup
      let { 
        $data: {
          innerFeatureGroup
        } = {} 
      } = this.$parent

      this.parent = innerFeatureGroup

      // TODO: add "named" simple UI objects
      this.parent
        ? this.parent.addLayer(this.innerLayer)
        : this.addLayer({ id: this.mapId, layer: this.innerLayer })
    },
    addEventListeners() {
      // loop through data.evetns array and register all events
      // only $emit on the VueafletBus if 'enable-bus = true'
      this.events.forEach((event) => {
        this.innerLayer.on(event, (ev) => { this.$emit(event, { event: ev, layer: this.innerLayer }) })
        this.enableBus && this.innerLayer.on(event, (ev) => { VueafletBus.$emit(`${this.type}-${this.mapId}-${event}`, { event: ev, layer: this.innerLayer }) })
      })
    }
  }
}