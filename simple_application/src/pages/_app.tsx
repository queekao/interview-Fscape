import { ReactElement } from 'react'
import './globals.css'

import type { AppProps } from 'next/app'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { theme } from '../themes'
import MainLayout from '../layouts/MainLayout'
import { Header } from '../components/Header'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const AnyComponent = Component as any
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme()}>
          <MainLayout>
            <Header />
            <AnyComponent {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}
