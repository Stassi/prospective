import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  initialFieldValue: PropTypes.string,
  initialMenuSelected: PropTypes.string
})

export default usePropTypes
