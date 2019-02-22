import Vue from 'vue'
import store from '../index.js'
import Leaflet from 'leaflet'

const state = {
  basemaps: [
    {
      label: 'Street',
      urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
      options: {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 18,
        accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
        label: 'Default'
      }
    },
    {
      label: 'Satellite',
      urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      options: {
        attribution: 'Tiles &copy; Esri &mdash',
        maxZoom: 18,
        label: 'Satellite'
      }
    }
  ],
  layers: [
    {
      label: 'basic-markers-v1',
      type: 'feature-group',
      visible: true,
      order: 10,
      options: {},
      layers: [
        {
          latlng: [32.231139, -110.953296],
          type: 'marker',
          options: {
            draggable: true
          }
        }
      ]
    },
    {
      label: 'more-markers-v1',
      type: 'feature-group',
      visible: true,
      order: 5,
      options: {},
      layers: [
        {
          latlng: [32.231332940630914, -110.95161437988283],
          type: 'marker',
          options: {
            draggable: true
          }
        }
      ]
    }
  ]
}

const getters = {}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}