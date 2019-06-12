import { compose } from 'recompose'
import useDefaultProps from './useDefaultProps'
import useFieldValue from './useFieldValue'
import usePropTypes from './usePropTypes'

const textField = compose(
  useDefaultProps,
  useFieldValue,
  usePropTypes
)

export default textField
