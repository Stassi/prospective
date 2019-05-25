import NextLink from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool
}

const NextComposed = ({
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

NextComposed.propTypes = propTypes

export default NextComposed
