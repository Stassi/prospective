import { compose } from 'recompose'
import useDarkTheme from './useDarkTheme'
import usePropTypes from './usePropTypes'

const appBody = compose(
  useDarkTheme,
  usePropTypes
)

export default appBody
