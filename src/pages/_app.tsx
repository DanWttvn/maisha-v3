import GlobalStyle from 'styles/global'
import themes from 'styles/themes'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { LanguageContextProvider } from 'contexts/language'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const GA_MEASUREMENT_ID = process.env['GA_MEASUREMENT_ID'] || ''

  return (
    <ThemeProvider theme={themes.light}>
      <LanguageContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        {/* Google tag manager: https://nextjs.org/docs/messages/next-script-for-ga#possible-ways-to-fix-it */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "G-${GA_MEASUREMENT_ID}");
          `}
        </Script>
      </LanguageContextProvider>
    </ThemeProvider>
  )
}
