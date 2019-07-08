import Tabbed from '@company/components/organisms/tabbed'
import ArticleList from '@company/components/organisms/article_list'
import useText from '@company/components/_contexts/text_provider'
import useStateValue from '@company/components/_contexts/state_provider'
import { shopActions } from '../../state/shop'

const renderTab = articles => () => {
  const [
    {
      shop: { expandedArticles }
    },
    dispatch
  ] = useStateValue()
  return (
    articles &&
    articles.length > 0 && (
      <ArticleList
        articles={articles}
        expandedArticles={expandedArticles}
        toggleArticle={id => dispatch(shopActions.toggleArticle(id))}
      />
    )
  )
}

const Shop = ({ articles }) => {
  const texts = useText()
  const [
    {
      shop: { activeTabId }
    },
    dispatch
  ] = useStateValue()
  return (
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
      setActiveTab={id => dispatch(shopActions.switchTab(id))}
    />
  )
}

export default Shop
