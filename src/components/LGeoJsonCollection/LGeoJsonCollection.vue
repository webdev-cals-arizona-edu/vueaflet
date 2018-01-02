<template>
  <div class="geo-json-collection">
    <template v-for="(features, index) in collection">
      <!-- the key attr is what allows this to work! -->
      <l-geo-json-layer :features="features" 
        :options="getOptions(features[0].geometry.type)" 
        :layer-name="`${layerName}-${features[0].geometry.type}`" 
        :key="getKey(features[0])"
        :order="order"/>
    </template>
  </div>
</template>

<script>
  import values from 'lodash.values'
  import reduce from 'lodash.reduce'
  // TODO: this componet could be optimized by normalizing the data into "feature groups"
  // that way geo-json-layer is triggering so many actions and mutaitons
  let LGeoJsonCollection = {
    name: 'l-geo-json-collection',

    created() {
      this.createCollection()
    },

    watch: {
      features() {
        this.createCollection()
      }
    },

    data() {
      return {
        collection: []
      }
    },

    props: {
      layerName: String,
      order: Number,
      features: { 
        type: Array,
        default() { return [] }
      },
      pointOptions: Function,
      multipolygonOptions: Function,
      multipointOptions: Function,
      polygonOptions: Function,
      multilinestringOptions: Function,
      linestringOptions: Function
    },

    methods: {
      createCollection() {
        this.collection = []

        let innerCollection = reduce(this.features, (outcome, feature) => {
          let geoType = feature.geometry.type

          outcome[geoType]
            ? outcome[geoType].push(feature)
            : outcome[geoType] = [feature]

          return outcome
        }, {})

        let temp = values(innerCollection)
        // debugger

        this.collection = values(innerCollection)
      },
      getOptions(type) {
        return this[`${type.toLowerCase()}Options`](type) || {}
      },
      getKey(feature) {
        let {
          id,
          layerId,
          properties: {
            OBJECTID,
            OBJECTID_1
          } = {}
        } = feature

        return `${feature.id}${feature.layerId}${OBJECTID || OBJECTID_1}`
      }
    }
  }

  export default LGeoJsonCollection
</script>
