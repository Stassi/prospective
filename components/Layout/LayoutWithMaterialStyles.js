import React from 'react'
import { install } from '@material-ui/styles'
import LayoutWithTheme from './LayoutWithTheme'

// attempts to load style engine before importing styled Material UI components
// reference: https://material-ui.com/css-in-js/basics/
const LayoutWithMaterialStyles = ({ ...props }) => install() || (
  <LayoutWithTheme {...props} />
)

export default LayoutWithMaterialStyles
