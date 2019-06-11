import React from 'react'
import { Container as NextContainer } from 'next/app'
import Body from './Body'
import Head from './Head'

const Container = ({
  theme,
  titleText,
  theme: {
    palette: {
      primary: {
        main: themeColor
      }
    }
  },
  ...props
}) => (
  <NextContainer>
    <Head {...{
      themeColor,
      titleText
    }} />
    <Body
      {...props}
      {...{ theme }}
    />
  </NextContainer>
)

export default Container
