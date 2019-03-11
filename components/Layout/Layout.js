import React from 'react'
import LongMenu from '../LongMenu'
import NextHead from '../NextHead'

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
  </>
)

export default Layout
