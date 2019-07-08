import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'isomorphic-fetch'

import { TextProvider } from '@company/components/_contexts/text_provider'
import { UserProvider } from '@company/components/_contexts/user_provider'
import { StateProvider } from '@company/components/_contexts/state_provider'

import theme from '../resources/theme'
import texts from '../resources/texts'
import BaseStyles from '../resources/base_styles'

import { initialState, reducer } from '../state'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const userResponse = await fetch(`http://localhost:3020/api/v1/me`)
    const user = await userResponse.json()
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : await Promise.resolve(null)
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
              <StateProvider initialState={initialState} reducer={reducer}>
                <Component {...pageProps} />
              </StateProvider>
            </ThemeProvider>
          </UserProvider>
        </TextProvider>
      </Container>
    )
  }
}
