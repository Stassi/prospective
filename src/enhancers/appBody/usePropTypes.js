import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
  theme: PropTypes.object.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired
})

export default usePropTypes
