import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

const defaultProps = {
  title: 'App title'
}

const SimpleAppBar = ({
  children,
  title,
  classes: {
    grow,
    root
  }
}) => (
  <div className={root}>
    <AppBar
      position='static'
      color='default'
    >
      <Toolbar>
        <Typography
          className={grow}
          color='inherit'
          variant='h6'
        >
          {title}
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  </div>
)

SimpleAppBar.propTypes = propTypes
SimpleAppBar.defaultProps = defaultProps

export default SimpleAppBar
