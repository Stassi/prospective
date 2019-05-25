import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../src/theme'

class MyApp extends App {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider {...{ theme }}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
