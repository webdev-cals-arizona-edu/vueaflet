(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VUEAFLET_CREATE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VUEAFLET_ADD_MAP_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VUEAFLET_ADD_NAMED_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return VUEAFLET_REMOVE_MAP_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return VUEAFLET_REMOVE_NAMED_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VUEAFLET_ADD_MAP_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return VUEAFLET_SET_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VUEAFLET_ADD_TO_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return VUEAFLET_PAN_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VUEAFLET_PAN_TO_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return VUEAFLET_PM_ENABLE_DRAW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return VUEAFLET_PM_DISABLE_DRAW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return VUEAFLET_PM_ADD_SHAPE_LAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return VUEAFLET_PM_REMOVE_SHAPE_LAYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return VUEAFLET_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return VUEAFLET_INVALIDATE; });
var VUEAFLET_CREATE_MAP = 'VUEAFLET_CREATE_MAP';
var VUEAFLET_ADD_MAP_LAYER = 'VUEAFLET_ADD_MAP_LAYER';
var VUEAFLET_ADD_NAMED_LAYER = 'VUEAFLET_ADD_NAMED_LAYER';
var VUEAFLET_REMOVE_MAP_LAYER = 'VUEAFLET_REMOVE_MAP_LAYER';
var VUEAFLET_REMOVE_NAMED_LAYER = 'VUEAFLET_REMOVE_NAMED_LAYER';
var VUEAFLET_ADD_MAP_EVENT = 'VUEAFLET_ADD_MAP_EVENT';
var VUEAFLET_SET_VIEW = 'VUEAFLET_SET_VIEW';
var VUEAFLET_ADD_TO_MAP = 'VUEAFLET_ADD_TO_MAP';
var VUEAFLET_PAN_TO = 'VUEAFLET_PAN_TO';
var VUEAFLET_PAN_TO_OFFSET = 'VUEAFLET_PAN_TO_OFFSET';
var VUEAFLET_PM_ENABLE_DRAW = 'VUEAFLET_PM_ENABLE_DRAW';
var VUEAFLET_PM_DISABLE_DRAW = 'VUEAFLET_PM_DISABLE_DRAW';
var VUEAFLET_PM_ADD_SHAPE_LAYER = 'VUEAFLET_PM_ADD_SHAPE_LAYER';
var VUEAFLET_PM_REMOVE_SHAPE_LAYERS = 'VUEAFLET_PM_REMOVE_SHAPE_LAYERS';
var VUEAFLET_RESET = 'VUEAFLET_RESET';
var VUEAFLET_INVALIDATE = 'VUEAFLET_INVALIDATE';

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VueafletBus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var VueafletBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export testIcon */
/* unused harmony export filterBaseIcon */
/* unused harmony export filterSelectedIcon */
/* harmony export (immutable) */ __webpack_exports__["a"] = layerTypeLookup;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);




function testIcon() {
  return __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
    iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east.png',
    iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east@2x.png',
    iconSize: [31, 27],
    iconAnchor: [13.5, 17.5],
    popupAnchor: [0, -11]
  }));
}

function filterBaseIcon(slug) {
  return __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
    iconUrl: '../static/svg/marker-colorfill-' + slug + '.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  }));
}

function filterSelectedIcon(slug) {
  return __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, {
    iconUrl: '../static/svg/marker-selected-' + slug + '.svg',
    iconSize: [70, 70],
    iconAnchor: [35, 35]
  }));
}

function layerTypeLookup(type) {
  var layerTypes = {
    marker: 'l-marker'
  };

  if (!layerTypes[type]) throw new Error('[layerTypeLookup] layer type does not exist');

  return layerTypes[type];
}

var registerComponents = function registerComponents(Vue, components) {
  if (!Vue || !components) throw new Error('[registerComponents] missing params');

  __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(components).forEach(function (key) {
    var c = components[key];
    Vue.component(c.name, c);
  });
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buses__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(7);


//
//
//
//
//
//
//
//
//







var events = ['add', 'remove'];

var LFeatureGroup = {
  name: 'l-feature-group',

  provide: function provide() {
    return {
      registerOptions: this.registerOptions
    };
  },


  inject: ['mapId'],

  data: function data() {
    return {
      layerTypeLookup: __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* layerTypeLookup */],
      innerFeatureGroup: null
    };
  },


  props: {
    layerName: String,
    layers: Array,
    options: Object,
    order: [String, Number]
  },

  created: function created() {
    var _this = this;

    var existingFeatureGroup = this.getNamedLayer(this.layerName);

    this.innerFeatureGroup = existingFeatureGroup ? existingFeatureGroup : __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.featureGroup();

    this.layerName ? this.addNamedLayer({ id: this.mapId, name: this.layerName, layer: this.innerFeatureGroup, order: this.order }) : this.addLayer({ id: this.mapId, layer: this.innerFeatureGroup });

    events.forEach(function (event) {
      _this.innerFeatureGroup.on(event, function (ev) {
        _this.$emit(event, _this.innerFeatureGroup);
      });
      _this.innerFeatureGroup.on(event, function (ev) {
        __WEBPACK_IMPORTED_MODULE_4__buses__["a" /* VueafletBus */].$emit('feature-group-' + _this.mapId + '-' + event, _this.innerFeatureGroup);
      });
    });
  },
  mounted: function mounted() {
    this.$emit('ready', this.layerName);
    __WEBPACK_IMPORTED_MODULE_4__buses__["a" /* VueafletBus */].$emit('feature-group-' + this.mapId + '-ready', this.layerName);
  },
  destroyed: function destroyed() {
    this.layerName ? this.removeNamedLayer({ id: this.mapId, name: this.layerName }) : this.removeLayer({ id: this.mapId, layer: this.innerFeatureGroup });
  },


  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapGetters"])(['getNamedLayer'])),

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapMutations"])({
    addLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */],
    addNamedLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["c" /* VUEAFLET_ADD_NAMED_LAYER */],
    removeLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */]
  }), Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapActions"])(['removeNamedLayer']), {
    registerOptions: function registerOptions(options) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, options, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
        pane: this.layerName ? this.layerName : null
      }, this.options));
    }
  })
};

/* harmony default export */ __webpack_exports__["a"] = (LFeatureGroup);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_values__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_reduce__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_reduce__);
//
//
//
//
//
//
//
//
//
//
//
//
//



// TODO: this componet could be optimized by normalizing the data into "feature groups"
// that way geo-json-layer is triggering so many actions and mutaitons
var LGeoJsonCollection = {
  name: 'l-geo-json-collection',

  created: function created() {
    this.createCollection();
  },


  watch: {
    features: function features() {
      this.createCollection();
    }
  },

  data: function data() {
    return {
      collection: []
    };
  },


  props: {
    layerName: String,
    order: Number,
    features: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    pointOptions: Function,
    multipolygonOptions: Function,
    multipointOptions: Function,
    polygonOptions: Function,
    multilinestringOptions: Function,
    linestringOptions: Function
  },

  methods: {
    createCollection: function createCollection() {
      this.collection = [];

      var innerCollection = __WEBPACK_IMPORTED_MODULE_1_lodash_reduce___default()(this.features, function (outcome, feature) {
        var geoType = feature.geometry.type;

        outcome[geoType] ? outcome[geoType].push(feature) : outcome[geoType] = [feature];

        return outcome;
      }, {});

      var temp = __WEBPACK_IMPORTED_MODULE_0_lodash_values___default()(innerCollection);
      // debugger

      this.collection = __WEBPACK_IMPORTED_MODULE_0_lodash_values___default()(innerCollection);
    },
    getOptions: function getOptions(type) {
      return this[type.toLowerCase() + 'Options'](type) || {};
    },
    getKey: function getKey(feature) {
      var id = feature.id,
          layerId = feature.layerId,
          _feature$properties = feature.properties;
      _feature$properties = _feature$properties === undefined ? {} : _feature$properties;
      var OBJECTID = _feature$properties.OBJECTID,
          OBJECTID_1 = _feature$properties.OBJECTID_1;


      return '' + feature.id + feature.layerId + (OBJECTID || OBJECTID_1);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (LGeoJsonCollection);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buses__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__ = __webpack_require__(2);


//
//






var events = ['add', 'remove', 'layeradd', 'layerremove'];

delete __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon.Default.prototype._getIconUrl;
__WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(33),
  iconUrl: __webpack_require__(12),
  shadowUrl: __webpack_require__(13)
});

var LGeoJsonLayer = {
  name: 'l-geo-json-layer',

  inject: ['mapId'],

  data: function data() {
    return {
      innerGeoJSON: null
    };
  },


  props: {
    layerName: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    order: Number
  },

  mounted: function mounted() {
    this.initRoutine();
    this.readyRoutine();
  },
  beforeDestroy: function beforeDestroy() {
    this.destroyRoutine();
  },


  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapGetters"])(['getNamedLayer'])),

  methods: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapMutations"])({
    addLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */],
    addNamedLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["c" /* VUEAFLET_ADD_NAMED_LAYER */],
    removeLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */]
  }), Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapActions"])(['removeNamedLayer']), {
    initRoutine: function initRoutine() {
      var _this = this;

      var existingLayer = this.getNamedLayer(this.layerName);

      this.innerGeoJSON = existingLayer ? existingLayer.addData(this.features) : __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.geoJSON(this.features, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.options, { pane: this.layerName }));

      this.layerName ? this.addNamedLayer({ id: this.mapId, name: this.layerName, layer: this.innerGeoJSON, order: this.order }) : this.addLayer({ id: this.mapId, layer: this.innerGeoJSON });

      events.forEach(function (event) {
        _this.innerGeoJSON.on(event, function (ev) {
          _this.$emit(event, _this.innerGeoJSON);
        });
        _this.innerGeoJSON.on(event, function (ev) {
          __WEBPACK_IMPORTED_MODULE_4__buses__["a" /* VueafletBus */].$emit('geo-json-' + _this.layerName + '-' + _this.mapId + '-' + event, _this.innerGeoJSON);
        });
      });
    },
    readyRoutine: function readyRoutine() {
      this.$emit('ready', this.layerName);
      __WEBPACK_IMPORTED_MODULE_4__buses__["a" /* VueafletBus */].$emit('geo-json-' + this.layerName + '-' + this.mapId + '-ready', this.layerName);
    },
    destroyRoutine: function destroyRoutine() {
      if (this.layerName && this.getNamedLayer(this.layerName)) {
        this.removeNamedLayer({ id: this.mapId, name: this.layerName });
      }
    }
  })
};

/* harmony default export */ __webpack_exports__["a"] = (LGeoJsonLayer);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("leaflet/dist/images/marker-icon.png");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("leaflet/dist/images/marker-shadow.png");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(41)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buses__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_forEach__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_forEach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_forEach__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






// TODO: figure out mouse events
var events = ['load', 'click', 'dblclick', 'contextmenu', 'keypress', 'preclick'];

var LMap = {
  name: 'l-map',

  provide: function provide() {
    return {
      mapId: this.mapId
    };
  },


  props: {
    activeBasemap: String,
    basemaps: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    layers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mapId: {
      type: String,
      default: 'mainMap',
      required: true
    },
    options: {
      type: Object,
      default: function _default() {
        return {
          zoom: 4,
          center: [39.36827914916014, -97.86621093750001]
        };
      }
    }
  },

  data: function data() {
    return {
      innerMapId: this.mapId, // being grabbed by children
      ready: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.createMap({
      id: this.mapId,
      options: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.options)
    }).then(function () {
      _this.ready = true;
      _this.$emit('ready');
      __WEBPACK_IMPORTED_MODULE_1__buses__["a" /* VueafletBus */].$emit('map-' + _this.mapId + '-ready');
    });

    events.forEach(function (event, index) {
      _this.addEvent({ id: _this.mapId, event: event, func: function func(ev) {
          _this.$emit(event, ev);
        } });
      _this.addEvent({ id: _this.mapId, event: event, func: function func(ev) {
          __WEBPACK_IMPORTED_MODULE_1__buses__["a" /* VueafletBus */].$emit('map-' + _this.mapId + '-' + event, ev);
        } });
    });
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapMutations"])({
    addEvent: __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["a" /* VUEAFLET_ADD_MAP_EVENT */],
    addLayer: __WEBPACK_IMPORTED_MODULE_3__store_mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */]
  }), Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["mapActions"])(['createMap', 'destroyMap']), {
    layerTypeLookup: function layerTypeLookup(type) {
      return {
        'feature-group': 'l-feature-group',
        'esri-feature-layer': 'e-feature-layer',
        'esri-dynamic-map-layer': 'e-dynamic-map-layer',
        'geo-json': 'l-geo-json-layer'
      }[type];
    }
  }),

  destroy: function destroy() {
    this.destroyMap();
    // TODO: add $off to VueafletBus
  }
};

/* harmony default export */ __webpack_exports__["a"] = (LMap);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buses__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__ = __webpack_require__(2);


//
//






var events = ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'add', 'remove', 'popupopen', 'popupclose', 'tooltipopen', 'tooltipclose'];

var LMarker = {
  name: 'l-marker',

  inject: ['mapId', 'registerOptions'],

  props: {
    latlng: {
      type: [Array, Object]
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      innerMarker: null,
      parent: null,
      defaultIcon: __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.icon({
        iconUrl: __webpack_require__(12),
        shadowUrl: __webpack_require__(13),
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12.5, 41],
        shadowAnchor: [13.1, 41]
      })
    };
  },


  watch: {
    latlng: function latlng(newArray) {
      this.innerMarker.setLatLng(newArray);
    },
    'options.draggable': function optionsDraggable(newValue) {
      newValue ? this.innerMarker.dragging.enable() : this.innerMarker.dragging.disable();
    },

    'options.icon': {
      handler: function handler(icon) {
        this.innerMarker.setIcon(icon);
      },

      deep: true
    }
  },

  mounted: function mounted() {
    var _this = this;

    var options = this.registerOptions ? this.registerOptions(this.options) : {};

    this.innerMarker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker(this.latlng, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({
      icon: this.defaultIcon
    }, options));

    // TODO: can probably do this during the "registerOptions" call back
    var _$parent$$data = this.$parent.$data;
    _$parent$$data = _$parent$$data === undefined ? {} : _$parent$$data;
    var innerFeatureGroup = _$parent$$data.innerFeatureGroup;


    this.parent = innerFeatureGroup;

    this.parent ? this.parent.addLayer(this.innerMarker) : this.addLayer({ id: this.mapId, layer: this.innerMarker });

    events.forEach(function (event) {
      _this.innerMarker.on(event, function (ev) {
        _this.$emit(event, _this.innerMarker);
      });
      _this.innerMarker.on(event, function (ev) {
        __WEBPACK_IMPORTED_MODULE_3__buses__["a" /* VueafletBus */].$emit('marker-' + _this.mapId + '-' + event, _this.innerMarker);
      });
    });
  },
  destroyed: function destroyed() {
    if (!this.parent) {
      this.removeLayer({ id: this.mapId, layer: this.innerMarker });
    }
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["mapMutations"])({
    addLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */],
    removeLayer: __WEBPACK_IMPORTED_MODULE_5__store_mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */]
  }))
};

/* harmony default export */ __webpack_exports__["a"] = (LMarker);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buses__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_mutation_types__ = __webpack_require__(2);

//
//






// TODO: add events

var LTileLayer = {
  name: 'l-tile-layer',

  inject: ['mapId'],

  props: {
    urlTemplate: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      innerLayer: null
    };
  },
  created: function created() {
    this.innerLayer = __WEBPACK_IMPORTED_MODULE_1_leaflet___default.a.tileLayer(this.urlTemplate, this.options);

    this.addLayer({ id: this.mapId, layer: this.innerLayer });
  },
  destroyed: function destroyed() {
    this.removeLayer({ id: this.mapId, layer: this.innerLayer });
  },


  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["mapMutations"])({
    addLayer: __WEBPACK_IMPORTED_MODULE_4__store_mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */],
    removeLayer: __WEBPACK_IMPORTED_MODULE_4__store_mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */]
  }))
};

/* harmony default export */ __webpack_exports__["a"] = (LTileLayer);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueafletStore", function() { return createVueafletStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_modules_vueaflet__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buses__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VueafletBus", function() { return __WEBPACK_IMPORTED_MODULE_4__buses__["a"]; });





// TODO: test options
var createInstaller = function createInstaller(components) {
  return function (Vue, options) {
    // do something with options
    Object(__WEBPACK_IMPORTED_MODULE_1_utils__["b" /* registerComponents */])(Vue, components);
  };
};

var createVueaflet = function createVueaflet() {
  return { install: createInstaller(__WEBPACK_IMPORTED_MODULE_3__components__) };
};

// TODO: test module name
var createVueafletStore = function createVueafletStore() {
  var moduleName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vueaflet';
  return function (store) {
    store.registerModule(moduleName, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__store_modules_vueaflet__["a" /* default */]));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createVueaflet());


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_pm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet_pm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet_pm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutation_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_filter__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_filter__);


var _mutations;




// import 'leaflet.pm/dist/leaflet.pm.css' // TODO: this will need to be included when people use library



var DEFAULT_ZOOM = 4;
var DEFAULT_MAP_ID = 'mainMap';

var state = {
  maps: {},
  namedLayers: {},
  shape: null,
  center: [39.36827914916014, -97.86621093750001],
  zoom: DEFAULT_ZOOM,
  shapeLayers: [],
  startIndexAt: 699
};

var getters = {
  getMap: function getMap(state) {
    return function () {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MAP_ID;

      return state.maps[id];
    };
  },
  getLayersByOptionKeyValue: function getLayersByOptionKeyValue(state, getters) {
    return function () {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MAP_ID;
      var key = arguments[1];
      var value = arguments[2];

      var _map = state.maps[id];

      var _map$_layers = _map._layers,
          _layers = _map$_layers === undefined ? {} : _map$_layers;

      return __WEBPACK_IMPORTED_MODULE_5_lodash_filter___default()(_layers, function (layer) {
        var _layer$options = layer.options,
            options = _layer$options === undefined ? {} : _layer$options;

        return options[key] == value;
      });
    };
  },
  getNamedLayer: function getNamedLayer(state, getters) {
    return function (name) {
      return state.namedLayers[name];
    };
  }
};

var actions = {
  createMap: function createMap(_ref, _ref2) {
    var commit = _ref.commit;
    var id = _ref2.id,
        options = _ref2.options;

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["e" /* VUEAFLET_CREATE_MAP */], { id: id, options: options });
  },
  addLayer: function addLayer(_ref3, payload) {
    var commit = _ref3.commit;

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */], payload);
  },
  addNamedLayer: function addNamedLayer(_ref4, payload) {
    var commit = _ref4.commit;

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["c" /* VUEAFLET_ADD_NAMED_LAYER */], payload);
  },
  removeShapeLayers: function removeShapeLayers(_ref5) {
    var commit = _ref5.commit;

    state.shapeLayers.forEach(function (layer) {
      commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */], layer);
    });

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["l" /* VUEAFLET_PM_REMOVE_SHAPE_LAYERS */]);
  },
  removeNamedLayer: function removeNamedLayer(_ref6, _ref7) {
    var commit = _ref6.commit;
    var id = _ref7.id,
        name = _ref7.name;

    var layer = state.namedLayers[name];

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */], { id: id, layer: layer });
    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["n" /* VUEAFLET_REMOVE_NAMED_LAYER */], name);
  },
  enableMapDrawing: function enableMapDrawing(_ref8) {
    var commit = _ref8.commit;

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["k" /* VUEAFLET_PM_ENABLE_DRAW */]);
  },
  disableMapDrawing: function disableMapDrawing(_ref9) {
    var commit = _ref9.commit,
        dispatch = _ref9.dispatch;

    dispatch('removeShapeLayers').then(function () {
      commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["j" /* VUEAFLET_PM_DISABLE_DRAW */]);
    });
  },
  destroyMap: function destroyMap(_ref10) {
    var commit = _ref10.commit;
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_MAP_ID;

    commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["o" /* VUEAFLET_RESET */], id);
  }
};

var mutations = (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["e" /* VUEAFLET_CREATE_MAP */], function (state, _ref11) {
  var _ref11$id = _ref11.id,
      id = _ref11$id === undefined ? DEFAULT_MAP_ID : _ref11$id,
      options = _ref11.options;

  state.maps[id] = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map(id, options);
  // state.maps[id].zoomControl.setPosition('bottomright');
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["p" /* VUEAFLET_SET_VIEW */], function (state, _ref12) {
  var _ref12$id = _ref12.id,
      id = _ref12$id === undefined ? DEFAULT_MAP_ID : _ref12$id,
      _ref12$config = _ref12.config,
      config = _ref12$config === undefined ? {} : _ref12$config;
  var _config$center = config.center,
      center = _config$center === undefined ? state.center : _config$center,
      _config$zoom = config.zoom,
      zoom = _config$zoom === undefined ? state.zoom : _config$zoom,
      _config$options = config.options,
      options = _config$options === undefined ? {} : _config$options;


  state.maps[id].setView(center, zoom, options);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["b" /* VUEAFLET_ADD_MAP_LAYER */], function (state, _ref13) {
  var _ref13$id = _ref13.id,
      id = _ref13$id === undefined ? DEFAULT_MAP_ID : _ref13$id,
      layer = _ref13.layer;

  state.maps[id].addLayer(layer);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["c" /* VUEAFLET_ADD_NAMED_LAYER */], function (state, _ref14) {
  var _ref14$id = _ref14.id,
      id = _ref14$id === undefined ? DEFAULT_MAP_ID : _ref14$id,
      name = _ref14.name,
      layer = _ref14.layer,
      _ref14$addToMap = _ref14.addToMap,
      addToMap = _ref14$addToMap === undefined ? true : _ref14$addToMap,
      _ref14$order = _ref14.order,
      order = _ref14$order === undefined ? 25 : _ref14$order;

  if (!state.namedLayers[name]) state.namedLayers[name] = layer;

  if (addToMap) {
    !state.maps[id].getPane(name) && state.maps[id].createPane(name);
    state.maps[id].getPane(name).style.zIndex = state.startIndexAt - order;

    state.maps[id].addLayer(layer);
  }
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["m" /* VUEAFLET_REMOVE_MAP_LAYER */], function (state, _ref15) {
  var _ref15$id = _ref15.id,
      id = _ref15$id === undefined ? DEFAULT_MAP_ID : _ref15$id,
      layer = _ref15.layer;

  state.maps[id].removeLayer(layer);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["n" /* VUEAFLET_REMOVE_NAMED_LAYER */], function (state, name) {
  __WEBPACK_IMPORTED_MODULE_1_vue___default.a.delete(state.namedLayers, name);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["a" /* VUEAFLET_ADD_MAP_EVENT */], function (state, _ref16) {
  var _ref16$id = _ref16.id,
      id = _ref16$id === undefined ? DEFAULT_MAP_ID : _ref16$id,
      event = _ref16.event,
      func = _ref16.func;

  state.maps[id].on(event, func);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["d" /* VUEAFLET_ADD_TO_MAP */], function (state, _ref17) {
  var _ref17$id = _ref17.id,
      id = _ref17$id === undefined ? DEFAULT_MAP_ID : _ref17$id,
      layer = _ref17.layer;

  layer.addTo(state.maps[id]);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["g" /* VUEAFLET_PAN_TO */], function (state, _ref18) {
  var _ref18$id = _ref18.id,
      id = _ref18$id === undefined ? DEFAULT_MAP_ID : _ref18$id,
      payload = _ref18.payload;
  var latlng = payload.latlng,
      _payload$zoom = payload.zoom,
      zoom = _payload$zoom === undefined ? DEFAULT_ZOOM : _payload$zoom,
      _payload$options = payload.options,
      options = _payload$options === undefined ? {} : _payload$options;


  state.maps[id].setView(latlng, zoom, { pan: options });
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["h" /* VUEAFLET_PAN_TO_OFFSET */], function (state, _ref19) {
  var _ref19$id = _ref19.id,
      id = _ref19$id === undefined ? DEFAULT_MAP_ID : _ref19$id,
      latlng = _ref19.latlng,
      _ref19$zoom = _ref19.zoom,
      zoom = _ref19$zoom === undefined ? state.maps[DEFAULT_MAP_ID]._zoom : _ref19$zoom,
      offset = _ref19.offset,
      options = _ref19.options;

  var x = state.maps[id].latLngToContainerPoint(latlng).x - offset[0];
  var y = state.maps[id].latLngToContainerPoint(latlng).y - offset[1];
  var point = state.maps[id].containerPointToLatLng([x, y]);

  state.maps[id].setView(point, zoom, { pan: options });
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["k" /* VUEAFLET_PM_ENABLE_DRAW */], function (state, _ref20) {
  var _ref20$id = _ref20.id,
      id = _ref20$id === undefined ? DEFAULT_MAP_ID : _ref20$id,
      shape = _ref20.shape;
  var pm = state.maps[id].pm;


  pm.toggleGlobalRemovalMode();
  pm.enableDraw(shape);

  state.shape = shape;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["j" /* VUEAFLET_PM_DISABLE_DRAW */], function (state, _ref21) {
  var _ref21$id = _ref21.id,
      id = _ref21$id === undefined ? DEFAULT_MAP_ID : _ref21$id,
      shape = _ref21.shape;
  var pm = state.maps[id].pm;


  pm.disableDraw(state.shape);
  pm.toggleGlobalRemovalMode();

  state.shape = null;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["i" /* VUEAFLET_PM_ADD_SHAPE_LAYER */], function (state, layer) {
  state.shapeLayers.splice(state.shapeLayers.length, 0, layer);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["l" /* VUEAFLET_PM_REMOVE_SHAPE_LAYERS */], function (state) {
  state.shapeLayers = [];
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["o" /* VUEAFLET_RESET */], function (state) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_MAP_ID;

  state.maps[id] = {};
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["f" /* VUEAFLET_INVALIDATE */], function (state) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_MAP_ID;

  state.maps[id].invalidateSize();
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("leaflet.pm");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash.filter");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LFeatureGroup_LFeatureGroup__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LFeatureGroup", function() { return __WEBPACK_IMPORTED_MODULE_0__LFeatureGroup_LFeatureGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LGeoJsonCollection_LGeoJsonCollection__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LGeoJsonCollection", function() { return __WEBPACK_IMPORTED_MODULE_1__LGeoJsonCollection_LGeoJsonCollection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LGeoJsonLayer_LGeoJsonLayer__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LGeoJsonLayer", function() { return __WEBPACK_IMPORTED_MODULE_2__LGeoJsonLayer_LGeoJsonLayer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LMap_LMap__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LMap", function() { return __WEBPACK_IMPORTED_MODULE_3__LMap_LMap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__LMarker_LMarker__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LMarker", function() { return __WEBPACK_IMPORTED_MODULE_4__LMarker_LMarker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__LTileLayer_LTileLayer__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LTileLayer", function() { return __WEBPACK_IMPORTED_MODULE_5__LTileLayer_LTileLayer__["a"]; });







/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LFeatureGroup_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d3a898a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LFeatureGroup_vue__ = __webpack_require__(27);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LFeatureGroup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2d3a898a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LFeatureGroup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LFeatureGroup/LFeatureGroup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d3a898a", Component.options)
  } else {
    hotAPI.reload("data-v-2d3a898a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "feature-group" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm._l(_vm.layers, function(layer, index) {
        return [
          _c(
            _vm.layerTypeLookup(layer.type),
            _vm._b(
              { key: layer.id, tag: "component" },
              "component",
              layer,
              false
            )
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d3a898a", esExports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LGeoJsonCollection_vue__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe214da2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LGeoJsonCollection_vue__ = __webpack_require__(31);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LGeoJsonCollection_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe214da2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LGeoJsonCollection_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LGeoJsonCollection/LGeoJsonCollection.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe214da2", Component.options)
  } else {
    hotAPI.reload("data-v-fe214da2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("lodash.values");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("lodash.reduce");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "geo-json-collection" },
    [
      _vm._l(_vm.collection, function(features, index) {
        return [
          _c("l-geo-json-layer", {
            key: _vm.getKey(features[0]),
            attrs: {
              features: features,
              options: _vm.getOptions(features[0].geometry.type),
              "layer-name": _vm.layerName + "-" + features[0].geometry.type,
              order: _vm.order
            }
          })
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fe214da2", esExports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LGeoJsonLayer_vue__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15acb4ce_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LGeoJsonLayer_vue__ = __webpack_require__(34);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LGeoJsonLayer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_15acb4ce_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LGeoJsonLayer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LGeoJsonLayer/LGeoJsonLayer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15acb4ce", Component.options)
  } else {
    hotAPI.reload("data-v-15acb4ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("leaflet/dist/images/marker-icon-2x.png");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15acb4ce", esExports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LMap_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9988e162_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LMap_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(36)
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LMap_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9988e162_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LMap_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LMap/LMap.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9988e162", Component.options)
  } else {
    hotAPI.reload("data-v-9988e162", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("58ce521c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?{\"sourceMap\":false}!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9988e162\",\"scoped\":false,\"hasInlineConfig\":false}!./leaflet.css", function() {
     var newContent = require("!!../../css-loader/index.js?{\"sourceMap\":false}!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9988e162\",\"scoped\":false,\"hasInlineConfig\":false}!./leaflet.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "/* required styles */\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\n}\n.leaflet-container {\r\n\toverflow: hidden;\n}\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\n}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\n}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\n}\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\n}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer {\r\n\tmax-width: none !important;\n}\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\n}\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\n}\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\n}\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\n}\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\n}\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\n}\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\n}\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\tz-index: 800;\n}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\n}\n.leaflet-pane         { z-index: 400;\n}\n.leaflet-tile-pane    { z-index: 200;\n}\n.leaflet-overlay-pane { z-index: 400;\n}\n.leaflet-shadow-pane  { z-index: 500;\n}\n.leaflet-marker-pane  { z-index: 600;\n}\n.leaflet-tooltip-pane   { z-index: 650;\n}\n.leaflet-popup-pane   { z-index: 700;\n}\n.leaflet-map-pane canvas { z-index: 100;\n}\n.leaflet-map-pane svg    { z-index: 200;\n}\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\n}\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\n}\r\n\r\n/* control positioning */\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\n}\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\n}\n.leaflet-top {\r\n\ttop: 0;\n}\n.leaflet-right {\r\n\tright: 0;\n}\n.leaflet-bottom {\r\n\tbottom: 0;\n}\n.leaflet-left {\r\n\tleft: 0;\n}\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\n}\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\n}\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\n}\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\n}\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\n}\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\n}\r\n\r\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\n}\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\n}\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\n}\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\n}\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\n}\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n}\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t        transition: none;\n}\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\n}\r\n\r\n/* cursors */\n.leaflet-interactive {\r\n\tcursor: pointer;\n}\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\n}\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\n}\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\n}\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\n}\r\n\r\n/* marker & overlays interactivity */\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\n}\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\n}\r\n\r\n/* visual tweaks */\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\n}\n.leaflet-container a {\r\n\tcolor: #0078A8;\n}\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\n}\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\n}\r\n\r\n/* general typography */\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n}\r\n\r\n/* general toolbar styles */\n.leaflet-bar {\r\n\t-webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\t        box-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\n}\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\n}\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\n}\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\n}\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\n}\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\n}\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\n}\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\n}\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\n}\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\n}\r\n\r\n/* zoom control */\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\n}\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\n}\r\n\r\n/* layers control */\n.leaflet-control-layers {\r\n\t-webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\t        box-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\n}\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + __webpack_require__(38) + ");\r\n\twidth: 36px;\r\n\theight: 36px;\n}\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(" + __webpack_require__(39) + ");\r\n\tbackground-size: 26px 26px;\n}\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\n}\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\n}\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\n}\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\n}\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\n}\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\n}\n.leaflet-control-layers label {\r\n\tdisplay: block;\n}\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\n}\r\n\r\n/* Default icon URLs */\n.leaflet-default-icon-path {\r\n\tbackground-image: url(" + __webpack_require__(40) + ");\n}\r\n\r\n/* attribution and scale controls */\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\n}\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\n}\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\n}\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\n}\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\n}\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\n}\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\n}\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\n}\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\n}\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\n}\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\t-webkit-box-shadow: none;\r\n\t        box-shadow: none;\n}\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\n}\r\n\r\n/* popup */\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\n}\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\n}\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\n}\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\n}\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\n}\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\n}\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\t-webkit-box-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t        box-shadow: 0 3px 14px rgba(0,0,0,0.4);\n}\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\n}\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\n}\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\n}\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\n}\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\n}\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\n}\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\n}\r\n\r\n/* div icon */\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\n}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\t-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t        box-shadow: 0 1px 3px rgba(0,0,0,0.4);\n}\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\n}\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\n}\r\n\r\n/* Directions */\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\n}\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\n}\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\n}\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\n}\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\n}\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\n}\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\n}\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\n}\r\n", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII="

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII="

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(15)("41d5728c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9988e162\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./LMap.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9988e162\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1&bustCache!./LMap.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "\n.map {\n  position: relative;\n  width:100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.map__mount {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _([1, 2]).forEach(function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, typeof iteratee == 'function' ? iteratee : identity);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = forEach;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "map" }, [
    _c(
      "div",
      { staticClass: "map__mount", attrs: { id: _vm.mapId } },
      [
        _vm.ready ? _vm._t("default") : _vm._e(),
        _vm._v(" "),
        _vm.ready
          ? _vm._l(_vm.basemaps, function(basemap, index) {
              return _vm.activeBasemap === basemap.label
                ? _c("l-tile-layer", {
                    key: basemap.label,
                    attrs: {
                      "url-template": basemap.urlTemplate,
                      options: basemap.options
                    }
                  })
                : _vm._e()
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.ready
          ? _vm._l(_vm.layers, function(layer, index) {
              return layer.visible
                ? _c(
                    _vm.layerTypeLookup(layer.type),
                    _vm._b(
                      {
                        key: index,
                        tag: "component",
                        attrs: {
                          "layer-name": layer.label,
                          order: layer.order || index
                        }
                      },
                      "component",
                      layer,
                      false
                    )
                  )
                : _vm._e()
            })
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9988e162", esExports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LMarker_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_162e81dd_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LMarker_vue__ = __webpack_require__(47);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LMarker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_162e81dd_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LMarker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LMarker/LMarker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-162e81dd", Component.options)
  } else {
    hotAPI.reload("data-v-162e81dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-162e81dd", esExports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LTileLayer_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b2bbca2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LTileLayer_vue__ = __webpack_require__(49);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_LTileLayer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b2bbca2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_LTileLayer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/LTileLayer/LTileLayer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9b2bbca2", Component.options)
  } else {
    hotAPI.reload("data-v-9b2bbca2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9b2bbca2", esExports)
  }
}

/***/ })
/******/ ]);
});