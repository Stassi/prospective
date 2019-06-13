import { compose } from 'recompose'
import useLabelPlaceholder from './useLabelPlaceholder'
import usePropTypes from './usePropTypes'

const menuSelect = compose(
  useLabelPlaceholder,
  usePropTypes
)

export default menuSelect
