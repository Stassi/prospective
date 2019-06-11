import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const nextComposedLink = setPropTypes({
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool
})

export default nextComposedLink
