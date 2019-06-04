import React, { useState } from 'react'

const menuSelectState = ([ selected, setState ]) => ({
  menuSelect: {
    selected,
    setSelected: ({ target: { value } }) => setState(value)
  }
})

const useMenuSelect = Component => ({ initialSelected, ...props }) => (
  <Component
    {...props}
    {...menuSelectState(useState(initialSelected))}
  />
)

export default useMenuSelect
