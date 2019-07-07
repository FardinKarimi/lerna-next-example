import React from 'react'

import ComponentWithMenu from '@company/components/organisms/component_with_menu'

import Shop from '../templates/shop'
import BuyerMenu from '../templates/buyer_menu'

class MainPage extends React.Component {
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req ? `http://${ctx.req.hostname}` : ''
    const articlesResponse = await fetch(`${baseUrl}/api/v1/articles`)
    const articles = await articlesResponse.json()
    return { articles }
  }

  renderShop = () => <Shop articles={this.props.articles} />

  render() {
    return (
      <ComponentWithMenu
        renderMenu={BuyerMenu}
        renderContent={this.renderShop}
      />
    )
  }
}

export default MainPage
