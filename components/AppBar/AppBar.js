import React from 'react'
import PropTypes from 'prop-types'
import AppBarMaterial from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
}

const defaultProps = {
  title: 'App title'
}

const AppBar = ({
  children,
  title,
  classes: {
    grow,
    root
  }
}) => (
  <div className={root}>
    <AppBarMaterial
      color='default'
      position='static'
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
    </AppBarMaterial>
  </div>
)

AppBar.propTypes = propTypes
AppBar.defaultProps = defaultProps

export default AppBar
