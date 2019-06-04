import React, { useState } from 'react'
import isNightTime from './isNightTime'

const darkThemeState = ([ darkThemeEnabled, setState ]) => ({
  darkTheme: {
    enabled: darkThemeEnabled,
    toggle: () => setState(!darkThemeEnabled)
  }
})

const useDarkTheme = Component => props => (
  <Component
    {...props}
    {...darkThemeState(useState(isNightTime()))}
  />
)

export default useDarkTheme
