import NextHead from 'next/head'
import React from 'react'

const Head = ({ titleText }) => (
  <NextHead>
    <title>
      {titleText}
    </title>
  </NextHead>
)

export default Head
