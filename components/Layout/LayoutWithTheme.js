import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Layout from './Layout'

const darkTheme = darkThemeEnabled => darkThemeEnabled ? {
  palette: {
    type: 'dark'
  }
} : {}

const LayoutWithTheme = ({ darkThemeEnabled, ...props }) => (
  <MuiThemeProvider {...{
    theme: createMuiTheme({
      ...darkTheme(darkThemeEnabled),
      typography: {
        useNextVariants: true
      }
    })
  }}>
    <Layout {...props} />
  </MuiThemeProvider>
)

export default LayoutWithTheme
