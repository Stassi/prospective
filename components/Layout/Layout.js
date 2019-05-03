import React from 'react'
import LongMenu from '../LongMenu'
import NextHead from '../NextHead'
import StyleDemo from '../StyleDemo'
import SimpleAppBar from '../SimpleAppBar'
import ThemeButton from '../ThemeButton'

const Layout = ({ actions: { toggleDarkTheme } }) => (
  <>
    <NextHead />
    <SimpleAppBar>
      <ThemeButton {...{ toggleDarkTheme }} />
    </SimpleAppBar>
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
