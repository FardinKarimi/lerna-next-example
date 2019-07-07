import Tabbed from '@company/components/organisms/tabbed'
import ArticleList from '@company/components/organisms/article_list'
import useText from '@company/components/_contexts/text_provider'

const renderTab = articles => () =>
  articles && articles.length > 0 && <ArticleList articles={articles} />

const Shop = ({ articles }) => {
  const texts = useText()
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
      defaultTabId="b"
    />
  )
}

export default Shop
