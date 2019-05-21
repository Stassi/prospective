import React from 'react'
import AlgorithmMenuSelect from '../AlgorithmMenuSelect'
import AppBar from '../AppBar'
import NextHead from '../NextHead'
import ThemeButton from '../ThemeButton'

const Layout = ({ actions: { toggleDarkTheme } }) => (
  <>
    <NextHead />
    <AppBar>
      <>
        <AlgorithmMenuSelect />
        <ThemeButton {...{ toggleDarkTheme }} />
      </>
    </AppBar>
  </>
)

export default Layout
