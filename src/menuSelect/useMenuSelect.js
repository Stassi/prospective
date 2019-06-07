import React, { useState } from 'react'
import componentName from '../componentName'

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

const useMenuSelect = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = `UsingMenuSelect(${componentName(Component)})`
  return EnhancedComponent
}

export default useMenuSelect
