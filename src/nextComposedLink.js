import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const enhance = setPropTypes({
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool
})

export default enhance
