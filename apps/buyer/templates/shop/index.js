import React, { useEffect } from 'react'
import styled from 'styled-components'
import Tabbed from '@company/components/organisms/tabbed'
import ArticleList from '@company/components/organisms/article_list'

import useText from '@company/components/_contexts/text_provider'
import useStore from '@company/components/_contexts/state_provider'

import { actions as shopActions, LOAD_ARTICLES } from '../../state/shop'

const renderTab = articles => () => {
  const [
    {
      shop: { expandedArticles }
    },
    dispatch
  ] = useStore()

  const toggleArticle = id => dispatch(shopActions.toggleArticle(id))

  return (
    articles &&
    articles.length > 0 && (
      <ArticleList
        articles={articles}
        expandedArticles={expandedArticles}
        toggleArticle={toggleArticle}
      />
    )
  )
}

const Container = styled.div`
  flex: 0;
`

const Shop = () => {
  const texts = useText()

  const [
    {
      shop: { activeTabId, articles }
    },
    dispatch
  ] = useStore()

  const setActiveTab = id => dispatch(shopActions.switchTab(id))

  return (
    <Container>
      <Tabbed
        tabs={[
          {
            id: 'a',
            text: texts.grocery,
            renderContent: renderTab(articles.grocery)
          },
          {
            id: 'b',
            text: texts.kitchen,
            renderContent: renderTab(articles.kitchenTools)
          },
          {
            id: 'c',
            text: texts.car,
            renderContent: renderTab(articles.carTools)
          }
        ]}
        activeTabId={activeTabId}
        setActiveTab={setActiveTab}
      />
    </Container>
  )
}

export default Shop
