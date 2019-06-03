import React from 'react'
import AppBar from './AppBar'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <AppBar>
    <ThemeButton {...{ toggleDarkTheme }} />
  </AppBar>
)

export default Layout
