import React, { useState } from 'react'
import AppBody from './AppBody'
import darkThemeState from '../../src/darkThemeState'

const AppBodyUsingState = props => (
  <AppBody {...{
    ...props,
    ...darkThemeState({ usingState: useState(true) })
  }} />
)

export default AppBodyUsingState
