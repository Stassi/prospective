import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
})

export default usePropTypes
