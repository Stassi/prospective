import { compose } from 'recompose'
import useFieldValue from './useFieldValue'
import useMenuSelect from './useMenuSelect'
import usePropTypes from './usePropTypes'
import useDebug from './useDebug'
import useDefaultProps from './useDefaultProps'

const debugOuterContainer = compose(
  useDefaultProps,
  useFieldValue,
  useMenuSelect,
  useDebug,
  usePropTypes
)

export default debugOuterContainer
