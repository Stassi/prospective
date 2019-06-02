import React from 'react'
import PropTypes from 'prop-types'
import BrightnessHigh from '@material-ui/icons/BrightnessHigh'
import IconButton from '@material-ui/core/IconButton'

const propTypes = {
  toggleDarkTheme: PropTypes.func.isRequired
}

const ThemeButton = ({ toggleDarkTheme }) => (
  <IconButton onClick={toggleDarkTheme}>
    <BrightnessHigh />
  </IconButton>
)

ThemeButton.propTypes = propTypes

export default ThemeButton
