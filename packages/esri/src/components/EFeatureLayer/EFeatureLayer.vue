<template></template>

<script>
  import LayerMixin from '@/mixins/LayerMixin'

  let EFeatureLayer = {
    name: 'e-feature-layer',
    
    mixins: [LayerMixin],

    data() {
      return {
        type: 'featureLayer',
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

  export default EFeatureLayer
</script>
