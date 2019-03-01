<template></template>

<script>
  import LayerMixin from '@/mixins/LayerMixin'

  let EImageMapLayer = {
    name: 'e-image-map-layer',
    
    mixins: [LayerMixin],

    data() {
      return {
        type: 'imageMapLayer',
        defaultOptions: {}
      }
    },

    watch: {
      'options.opacity'(newOpacity) {
        if (newOpacity !== null || newOpacity !== undefined) {
          this.innerLayer.options.opacity = newOpacity
          this.innerLayer.redraw()
        }
      }
    }
  }

  export default EImageMapLayer
</script>
