import React, { useEffect } from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'isomorphic-fetch'

import { TextProvider } from '@company/components/_contexts/text_provider'
import { StateProvider } from '@company/components/_contexts/state_provider'

import Store from '@company/shared/store'

import NetworkStatus from '../templates/network_status'

import theme from '../resources/theme'
import texts from '../resources/texts'
import BaseStyles from '../resources/base_styles'

import { initialState, reducer } from '../state'
import { actions as userActions, LOAD_ME } from '../state/user'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const store = new Store(initialState, reducer)
    if (!store.getState().user) {
      store.dispatch(userActions.loadMe({}))
      await store.waitFor(state => !(state.network[LOAD_ME] || {}).loading)
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx, store)
      : await Promise.resolve(null)
    return { pageProps, initialState: store.getState() }
  }

  render() {
    const { Component, pageProps, initialState } = this.props

    return (
      <Container>
        <Head>
          <BaseStyles />
        </Head>
        <TextProvider value={texts}>
          <ThemeProvider theme={theme}>
            <StateProvider initialState={initialState} reducer={reducer}>
              <>
                <NetworkStatus />
                <Component {...pageProps} />
              </>
            </StateProvider>
          </ThemeProvider>
        </TextProvider>
      </Container>
    )
  }
}
