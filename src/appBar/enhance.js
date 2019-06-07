import { compose } from 'recompose'
import useDefaultProps from './useDefaultProps'
import usePropTypes from './usePropTypes'
import useStyles from './useStyles'

const enhance = compose(
  useStyles,
  usePropTypes,
  useDefaultProps
)

export default enhance
