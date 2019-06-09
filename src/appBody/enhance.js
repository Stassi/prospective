import { compose } from 'recompose'
import useDarkTheme from './useDarkTheme'
import usePropTypes from './usePropTypes'

const enhance = compose(
  useDarkTheme,
  usePropTypes
)

export default enhance
