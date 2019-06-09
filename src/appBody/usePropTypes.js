import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  Component: PropTypes.func.isRequired,
  darkTheme: PropTypes.shape({
    enabled: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  }).isRequired,
  pageProps: PropTypes.object
})

export default usePropTypes
