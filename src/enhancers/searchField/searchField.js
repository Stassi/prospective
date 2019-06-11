import useStyles from './useStyles'
import { compose } from 'recompose'
import usePropTypes from './usePropTypes'

const searchField = compose(
  useStyles,
  usePropTypes
)

export default searchField
