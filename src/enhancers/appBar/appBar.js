import { compose } from 'recompose'
import useDefaultProps from './useDefaultProps'
import usePropTypes from './usePropTypes'
import useStyles from './useStyles'

const appBar = compose(
  useStyles,
  usePropTypes,
  useDefaultProps
)

export default appBar
