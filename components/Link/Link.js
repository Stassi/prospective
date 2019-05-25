import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiLink from '@material-ui/core/Link'
import NextComposed from './NextComposed'

const propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

const defaultProps = { activeClassName: 'active' }

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
    <NextComposed
      className={className}
      {...other}
    />
  ) : (
    <MuiLink
      className={className}
      component={NextComposed}
      {...other}
    />
  )
}

Link.propTypes = propTypes
Link.defaultProps = defaultProps

export default Link
