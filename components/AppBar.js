import React from 'react'
import AppBarMui from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { appBar as enhance } from '../src/enhancers'

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

const EnhancedAppBar = enhance(AppBar)

export default EnhancedAppBar
