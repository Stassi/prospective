import React from 'react'
import BrightnessHigh from '@material-ui/icons/BrightnessHigh'
import IconButton from '@material-ui/core/IconButton'

const ThemeButton = ({ toggleDarkTheme }) => (
  <IconButton onClick={toggleDarkTheme}>
    <BrightnessHigh />
  </IconButton>
)

export default ThemeButton
