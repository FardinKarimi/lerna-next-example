import React from 'react'

import ComponentWithMenu from '@company/components/organisms/component_with_menu'

import Shop from '../templates/shop'
import BuyerMenu from '../templates/buyer_menu'

const MainPage = ({ articles }) => {
  const renderShop = () => <Shop articles={articles} />
  return <ComponentWithMenu renderMenu={BuyerMenu} renderContent={renderShop} />
}

MainPage.getInitialProps = async ctx => {
  const baseUrl = ctx.req ? `http://${ctx.req.hostname}` : ''
  const articlesResponse = await fetch(`${baseUrl}/api/v1/articles`)
  const articles = await articlesResponse.json()
  return { articles }
}

export default MainPage
