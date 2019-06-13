import React from 'react'
import AppBarMui from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { appBar as enhance } from '../src/enhancers'

const AppBar = ({
  actionItems,
  actionItemsSpacing,
  label,
  classes: {
    grow,
    root
  },
  ...props
}) => (
  <AppBarMui
    className={root}
    color='default'
    position='static'
    {...props}
  >
    <Toolbar>
      <Typography
        className={grow}
        color='inherit'
        variant='h6'
      >
        {label}
      </Typography>
      <form
        autoComplete='off'
        noValidate
      >
        <Grid
          container
          spacing={actionItemsSpacing}
        >
          {actionItems.map((actionItem, key) => (
            <Grid
              {...{ key }}
              item
            >
              {actionItem}
            </Grid>
          ))}
        </Grid>
      </form>
    </Toolbar>
  </AppBarMui>
)

const EnhancedAppBar = enhance(AppBar)

export default EnhancedAppBar
