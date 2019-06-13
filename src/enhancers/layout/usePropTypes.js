import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  classes: PropTypes.shape({
    formControl: PropTypes.string.isRequired,
    selectEmpty: PropTypes.string.isRequired,
    textField: PropTypes.string.isRequired
  }).isRequired
})

export default usePropTypes
