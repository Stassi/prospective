import React from 'react'
import Document, {
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'
import theme from '../src/theme'

class MyDocument extends Document {
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
          <meta
            content={theme.palette.primary.main}
            name='theme-color'
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

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () => originalRenderPage({ enhanceApp: App => props => sheets.collect(<App {...props} />) })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <>
        {sheets.getStyleElement()}
        {flush() || null}
      </>
    )
  }
}

export default MyDocument
