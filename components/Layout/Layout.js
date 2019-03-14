import React from 'react'
import LongMenu from '../LongMenu'
import NextHead from '../NextHead'
import StyleDemo from '../StyleDemo'

const Layout = () => (
  <>
    <NextHead />
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
