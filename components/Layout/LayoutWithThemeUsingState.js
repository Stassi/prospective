import React, { useState } from 'react'
import LayoutWithTheme from './LayoutWithTheme'
import { darkThemeState, isNightTime } from '../../src'

const LayoutWithThemeUsingState = ({ ...props }) => (
  <LayoutWithTheme {...{
    ...props,
    ...darkThemeState({
      usingState: useState(isNightTime())
    })
  }} />
)

export default LayoutWithThemeUsingState
