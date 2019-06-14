import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  output: PropTypes.number.isRequired
})

export default usePropTypes
