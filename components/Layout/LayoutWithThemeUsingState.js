import React, { useState } from 'react'
import LayoutWithTheme from './LayoutWithTheme'

const darkThemeState = ({
  usingState: [
    darkThemeEnabled,
    setState
  ]
}) => ({
  darkThemeEnabled,
  actions: {
    toggleDarkTheme: () => setState(!darkThemeEnabled)
  }
})

const LayoutWithThemeUsingState = ({ ...props }) => (
  <LayoutWithTheme {...{
    ...props,
    ...darkThemeState({
      usingState: useState(false)
    })
  }} />
)

export default LayoutWithThemeUsingState
