import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  classes: PropTypes.shape({
    formControl: PropTypes.string.isRequired,
    selectEmpty: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string.isRequired,
  labelPlaceholder: PropTypes.string.isRequired,
  menuSelect: PropTypes.shape({
    selected: PropTypes.string.isRequired,
    setSelected: PropTypes.func.isRequired
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired).isRequired,
  value: PropTypes.string.isRequired
})

export default usePropTypes
