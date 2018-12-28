export function mapComponentName(...components) {
    const result = {};
    const len = components.length;
    for (let i = 0; i < len; i += 1) {
      const component = components[i];
      result[component.name] = component;
    }
    return result;
  }
  
  export default {};