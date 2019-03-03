import Menu from '@company/components/organisms/menu'
import withText from '@company/components/_hocs/with_text'

const SellerMenu = ({ texts }) => (
  <Menu
    links={[
      { href: 'http://localhost:3010', text: texts.loginAsSeller },
      { href: 'http://localhost:3020', text: texts.loginAsBuyer }
    ]}
  />
)

export default withText(SellerMenu)
