<template></template>

<script>
  import LayerMixin from '@/mixins/LayerMixin'

  let ETiledMapLayer = {
    name: 'e-tiled-map-layer',
    
    mixins: [LayerMixin],

    data() {
      return {
        type: 'tiledMapLayer',
        defaultOptions: {}
      }
    }
  }

  export default ETiledMapLayer
</script>
