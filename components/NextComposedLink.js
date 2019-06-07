import React from 'react'
import NextLink from 'next/link'
import enhance from '../src/nextComposedLink'

const NextComposedLink = ({
  as,
  href,
  prefetch,
  ...other
}) => (
  <NextLink
    {...{
      as,
      href,
      prefetch
    }}
  >
    <a {...other} />
  </NextLink>
)

const EnhancedNextComposedLink = enhance(NextComposedLink)

export default EnhancedNextComposedLink
