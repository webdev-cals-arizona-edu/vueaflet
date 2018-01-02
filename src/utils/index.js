import Leaflet from 'leaflet'

export function testIcon() {
  return Leaflet.icon(Object.assign({}, {
      iconUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east.png',
      iconRetinaUrl: 'https://esri.github.io/esri-leaflet/img/bus-stop-east@2x.png',
      iconSize: [31, 27],
      iconAnchor: [13.5, 17.5],
      popupAnchor: [0, -11],
  }))
}

export function filterBaseIcon(slug) {
  return Leaflet.icon(Object.assign({}, {
    iconUrl: `../static/svg/marker-colorfill-${slug}.svg`,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  }))
}

export function filterSelectedIcon(slug) {
  return Leaflet.icon(Object.assign({}, {
    iconUrl: `../static/svg/marker-selected-${slug}.svg`,
    iconSize: [70, 70],
    iconAnchor: [35, 35]
  }))
}

export function layerTypeLookup(type) {
  let layerTypes = {
    marker: 'l-marker'
  }

  if (!layerTypes[type]) throw new Error('[layerTypeLookup] layer type does not exist')

  return layerTypes[type]
}

export const registerComponents = (Vue, components) => {
  if (!Vue || !components) throw new Error('[registerComponents] missing params')
    
  Object.keys(components).forEach(key => {
    let c = components[key]
    Vue.component(c.name, c)
  })
}
