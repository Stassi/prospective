import { compose } from 'recompose'
import useFieldValue from './useFieldValue'
import useMenuSelect from './useMenuSelect'
import usePropTypes from './usePropTypes'
import useDefaultProps from './useDefaultProps'

const debugOuterContainer = compose(
  useDefaultProps,
  useFieldValue,
  useMenuSelect,
  usePropTypes
)

export default debugOuterContainer
