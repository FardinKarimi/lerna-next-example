import Tabbed from '@company/components/organisms/tabbed'
import ArticleList from '@company/components/organisms/article_list'
import useText from '@company/components/_contexts/text_provider'

const renderGroceries = () => <ArticleList articles={['Brocolli']} />
const renderKitchenTools = () => <ArticleList articles={['Knife', 'Spoon']} />
const renderCarTools = () => (
  <ArticleList articles={['Navi', 'FM Transmitter']} />
)

const Shop = () => {
  const texts = useText()
  return (
    <Tabbed
      tabs={[
        { id: 'a', text: texts.grocery, renderContent: renderGroceries },
        { id: 'b', text: texts.kitchen, renderContent: renderKitchenTools },
        { id: 'c', text: texts.car, renderContent: renderCarTools },
      ]}
      defaultTabId="b"
    />
  )
}

export default Shop
