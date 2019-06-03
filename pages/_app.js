import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Body from '../components/AppBody'

class MyApp extends App {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
  }

  render () {
    return (
      <Container>
        <Head>
          <title>
            My page
          </title>
        </Head>
        <Body {...this.props} />
      </Container>
    )
  }
}

export default MyApp
