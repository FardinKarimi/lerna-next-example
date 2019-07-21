import React from 'react'

import ComponentWithMenu from '@company/components/organisms/component_with_menu'

import Shop from '../templates/shop'
import BuyerMenu from '../templates/buyer_menu'
import { actions as shpoActions, LOAD_ARTICLES } from '../state/shop'

const MainPage = () => (
  <ComponentWithMenu renderMenu={BuyerMenu} renderContent={Shop} />
)

MainPage.getInitialProps = async (ctx, store) => {
  store.dispatch(shpoActions.loadArticles({}))
  await store.waitFor(state => !(state.network[LOAD_ARTICLES] || {}).loading)
}

export default MainPage
