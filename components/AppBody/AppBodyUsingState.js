import React, { useState } from 'react'
import AppBody from './AppBody'
import darkThemeState from '../../src/darkThemeState'
import isNightTime from '../../src/isNightTime'

const AppBodyUsingState = props => (
  <AppBody {...{
    ...props,
    ...darkThemeState({ usingState: useState(isNightTime()) })
  }} />
)

export default AppBodyUsingState
