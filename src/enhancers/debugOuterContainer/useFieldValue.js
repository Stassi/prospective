import React, { useState } from 'react'
import wrapDisplayName from '../../wrapDisplayName'

const fieldValueState = ([value, setValue]) => ({
  textField: {
    value,
    onChange: ({ target: { value: newValue } }) => setValue(newValue)
  }
})

const enhance = Component => ({ initialFieldValue, ...props }) => (
  <Component
    {...props}
    {...fieldValueState(useState(initialFieldValue))}
  />
)

const useDisplayName = wrapDisplayName('UsingFieldValue')

// TODO: Rename
const useFieldValue = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useFieldValue
