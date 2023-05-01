import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class AppDocument extends Document {
  static override async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const { styles, ...initialProps } = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  override render = (): JSX.Element => (
    <Html lang="en">
      <Head>
        <meta name="author" content="Daniela Witteveen" />
        <meta
          name="description"
          content="ONG de desarrollo con foco de acci&oacute;n en Arusha, Tanzania. A&uacute;na el trabajo de comunidades locales y voluntarias/os internacionales."
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,900&display=swap"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
