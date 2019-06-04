import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from './AppBar'

const grow = { flexGrow: 1 }
const useStyles = makeStyles({
  grow,
  root: grow
})

const AppBarUsingStyles = props => (
  <AppBar
    {...props}
    classes={useStyles()}
  />
)

export default AppBarUsingStyles
