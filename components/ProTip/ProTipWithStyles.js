import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ProTip from './ProTip'

const useStyles = makeStyles(theme => ({
  lightBulb: {
    marginRight: theme.spacing(1),
    verticalAlign: 'middle'
  },
  root: {
    margin: theme.spacing(6, 0, 3)
  }
}))

const ProTipWithStyles = ({ ...props }) => (
  <ProTip {...{
    classes: useStyles(),
    ...props
  }} />
)

export default ProTipWithStyles
