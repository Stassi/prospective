import { compose } from 'recompose'
import useDarkTheme from './useDarkTheme'
import usePropTypes from './usePropTypes'
import useMuiTheme from './useMuiTheme'

const appBody = compose(
  useDarkTheme,
  useMuiTheme,
  usePropTypes
)

export default appBody
