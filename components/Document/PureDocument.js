import React from 'react'
import {
  Head,
  Main,
  NextScript
} from 'next/document'

const PureDocument = () => (
  <html
    dir='ltr'
    lang='en'
  >
    <Head>
      <meta charSet='utf-8' />
      <meta
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        name='viewport'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
        rel='stylesheet'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </html>
)

export default PureDocument
