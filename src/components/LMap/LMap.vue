<template>
  <div class="map">
    <div :id="mapId" class="map__mount">
      <!-- The default "slot" will not "mount" unless the Leaflet map object has been instantiated in the vuex store -->
      <slot v-if="ready"></slot>
      
      <template v-if="ready">
        <!-- TODO: need a new prop for setBaseMap for toggle effect -->
        <l-tile-layer v-for="(basemap, index) in basemaps"
          :url-template="basemap.urlTemplate"
          :options="basemap.options"
          :key="basemap.label"
          v-if="activeBasemap === basemap.label"/>
      </template>

      <template v-if="ready">
        <component v-for="(layer, index) in layers"
          v-if="layer.visible"
          :is="layerTypeLookup(layer.type)" 
          :layer-name="layer.label"
          :order="layer.order || index"
          v-bind="layer"
          :key="index"/>
      </template>
    </div>
  </div>
</template>

<script>
  import { VueafletBus } from '../../buses'
  import { mapMutations, mapActions } from 'vuex'
  import { 
    VUEAFLET_ADD_MAP_EVENT,
    VUEAFLET_ADD_MAP_LAYER
  } from '../../store/mutation-types'
  import forEach from 'lodash.forEach'

  let LMap = {
    name: 'l-map',

    provide() {
      return {
        // this will get injected into all children
        // when groupds and layers are created, this id gets passed to the vueaflet store to in form it where to "addLayer"
        mapId: this.mapId
      }
    },

    props: {
      activeBasemap: String,
      basemaps: {
        type: Array,
        default() {
          return []
        }
      },
      layers: {
        type: Array,
        default: () => { return [] }
      },
      events: {
        type: Array,
        default: () => { return [] }
      },
      enableBus: Boolean,
      mapId: {
        type: String,
        default: 'mainMap',
        required: true
      },
      options: {
        type: Object,
        default: () => {
          return {
            zoom: 4,
            center: [39.36827914916014, -97.86621093750001]
          }
        }
      }
    },

    data() {
      return {
        innerMapId: this.mapId, // being grabbed by children
        ready: false
      }
    },

    mounted() {
      this.createMap({
        id: this.mapId,
        options: { ...this.options } 
      }).then(() => {
        this.ready = true
        this.$emit('ready')
        // TODO: added enable bus
        VueafletBus.$emit(`map-${this.mapId}-ready`)
      })

      // only $emit on the VueafletBus is flag is enabled
      this.events.forEach((event, index) => {
        this.addEvent({ 
          id: this.mapId, 
          event, 
          func: (ev) => { this.$emit(event, ev) }
        })
        
        this.enableBus && this.addEvent({
          id: this.mapId,
          event,
          func: (ev) => { VueafletBus.$emit(`map-${this.mapId}-${event}`, ev) }
        })
      })
    },

    methods: {
      ...mapMutations({
        addEvent: VUEAFLET_ADD_MAP_EVENT,
        addLayer: VUEAFLET_ADD_MAP_LAYER
      }),
      ...mapActions(['createMap', 'destroyMap']),
      layerTypeLookup(type) {
        return {
          'feature-group': 'l-feature-group',
          'esri-feature-layer': 'e-feature-layer',
          'esri-dynamic-map-layer': 'e-dynamic-map-layer',
          'geo-json': 'l-geo-json-layer'
        }[type]
      }
    },

    destroy() {
      this.destroyMap()
      // TODO: add $off to VueafletBus
    }
  }

  export default LMap
</script>

<style src="leaflet/dist/leaflet.css"></style>
<style>
  .map {
    position: relative;
    width:100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }

  .map__mount {
    width: 100%;
    height: 100%;
  }
</style>
