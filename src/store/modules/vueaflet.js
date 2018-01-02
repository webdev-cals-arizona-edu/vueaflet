import Vue from 'vue'
import Leaflet from 'leaflet'
import 'leaflet.pm'
// import 'leaflet.pm/dist/leaflet.pm.css' // TODO: this will need to be included when people use library
import { 
  VUEAFLET_CREATE_MAP,
  VUEAFLET_ADD_MAP_LAYER,
  VUEAFLET_ADD_NAMED_LAYER,
  VUEAFLET_ADD_MAP_EVENT,
  VUEAFLET_SET_VIEW,
  VUEAFLET_ADD_TO_MAP,
  VUEAFLET_REMOVE_MAP_LAYER,
  VUEAFLET_REMOVE_NAMED_LAYER,
  VUEAFLET_PAN_TO,
  VUEAFLET_PAN_TO_OFFSET,
  VUEAFLET_PM_ENABLE_DRAW,
  VUEAFLET_PM_DISABLE_DRAW,
  VUEAFLET_PM_ADD_SHAPE_LAYER,
  VUEAFLET_PM_REMOVE_SHAPE_LAYERS,
  VUEAFLET_INVALIDATE,
  VUEAFLET_RESET 
} from '../mutation-types'
import filter from 'lodash.filter'

const DEFAULT_ZOOM = 4
const DEFAULT_MAP_ID = 'mainMap'

const state = {
  maps: {},
  namedLayers: {},
  shape: null,
  center: [39.36827914916014, -97.86621093750001],
  zoom: DEFAULT_ZOOM,
  shapeLayers: [],
  startIndexAt: 699
}

const getters = {
  getMap: (state) => (id = DEFAULT_MAP_ID) => {
    return state.maps[id]
  },
  getLayersByOptionKeyValue: (state, getters) => (id = DEFAULT_MAP_ID, key, value) => {
    let _map = state.maps[id]
    let { _layers = {} } = _map

    return filter(_layers, (layer) => {
      let { options = {} } = layer
      return options[key] == value
    })
  },
  getNamedLayer: (state, getters) => (name) => {
    return state.namedLayers[name]
  }
}

const actions = {
  createMap({ commit }, { id, options }) {
    commit(VUEAFLET_CREATE_MAP, { id, options })
  },
  addLayer({ commit }, payload) {
    commit(VUEAFLET_ADD_MAP_LAYER, payload)
  },
  addNamedLayer({ commit }, payload) {
    commit(VUEAFLET_ADD_NAMED_LAYER, payload)
  },
  removeShapeLayers({ commit }) {
    state.shapeLayers.forEach((layer) => {
      commit(VUEAFLET_REMOVE_MAP_LAYER, layer)
    })

    commit(VUEAFLET_PM_REMOVE_SHAPE_LAYERS)
  },
  removeNamedLayer({ commit }, { id, name }) {
    let layer = state.namedLayers[name]

    commit(VUEAFLET_REMOVE_MAP_LAYER, { id, layer })
    commit(VUEAFLET_REMOVE_NAMED_LAYER, name)
  },
  enableMapDrawing({ commit }) {
    commit(VUEAFLET_PM_ENABLE_DRAW)
  },
  disableMapDrawing({ commit, dispatch }) {
    dispatch('removeShapeLayers').then(() => {
      commit(VUEAFLET_PM_DISABLE_DRAW)
    })
  },
  destroyMap({ commit }, id = DEFAULT_MAP_ID) {
    commit(VUEAFLET_RESET, id)
  }
}

const mutations = {
  [VUEAFLET_CREATE_MAP](state, { id = DEFAULT_MAP_ID, options }) {
    state.maps[id] = Leaflet.map(id, options)
    // state.maps[id].zoomControl.setPosition('bottomright');
  },
  [VUEAFLET_SET_VIEW](state, { id = DEFAULT_MAP_ID, config = {} }) {
    let { 
      center = state.center,
      zoom = state.zoom,
      options = {} 
    } = config

    state.maps[id].setView(center, zoom, options)
  },
  [VUEAFLET_ADD_MAP_LAYER](state, { id = DEFAULT_MAP_ID, layer }) {
    state.maps[id].addLayer(layer)
  },
  [VUEAFLET_ADD_NAMED_LAYER](state, { id = DEFAULT_MAP_ID, name, layer, addToMap = true, order = 25 }) {
    if (!state.namedLayers[name]) state.namedLayers[name] = layer

    if (addToMap) {
      !state.maps[id].getPane(name) && state.maps[id].createPane(name)
      state.maps[id].getPane(name).style.zIndex = state.startIndexAt - order

      state.maps[id].addLayer(layer)
    }
  },
  [VUEAFLET_REMOVE_MAP_LAYER](state, { id = DEFAULT_MAP_ID, layer }) {
    state.maps[id].removeLayer(layer)
  },
  [VUEAFLET_REMOVE_NAMED_LAYER](state, name) {
    Vue.delete(state.namedLayers, name)
  },
  [VUEAFLET_ADD_MAP_EVENT](state, { id = DEFAULT_MAP_ID, event, func }) {
    state.maps[id].on(event, func)
  },
  [VUEAFLET_ADD_TO_MAP](state, { id = DEFAULT_MAP_ID, layer }) {
    layer.addTo(state.maps[id])
  },
  [VUEAFLET_PAN_TO](state, { id = DEFAULT_MAP_ID, payload }) {
    let { latlng, zoom = DEFAULT_ZOOM, options = {} } = payload

    state.maps[id].setView(latlng, zoom, { pan: options })
  },
  [VUEAFLET_PAN_TO_OFFSET](state, { id = DEFAULT_MAP_ID, latlng, zoom = state.maps[DEFAULT_MAP_ID]._zoom, offset, options }) {
    var x = state.maps[id].latLngToContainerPoint(latlng).x - offset[0]
    var y = state.maps[id].latLngToContainerPoint(latlng).y - offset[1]
    var point = state.maps[id].containerPointToLatLng([x, y])

    state.maps[id].setView(point, zoom, { pan: options })
  },
  [VUEAFLET_PM_ENABLE_DRAW](state, { id = DEFAULT_MAP_ID, shape }) {
    let { pm } = state.maps[id]

    pm.toggleGlobalRemovalMode()
    pm.enableDraw(shape)

    state.shape = shape
  },
  [VUEAFLET_PM_DISABLE_DRAW](state, { id = DEFAULT_MAP_ID, shape }) {
    let { pm } = state.maps[id]

    pm.disableDraw(state.shape)
    pm.toggleGlobalRemovalMode()

    state.shape = null
  },
  [VUEAFLET_PM_ADD_SHAPE_LAYER](state, layer) {
    state.shapeLayers.splice(state.shapeLayers.length, 0, layer)
  },
  [VUEAFLET_PM_REMOVE_SHAPE_LAYERS](state) {
    state.shapeLayers = []
  },
  [VUEAFLET_RESET](state, id = DEFAULT_MAP_ID) {
    state.maps[id] = {}
  },
  [VUEAFLET_INVALIDATE](state, id = DEFAULT_MAP_ID) {
    state.maps[id].invalidateSize()
  }
}

export default {
  state, 
  getters,
  actions,
  mutations
}
