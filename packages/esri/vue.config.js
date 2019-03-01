module.exports = {
  lintOnSave: false,
  css: {
    modules: true,
    extract: false
  },
  configureWebpack: {
    externals: [
      'leaflet',
      'esri-leaflet',
      'esri-leaflet-cluster',
      'leaflet.markercluster',
      'lodash.filter',
      'lodash.foreach',
      'lodash.reduce',
      'lodash.values',
      '@vueaflet/core',
      'vue',
      'vuex'
    ]
  }
};
