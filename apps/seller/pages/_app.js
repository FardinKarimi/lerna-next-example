import React, { useEffect } from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'isomorphic-fetch'

import NetworkStatus from '@company/components/templates/network_status'
import { TextProvider } from '@company/components/_contexts/text_provider'
import { StateProvider } from '@company/components/_contexts/state_provider'
import { isServer } from '@company/shared';

import Store from '@company/shared/store'
import { actions as userActions, LOAD_ME } from '@company/shared/state/user'
import { CALL_SUCCEEDED, CALL_FAILED } from '@company/shared/state/network'

import theme from '../resources/theme'
import texts from '../resources/texts'
import BaseStyles from '../resources/base_styles'

import { initialState, reducer } from '../state'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const store = new Store(
      !isServer && typeof window.STORE_STATE !== 'undefined'
        ? window.STORE_STATE
        : initialState,
      reducer
    )

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx, store)
      : await Promise.resolve(null)

    const state = store.getState()

    return { pageProps, initialState: state }
  }

  componentDidMount() {
    window.STORE_STATE = this.props.initialState
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
