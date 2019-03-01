<template></template>

<script>
  import LayerMixin from '@/mixins/LayerMixin'

  let EDynamicMapLayer = {
    name: 'e-dynamic-map-layer',
    
    mixins: [LayerMixin],

    data() {
      return {
        type: 'dynamicMapLayer',
        defaultOptions: {}
      }
    },

    watch: {
      'options.layers': {
        handler(newLayers) {
          this.innerLayer.options.layers = newLayers
          this.innerLayer.redraw()
        },
        deep: true
      },
      'options.opacity'(newOpacity) {
        if (newOpacity !== null || newOpacity !== undefined) {
          this.innerLayer.options.opacity = newOpacity
          this.innerLayer.redraw()
        }
      }
    }
  }

  export default EDynamicMapLayer
</script>
