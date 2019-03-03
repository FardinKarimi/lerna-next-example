import Menu from '@company/components/organisms/menu'
import withText from '@company/components/_hocs/with_text'
import withUser from '@company/components/_hocs/with_user'

const BuyerMenu = ({ user, texts }) => (
  <Menu
    profile={user}
    links={[
      { href: '/cart', text: texts.cart },
      { href: '/history', text: texts.shoppingHistory },
      { href: '/preferences', text: texts.preferences },
      { href: '/profile', text: texts.profile },
      { href: 'http://localhost:3000', text: texts.logout }
    ]}
  />
)

export default withUser(withText(BuyerMenu))
