import React, { useState } from 'react'
import wrapDisplayName from '../../wrapDisplayName'

const menuSelectState = ([ selected, setState ]) => ({
  menuSelect: {
    selected,
    setSelected: ({ target: { value } }) => setState(value)
  }
})

const enhance = Component => ({ initialSelected, ...props }) => (
  <Component
    {...props}
    {...menuSelectState(useState(initialSelected))}
  />
)

const useDisplayName = wrapDisplayName('UsingMenuSelect')

const useMenuSelect = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useMenuSelect
