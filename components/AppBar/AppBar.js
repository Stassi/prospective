import React from 'react'
import PropTypes from 'prop-types'
import AppBarMui from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    grow: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired
  }).isRequired
}

const defaultProps = { label: 'App' }

const AppBar = ({
  children,
  label,
  classes: {
    grow,
    root
  }
}) => (
  <div className={root}>
    <AppBarMui
      color='default'
      position='static'
    >
      <Toolbar>
        <Typography
          className={grow}
          color='inherit'
          variant='h6'
        >
          {label}
        </Typography>
        {children}
      </Toolbar>
    </AppBarMui>
  </div>
)

AppBar.propTypes = propTypes
AppBar.defaultProps = defaultProps

export default AppBar
