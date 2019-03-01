export function layerTypeLookup(type) {
  // TODO: need to add all layer types
  const layerTypes = {
    circle: 'l-circle',
    marker: 'l-marker',
    polygon: 'l-polygon',
    polyline: 'l-polyline',
    rectangle: 'l-rectangle',
  };

  if (!layerTypes[type]) throw new Error(`[layerTypeLookup] layer ${type} does not exist`);

  return layerTypes[type];
}

// globally registers components
export const registerComponents = (Vue, components) => {
  if (!Vue || !components) throw new Error('[registerComponents] missing params');

  Object.keys(components).forEach((key) => {
    const c = components[key];
    Vue.component(c.name, c);
  });
};
