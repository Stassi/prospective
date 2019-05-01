import React from 'react'
import { install } from '@material-ui/styles'
import LayoutWithThemeUsingState from './LayoutWithThemeUsingState'

// attempts to load style engine before importing styled Material UI components
// reference: https://material-ui.com/css-in-js/basics/
const LayoutWithMaterialStyles = ({ ...props }) => install() || (
  <LayoutWithThemeUsingState {...props} />
)

export default LayoutWithMaterialStyles
