import { pipe } from 'ramda'
import useLabelPlaceholder from './useLabelPlaceholder'
import useMenuSelect from './useMenuSelect'
import useStyles from './useStyles'

const enhance = pipe(
  useLabelPlaceholder,
  useMenuSelect,
  useStyles
)

export default enhance
