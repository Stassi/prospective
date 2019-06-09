import React from 'react'
import wrapDisplayName from '../wrapDisplayName'

const enhance = Component => ({ value, ...props }) => (
  <Component
    {...props}
    {...{ value }}
    labelPlaceholder={`${value}-label-placeholder`}
  />
)

const useDisplayName = wrapDisplayName('UsingLabelPlaceholder')

const useLabelPlaceholder = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useLabelPlaceholder
