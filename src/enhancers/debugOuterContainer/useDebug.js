import React from 'react'
import { prng } from 'implausible'
import wrapDisplayName from '../../wrapDisplayName'

// TODO: Rename, separation of concerns / partial application
const debug = setValue => ({
  reseedOnAdornmentClick: () => setValue(prng())
})

const enhance = Component => ({
  textField: {
    setValue,
    ...textField
  },
  ...props
}) => (
  <Component
    textField={{
      ...textField,
      ...debug(setValue)
    }}
    {...props}
  />
)

// TODO: Rename value
const useDisplayName = wrapDisplayName('UsingDebug')

// TODO: Rename
const useDebug = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useDebug
