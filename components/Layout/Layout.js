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
          labelName: 'Age',
          menuItems: [
            { label: 'None', value: '' },
            { label: 'Ten', value: '10' },
            { label: 'Twenty', value: '20' },
            { label: 'Thirty', value: '30' }
          ]
        }} />
        <ThemeButton {...{ toggleDarkTheme }} />
      </>
    </AppBar>
    <StyleDemo />
  </>
)

export default Layout
