import { compose } from 'recompose'
import useLabelPlaceholder from './useLabelPlaceholder'
import useMenuSelect from './useMenuSelect'
import usePropTypes from './usePropTypes'
import useStyles from './useStyles'

const enhance = compose(
  useLabelPlaceholder,
  useMenuSelect,
  useStyles,
  usePropTypes
)

export default enhance
