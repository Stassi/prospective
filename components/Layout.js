import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import AppBar from './AppBar'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <AppBar>
    <AlgorithmMenuSelect />
    <ThemeButton {...{ toggleDarkTheme }} />
  </AppBar>
)

export default Layout
