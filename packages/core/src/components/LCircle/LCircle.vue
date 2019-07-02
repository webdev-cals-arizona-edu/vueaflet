<template></template>

<script>
  import LayerMixin from '@/mixins/LayerMixin'

  export default {
    name: 'l-circle',

    mixins: [LayerMixin],

    data() {
      return {
        type: 'circle',
        defaultOptions: {}
      }
    },

    watch: {
      latlng(newArray) {
        this.innerLayer.setLatLng(newArray)
      }
    }
  }
</script>
