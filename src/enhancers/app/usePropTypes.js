import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const usePropTypes = setPropTypes({
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired,
  pageProps: PropTypes.object,
  theme: PropTypes.object.isRequired,
  titleText: PropTypes.string,
  toggleDarkTheme: PropTypes.func.isRequired
})

export default usePropTypes
