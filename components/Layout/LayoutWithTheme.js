import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Layout from './Layout'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  }
})

const LayoutWithTheme = () => (
  <MuiThemeProvider {...{ theme }}>
    <Layout />
  </MuiThemeProvider>
)

export default LayoutWithTheme
