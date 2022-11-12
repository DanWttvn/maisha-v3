import GlobalStyle from 'styles/global';
import themes from 'styles/themes';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
