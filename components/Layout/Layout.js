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
          initialSelected: '0',
          label: 'Age',
          options: [
            { label: 'None', value: '0' },
            { label: 'Ten', value: '10' },
            { label: 'Twenty', value: '20' },
            { label: 'Thirty', value: '30' }
          ],
          value: 'age'
        }} />
        <ThemeButton {...{ toggleDarkTheme }} />
      </>
    </AppBar>
    <StyleDemo />
  </>
)

export default Layout
