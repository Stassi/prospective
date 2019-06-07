import React from 'react'
import clsx from 'clsx'
import MuiLink from '@material-ui/core/Link'
import NextComposedLink from './NextComposedLink'
import enhance from '../src/link'

const Link = props => {
  const {
    activeClassName,
    naked,
    router,
    className: classNameProps,
    ...other
  } = props

  const className = clsx(
    classNameProps,
    { [activeClassName]: router.pathname === props.href && activeClassName }
  )

  return naked ? (
    <NextComposedLink
      className={className}
      {...other}
    />
  ) : (
    <MuiLink
      className={className}
      component={NextComposedLink}
      {...other}
    />
  )
}

const EnhancedLink = enhance(Link)

export default EnhancedLink
