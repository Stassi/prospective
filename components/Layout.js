import React from 'react'
import AppBar from './AppBar'
import DebugContainer from './DebugContainer'
import DebugOuterContainer from './DebugOuterContainer'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <DebugOuterContainer>
    {props => (
      <AppBar>
        <DebugContainer {...props} />
        <ThemeButton {...{ toggleDarkTheme }} />
      </AppBar>
    )}
  </DebugOuterContainer>
)

export default Layout
