import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { TextProvider } from '@company/components/_contexts/text_provider'

import theme from '../resources/theme'
import texts from '../resources/texts'
import BaseStyles from '../resources/base_styles'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : await Promise.resolve(null) // just `null` is not working.
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <BaseStyles />
        </Head>
        <TextProvider value={texts}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </TextProvider>
      </Container>
    )
  }
}
