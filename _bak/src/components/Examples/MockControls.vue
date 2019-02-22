<template>
  <div class="mock-controls" style="margin-top: 30px;">
    <button @click.prevent="getGeoJSON">getGeoJSON</button>
    <button @click.prevent="openPopups">openPopups</button>
    <button @click.prevent="getBounds">getBounds</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getNamedLayer'])
    },

    methods: {
      getFeatureGroup() {
        return this.getNamedLayer('featureGroup')
      },
      getGeoJSON() {
        alert(JSON.stringify(this.getFeatureGroup().toGeoJSON()))
      },
      openPopups() {
        let timeToWait = 0

        this.getFeatureGroup().eachLayer((layer) => {
          setTimeout(() => {
            layer.openPopup()
          }, timeToWait)

          timeToWait += 500
        })
      },
      getBounds() {
        alert(JSON.stringify(this.getFeatureGroup().getBounds()))
      }
    }
  }
</script>
