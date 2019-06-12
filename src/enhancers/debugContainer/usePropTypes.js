import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    formControl: PropTypes.string.isRequired,
    selectEmpty: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired
  }).isRequired
})

export default usePropTypes
