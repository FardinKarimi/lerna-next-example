import React from 'react'

import ComponentWithMenu from '@company/components/organisms/component_with_menu'
import withHybridRendering from '@company/components/_hocs/with_hybrid_rendering'
import withHybridProfile from '@company/components/_hocs/with_hybrid_profile'

import { CALL_SUCCEEDED } from '@company/shared/state/network'

import Shop from '../templates/shop'
import BuyerMenu from '../templates/buyer_menu'
import { actions as shopActions, LOAD_ARTICLES } from '../state/shop'

const MainPage = () => (
  <ComponentWithMenu renderMenu={BuyerMenu} renderContent={Shop} />
)

export default withHybridRendering(
  shopActions.loadArticles,
  state => (state.network[LOAD_ARTICLES] || {}).status === CALL_SUCCEEDED
)(withHybridProfile(MainPage))
