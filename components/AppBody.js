import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import { appBody as enhance } from '../src/enhancers'

const AppBody = ({
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

const EnhancedAppBody = enhance(AppBody)

export default EnhancedAppBody
