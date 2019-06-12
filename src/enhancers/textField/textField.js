import { compose } from 'recompose'
import useDefaultProps from './useDefaultProps'
import useFieldValue from './useFieldValue'
import usePropTypes from './usePropTypes'
import useStyles from './useStyles'

const textField = compose(
  useDefaultProps,
  useFieldValue,
  useStyles,
  usePropTypes
)

export default textField
