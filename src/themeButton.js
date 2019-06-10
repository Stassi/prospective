import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const enhance = setPropTypes({
  toggleDarkTheme: PropTypes.func.isRequired
})

export default enhance
