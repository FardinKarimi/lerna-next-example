import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'isomorphic-fetch'

import { TextProvider } from '@company/components/_contexts/text_provider'
import { UserProvider } from '@company/components/_contexts/user_provider'

import theme from '../resources/theme'
import texts from '../resources/texts'
import BaseStyles from '../resources/base_styles'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const baseUrl = ctx.req ? `http://${ctx.req.hostname}` : ''
    console.log(`${baseUrl}/api/v1/me`)

    const userResponse = await fetch(`${baseUrl}/api/v1/me`)
    const user = await userResponse.json()
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : await Promise.resolve(null) // just `null` is not working.
    return { pageProps, user }
  }

  render() {
    const { Component, pageProps, user } = this.props

    return (
      <Container>
        <Head>
          <BaseStyles />
        </Head>
        <TextProvider value={texts}>
          <UserProvider value={user}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </UserProvider>
        </TextProvider>
      </Container>
    )
  }
}
