import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    grow: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired
  }).isRequired
})

export default usePropTypes
