import { compose } from 'recompose'
import usePropTypes from './usePropTypes'
import useStyles from './useStyles'

const debugContainer = compose(
  useStyles,
  usePropTypes
)

export default debugContainer
