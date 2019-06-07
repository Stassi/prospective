import React from 'react'
import componentName from '../componentName'

const enhance = Component => ({ value, ...props }) => (
  <Component
    {...props}
    {...{ value }}
    labelPlaceholder={`${value}-label-placeholder`}
  />
)

const useLabelPlaceholder = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = `UsingLabelPlaceholder(${componentName(Component)})`
  return EnhancedComponent
}

export default useLabelPlaceholder
