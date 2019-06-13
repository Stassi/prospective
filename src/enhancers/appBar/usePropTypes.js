import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  actionItems: PropTypes.arrayOf(
    PropTypes.node.isRequired
  ),
  actionItemsSpacing: PropTypes.number,
  classes: PropTypes.shape({
    grow: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired
  }).isRequired,
  label: PropTypes.string
})

export default usePropTypes
