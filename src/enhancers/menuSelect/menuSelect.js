import { compose } from 'recompose'
import useLabelPlaceholder from './useLabelPlaceholder'
import useMenuSelect from './useMenuSelect'
import usePropTypes from './usePropTypes'

const menuSelect = compose(
  useLabelPlaceholder,
  useMenuSelect,
  usePropTypes
)

export default menuSelect
