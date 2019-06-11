import React from 'react'
import NextApp from 'next/app'
import Container from './Container'
import { app as enhance } from '../../src/enhancers'

class App extends NextApp {
  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
  }

  render () {
    return (
      <Container {...this.props} />
    )
  }
}

const EnhancedApp = enhance(App)

export default EnhancedApp
