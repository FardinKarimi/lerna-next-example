import React from 'react'

import ComponentWithMenu from '@company/components/organisms/component_with_menu'

import Shop from '../templates/shop'
import BuyerMenu from '../templates/buyer_menu'

const MainPage = ({ articles }) => {
  const renderShop = () => <Shop articles={articles} />
  return <ComponentWithMenu renderMenu={BuyerMenu} renderContent={renderShop} />
}

MainPage.getInitialProps = async () => {
  const articlesResponse = await fetch(`http://localhost:3020/api/v1/articles`)
  const articles = await articlesResponse.json()
  return { articles }
}

export default MainPage
