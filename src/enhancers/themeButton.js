import PropTypes from 'prop-types'
import { setPropTypes } from 'recompose'

const themeButton = setPropTypes({
  toggleDarkTheme: PropTypes.func.isRequired
})

export default themeButton
