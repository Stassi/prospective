import React, { useState } from 'react'
import isNightTime from './isNightTime'
import wrapDisplayName from '../wrapDisplayName'

const darkThemeState = ([ darkThemeEnabled, setState ]) => ({
  darkThemeEnabled,
  toggleDarkTheme: () => setState(!darkThemeEnabled)
})

const enhance = Component => props => (
  <Component
    {...props}
    {...darkThemeState(useState(isNightTime()))}
  />
)

const useDisplayName = wrapDisplayName('UsingDarkTheme')

const useDarkTheme = Component => {
  const EnhancedComponent = enhance(Component)
  EnhancedComponent.displayName = useDisplayName(Component)
  return EnhancedComponent
}

export default useDarkTheme
