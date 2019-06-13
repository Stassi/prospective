import { compose } from 'recompose'
import useStyles from './useStyles'
import usePropTypes from './usePropTypes'

const layout = compose(
  useStyles,
  usePropTypes
)

export default layout
