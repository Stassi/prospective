import React, { useState } from 'react'
import wrapDisplayName from '../../wrapDisplayName'

const fieldValueState = ([value, setValue]) => ({
  value,
  onChange: ({ target: { value: newValue } }) => setValue(newValue)
})

const enhance = Component => ({ initialValue, ...props }) => (
  <Component
    {...props}
    {...fieldValueState(useState(initialValue))}
  />
)

const useDisplayName = wrapDisplayName('UsingFieldValue')

const useFieldValue = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useFieldValue
