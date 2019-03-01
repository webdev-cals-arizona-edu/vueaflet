export const registerComponents = (Vue, components) => {
  if (!Vue || !components) throw new Error('[registerComponents] missing params')
    
  Object.keys(components).forEach(key => {
    let c = components[key]
    Vue.component(c.name, c)
  })
}
