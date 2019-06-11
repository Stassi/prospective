import React from 'react'
import { Container as NextContainer } from 'next/app'
import Body from './Body'
import Head from './Head'

const Container = ({ titleText, ...props }) => (
  <NextContainer>
    <Head {...{ titleText }} />
    <Body {...props} />
  </NextContainer>
)

export default Container
