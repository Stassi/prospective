import React from 'react'
import { install } from '@material-ui/styles'
import Layout from './Layout'

// attempts to load style engine before importing styled Material UI components
// reference: https://material-ui.com/css-in-js/basics/
const LayoutWithMaterialStyles = ({ ...props }) => install() || (
  <Layout {...props} />
)

export default LayoutWithMaterialStyles
