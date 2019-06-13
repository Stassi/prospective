import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
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
