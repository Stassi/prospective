import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../src/theme'

const AppBody = ({
  Component,
  pageProps,
  darkTheme: {
    enabled: darkThemeEnabled,
    toggle: toggleDarkTheme
  }
}) => (
  <ThemeProvider theme={theme(darkThemeEnabled)}>
    <CssBaseline />
    <Component
      {...pageProps}
      {...{ toggleDarkTheme }}
    />
  </ThemeProvider>
)

export default AppBody
