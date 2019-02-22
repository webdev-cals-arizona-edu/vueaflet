<template>
  <div class="feature-group">
    <slot></slot>
    <template v-for="(layer, index) in layers">
      <component :is="layerTypeLookup(layer.type)" v-bind="layer" :key="layer.id"/>
    </template>
  </div>
</template>

<script>
  import Leaflet from 'leaflet'
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import { VueafletBus } from '../../buses'
  import { 
    VUEAFLET_ADD_MAP_LAYER,
    VUEAFLET_ADD_NAMED_LAYER, 
    VUEAFLET_REMOVE_MAP_LAYER 
  } from '../../store/mutation-types'
  import { layerTypeLookup } from '../../utils'

  let LFeatureGroup = {
    name: 'l-feature-group',

    provide() {
      return {
        registerOptions: this.registerOptions
      }
    },

    inject: ['mapId'],

    data() {
      return {
        layerTypeLookup,
        // TODO: move this to root instance
        innerFeatureGroup: null
      }
    },
    
    props: {
      // optional layerName becomes key in $store.state.vueaflet.namedLayers
      layerName: String,
      layers: Array,
      // https://leafletjs.com/reference-1.3.0.html#featuregroup
      options: {
        type: Object,
        default: () => { return {} }
      },
      // https://leafletjs.com/reference-1.3.0.html#featuregroup
      events: {
        type: Array,
        default: () => { return [] }
      },
      // this prop enables VueafletBus which broadcasts all data.events across the app
      enableBus: Boolean,
      order: [String, Number]
    },
    
    created() {
      let existingFeatureGroup = this.getNamedLayer(this.layerName)

      this.innerFeatureGroup = (existingFeatureGroup)
        ? existingFeatureGroup
        : Leaflet.featureGroup()

      this.events.forEach((event) => {
        this.innerFeatureGroup.on(event, (ev) => { 
          this.$emit(event, { 
            event: ev, layer: this.innerFeatureGroup 
          }) 
        })

        // only $emit on the VueafletBus is flag is enabled
        this.enableBus && this.innerFeatureGroup.on(event, (ev) => {
          VueafletBus.$emit(`feature-group-${this.mapId}-${event}`, {
            event: ev, layer: this.innerFeatureGroup
          })
        })
      })

      this.layerName
        ? this.addNamedLayer({ id: this.mapId, name: this.layerName, layer: this.innerFeatureGroup, order: this.order })
        : this.addLayer({ id: this.mapId, layer: this.innerFeatureGroup })
    },

    mounted() {
      this.$emit('ready', this.layerName)
      VueafletBus.$emit(`feature-group-${this.mapId}-ready`, this.layerName)
    },

    destroyed() {
      (this.layerName)
        ? this.removeNamedLayer({ id: this.mapId, name: this.layerName })
        : this.removeLayer({ id: this.mapId, layer: this.innerFeatureGroup })
    },

    computed: {
      ...mapGetters(['getNamedLayer']),
    },

    methods: {
      ...mapMutations({
        addLayer: VUEAFLET_ADD_MAP_LAYER,
        addNamedLayer: VUEAFLET_ADD_NAMED_LAYER,
        removeLayer: VUEAFLET_REMOVE_MAP_LAYER
      }),
      ...mapActions(['removeNamedLayer']),
      // LFeatureGroup takes advantage of registerOptions in order to set a custom Leaflet pane named after this.layerName
      // this.layerName cannot be passed down to children or it would prevent future functionalily of named layers for UI elements
      registerOptions(options) {
        return {...options, ...{
          pane: (this.layerName) ? this.layerName : null,
          ...this.options
        }}
      }
    }
  }

  export default LFeatureGroup

</script>
