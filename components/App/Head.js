import NextHead from 'next/head'
import React from 'react'

const Head = ({ themeColor, titleText }) => (
  <NextHead>
    <title>
      {titleText}
    </title>
    <meta
      content={themeColor}
      name='theme-color'
    />
  </NextHead>
)

export default Head
