import { compose } from 'recompose'
import useDefaultProps from './useDefaultProps'
import usePropTypes from './usePropTypes'
import { withRouter } from 'next/router'

const enhance = compose(
  withRouter,
  usePropTypes,
  useDefaultProps
)

export default enhance
