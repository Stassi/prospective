import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ProTip from './ProTip'

const useStyles = makeStyles(({ spacing }) => ({
  lightBulb: {
    marginRight: spacing(1),
    verticalAlign: 'middle'
  },
  root: {
    margin: spacing(6, 0, 3)
  }
}))

const ProTipWithStyles = ({ ...props }) => (
  <ProTip {...{
    classes: useStyles(),
    ...props
  }} />
)

export default ProTipWithStyles
