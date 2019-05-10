import React from 'react'
import AppBar from '../AppBar'
import NextHead from '../NextHead'
import StyleDemo from '../StyleDemo'
import ThemeButton from '../ThemeButton'
import SimpleSelect from '../SimpleSelect'

const Layout = ({ actions: { toggleDarkTheme } }) => (
  <>
    <NextHead />
    <AppBar>
      <>
        <SimpleSelect {...{
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
