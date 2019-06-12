import React from 'react'
import AlgorithmMenuSelect from './AlgorithmMenuSelect'
import AppBar from './AppBar'
import SeedTextField from './SeedTextField'
import ThemeButton from './ThemeButton'

const Layout = ({ toggleDarkTheme }) => (
  <AppBar>
    <SeedTextField />
    <AlgorithmMenuSelect />
    <ThemeButton {...{ toggleDarkTheme }} />
  </AppBar>
)

export default Layout
