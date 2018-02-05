<template>
  <div class="geo-json-collection">
    <template v-for="(features, index) in collection">
      <!-- the key attr is what allows this to work! -->
      <l-geo-json-layer :features="features" 
        :options="getOptions(getGeometryType(features))" 
        :layer-name="`${layerName}-${getGeometryType(features)}`" 
        :key="index"
        :order="order"/>
    </template>
  </div>
</template>

<script>
  import values from 'lodash.values'
  import reduce from 'lodash.reduce'

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
      multipointOptions: Function,
      linestringOptions: Function,
      multilinestringOptions: Function,
      polygonOptions: Function,
      multipolygonOptions: Function
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
      }
    }
  }

  export default LGeoJsonCollection
</script>
