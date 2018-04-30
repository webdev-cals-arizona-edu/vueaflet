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
        innerFeatureGroup: null
      }
    },
    
    props: {
      layerName: String,
      layers: Array,
      options: {
        type: Object,
        default: () => { return {} }
      },
      events: {
        type: Array,
        default: () => { return [] }
      },
      enableBus: Boolean,
      order: [String, Number]
    },
    
    created() {
      let existingFeatureGroup = this.getNamedLayer(this.layerName)

      this.innerFeatureGroup = (existingFeatureGroup)
        ? existingFeatureGroup
        : Leaflet.featureGroup()

      // only $emit on the VueafletBus is flag is enabled
      this.events.forEach((event) => {
        this.innerFeatureGroup.on(event, (ev) => { 
          this.$emit(event, { 
            event: ev, layer: this.innerFeatureGroup 
          }) 
        })

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
      registerOptions(options) {
        return Object.assign({}, options, {
          pane: (this.layerName) ? this.layerName : null,
          ...this.options
        })
      }
    }
  }

  export default LFeatureGroup

</script>
