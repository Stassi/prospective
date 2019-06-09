import React, { useState } from 'react'
import isNightTime from './isNightTime'
import componentName from '../componentName'

const darkThemeState = ([ darkThemeEnabled, setState ]) => ({
  darkTheme: {
    enabled: darkThemeEnabled,
    toggle: () => setState(!darkThemeEnabled)
  }
})

const enhance = Component => props => (
  <Component
    {...props}
    {...darkThemeState(useState(isNightTime()))}
  />
)

const useDarkTheme = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = `UsingDarkTheme(${componentName(Component)})`
  return EnhancedComponent
}

export default useDarkTheme
