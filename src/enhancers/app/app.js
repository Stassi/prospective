import { compose } from 'recompose'
import useDarkTheme from './useDarkTheme'
import useDefaultProps from './useDefaultProps'
import useMuiTheme from './useMuiTheme'
import usePropTypes from './usePropTypes'

const app = compose(
  useDarkTheme,
  useMuiTheme,
  usePropTypes,
  useDefaultProps
)

export default app
