import React from 'react'
import AppBar from './AppBar'
import DebugContainer from './DebugContainer'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <AppBar>
    <DebugContainer />
    <ThemeButton {...{ toggleDarkTheme }} />
  </AppBar>
)

export default Layout
