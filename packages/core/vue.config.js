module.exports = {
  lintOnSave: false,
  css: {
    modules: true,
    extract: false
  },
  configureWebpack: {
    externals: [
      'leaflet',
      'lodash.filter',
      'lodash.foreach',
      'lodash.reduce',
      'lodash.values',
      'vue',
      'vuex'
    ]
  }
};