// https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
const componentName = Component =>
  Component.displayName ||
  Component.name ||
  'Component'

export default componentName
