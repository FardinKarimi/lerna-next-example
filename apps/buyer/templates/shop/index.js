import Tabbed from '@company/components/organisms/tabbed'
import ArticleList from '@company/components/organisms/article_list'
import useText from '@company/components/_contexts/text_provider'

const renderGroceries = () => (
  <ArticleList>
    <ArticleList.Article>Brocolli</ArticleList.Article>
  </ArticleList>
)

const renderKitchenTools = () => (
  <ArticleList>
    <ArticleList.Article>Knife</ArticleList.Article>
    <ArticleList.Article>Spoon</ArticleList.Article>
  </ArticleList>
)

const renderCarTools = () => (
  <ArticleList>
    <ArticleList.Article>Navi</ArticleList.Article>
    <ArticleList.Article>FM Transmitter</ArticleList.Article>
  </ArticleList>
)

const Shop = () => {
  const texts = useText()
  return (
    <Tabbed
      tabs={[
        { id: 'a', text: texts.grocery, renderContent: renderGroceries },
        { id: 'b', text: texts.kitchen, renderContent: renderKitchenTools },
        { id: 'c', text: texts.car, renderContent: renderCarTools },
        { id: 'd', text: texts.car, renderContent: renderCarTools },
        { id: 'e', text: texts.car, renderContent: renderCarTools }
      ]}
      defaultTabId="a"
    />
  )
}

export default Shop
