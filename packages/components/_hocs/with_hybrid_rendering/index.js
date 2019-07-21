import React, { useEffect } from 'react'

import { isServer } from '@company/shared'

import useStore from '../../_contexts/state_provider'

export default (action, selector) => Component => {
  const WithHybridRendering = props => {
    const [state, dispatch] = useStore()

    useEffect(() => {
      if (!selector(state)) dispatch(action())
    }, [])

    return <Component {...props} />
  }
  WithHybridRendering.getInitialProps = async (ctx, serverStore) => {
    const props = Component.getInitialProps
      ? await Component.getInitialProps(ctx, serverStore)
      : await Promise.resolve({})
    if (isServer) {
      serverStore.dispatch(action())
      await serverStore.waitFor(selector)
    }
    return { props }
  }
  return WithHybridRendering
}
