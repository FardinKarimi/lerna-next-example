import Menu from '@company/components/organisms/menu'
import withText from '@company/components/_hocs/with_text'

const BuyerMenu = ({ texts }) => (
  <Menu
    profile={{
      userName: 'fardin@mobilabsolutions.com',
      companyName: 'MobiLab Solutions GmbH.',
      userType: 'Online Buyer',
      firstName: 'Fardin',
      lastName: 'Karimi',
      imageUrl: 'https://avatars0.githubusercontent.com/u/15778261?s=460&v=4'
    }}
    links={[
      { href: '/cart', text: texts.cart },
      { href: '/history', text: texts.shoppingHistory },
      { href: '/preferences', text: texts.preferences },
      { href: '/profile', text: texts.profile },
      { href: 'http://localhost:3000', text: texts.logout }
    ]}
  />
)

export default withText(BuyerMenu)
