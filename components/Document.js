import React from 'react'
import NextDocument, {
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'

class Document extends NextDocument {
  render () {
    return (
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
  }
}

Document.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(
      <App {...props} />
    )
  })

  const initialProps = await NextDocument.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: (
      <>
        {sheets.getStyleElement()}
        {flush() || null}
      </>
    )
  }
}

export default Document
