import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../src/theme'

const propTypes = {
  Component: PropTypes.func.isRequired,
  darkTheme: PropTypes.shape({
    enabled: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
  }).isRequired
}

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

AppBody.propTypes = propTypes

export default AppBody
