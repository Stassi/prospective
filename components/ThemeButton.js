import React from 'react'
import BrightnessHigh from '@material-ui/icons/BrightnessHigh'
import IconButton from '@material-ui/core/IconButton'
import { themeButton as enhance } from '../src/enhancers'

const ThemeButton = ({ toggleDarkTheme }) => (
  <IconButton onClick={toggleDarkTheme}>
    <BrightnessHigh />
  </IconButton>
)

const EnhancedThemeButton = enhance(ThemeButton)

export default EnhancedThemeButton
