import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

const Body = ({
  Component,
  pageProps,
  theme,
  toggleDarkTheme
}) => (
  <ThemeProvider {...{ theme }} >
    <CssBaseline />
    <Component
      {...pageProps}
      {...{ toggleDarkTheme }}
    />
  </ThemeProvider>
)

export default Body
