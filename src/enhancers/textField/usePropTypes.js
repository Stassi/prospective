import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired
  }).isRequired,
  initialValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
})

export default usePropTypes
