// https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
const displayName = Component =>
  Component.displayName ||
  Component.name ||
  'Component'

const wrapDisplayName = wrapperDisplayName => Component =>
  `${wrapperDisplayName}(${displayName(Component)})`

export default wrapDisplayName
