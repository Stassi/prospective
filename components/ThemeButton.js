import React from 'react'
import BrightnessHigh from '@material-ui/icons/BrightnessHigh'
import IconButton from '@material-ui/core/IconButton'
import enhance from '../src/themeButton'

const ThemeButton = ({ toggleDarkTheme }) => (
  <IconButton onClick={toggleDarkTheme}>
    <BrightnessHigh />
  </IconButton>
)

const EnhancedThemeButton = enhance(ThemeButton)

export default EnhancedThemeButton
