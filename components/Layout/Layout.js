import React from 'react'
import AppBar from '../AppBar'
import LongMenu from '../LongMenu'
import NextHead from '../NextHead'
import StyleDemo from '../StyleDemo'
import ThemeButton from '../ThemeButton'

const Layout = ({ actions: { toggleDarkTheme } }) => (
  <>
    <NextHead />
    <AppBar>
      <ThemeButton {...{ toggleDarkTheme }} />
    </AppBar>
    <LongMenu {...{
      options: [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel'
      ],
      selectedOption: 'Pyxis'
    }} />
    <StyleDemo />
  </>
)

export default Layout
