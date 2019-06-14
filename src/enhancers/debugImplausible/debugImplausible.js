import { compose } from 'recompose'
import useOutput from './useOutput'
import usePropTypes from './usePropTypes'

const debugImplausible = compose(
  useOutput,
  usePropTypes
)

export default debugImplausible
