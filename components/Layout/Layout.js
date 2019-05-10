import React from 'react'
import AppBar from '../AppBar'
import NextHead from '../NextHead'
import StyleDemo from '../StyleDemo'
import ThemeButton from '../ThemeButton'
import MenuSelect from '../MenuSelect'

const Layout = ({ actions: { toggleDarkTheme } }) => (
  <>
    <NextHead />
    <AppBar>
      <>
        <MenuSelect {...{
          labelID: 'age',
          labelName: 'Age'
        }} />
        <ThemeButton {...{ toggleDarkTheme }} />
      </>
    </AppBar>
    <StyleDemo />
  </>
)

export default Layout
