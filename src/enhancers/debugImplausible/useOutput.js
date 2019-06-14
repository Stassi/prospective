import React from 'react'
import { prng } from 'implausible'
import wrapDisplayName from '../../wrapDisplayName'

const enhance = Component => ({
  menuSelect,
  textField,
  menuSelect: {
    selected: name
  },
  textField: {
    value: seed
  },
  ...props
}) => (
  <Component
    {...{ menuSelect, textField }}
    output={prng({
      name,
      ...seed
        ? { seed }
        : {}
    })}
    {...props}
  />
)

const useDisplayName = wrapDisplayName('UsingOutput')

const useOutput = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useOutput
