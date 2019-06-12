import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired
  }).isRequired
})

export default usePropTypes
