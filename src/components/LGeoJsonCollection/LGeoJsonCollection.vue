<template>
  <div class="geo-json-collection">
    <template v-for="(features, index) in collection">
      <!-- the key attr is what allows this to work! -->
      <l-geo-json-layer :features="features" 
        :options="getOptions(getGeometryType(features))" 
        :layer-name="`${layerName}-${getGeometryType(features)}`" 
        :events="['add']"
        v-on:add="handleAddedToMap"
        :key="index"
        :order="order"/>
    </template>
  </div>
</template>

<script>
  /**
    LGeoJsonCollection.vue

    GeoJSON best practice is to only create an array of features with like geo types
    However if you happen to have an array of features with a mixed collection of geo types
    this component will separate them out and mount LGeoJsonLayer(s) respectively

    This works well for search results from an Esri REST endpoint that returns GeoJSON
  */
  import values from 'lodash.values'
  import reduce from 'lodash.reduce'

  let LGeoJsonCollection = {
    name: 'l-geo-json-collection',

    created() {
      this.createCollection()
    },

    watch: {
      features() {
        // if features array ever changes, recreate collection
        this.createCollection()
      }
    },

    data() {
      return {
        collection: [],
        geoJsonLayers: [] 
      }
    },

    props: {
      layerName: String,
      order: Number,
      features: { 
        type: Array,
        default() { return [] }
      },
      // see this.getOptions
      // see src/components/Examples/VueafletGeoJsonCollection
      // these props are callback functions to provide options for each geoType that the parent can control
      pointOptions: Function,
      multipointOptions: Function,
      linestringOptions: Function,
      multilinestringOptions: Function,
      polygonOptions: Function,
      multipolygonOptions: Function
    },

    methods: {
      createCollection() {
        /** 
          this methods reduces the prop.feautres array into:
          {
            'Point': [GeoJSON collection array],
            'Polygon': [GeoJSON collection array],
            ...
          }
        */
        this.collection = []

        let innerCollection = reduce(this.features, (outcome, feature) => {
          let geoType = feature.geometry.type

          outcome[geoType]
            ? outcome[geoType].push(feature)
            : outcome[geoType] = [feature]

          return outcome
        }, {})

        let temp = values(innerCollection)

        this.collection = values(innerCollection)
      },
      getGeometryType(features) {
        let innerType;
        let index = 0;

        do {
          let { 
            geometry: {
              type
            } = {}
          } = features[index]

          innerType = type
          index++
        } while(!innerType)

        return innerType
      },
      getOptions(type) {
        return this[`${type.toLowerCase()}Options`](type) || {}
      },
      handleAddedToMap(obj) {
        this.geoJsonLayers.push(obj.layer)

        if(this.geoJsonLayers.length === this.collection.length) {
          this.$emit('ready', this.geoJsonLayers)
        }
      }
    }
  }

  export default LGeoJsonCollection
</script>
