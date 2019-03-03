import Menu from '@company/components/organisms/menu'
import withText from '@company/components/_hocs/with_text'

const SellerMenu = ({ texts }) => (
  <Menu
    profile={{
      userName: 'fardin@mobilabsolutions.com',
      companyName: 'MobiLab Solutions GmbH.',
      userType: 'Online Seller',
      firstName: 'Fardin',
      lastName: 'Karimi',
      imageUrl: 'https://avatars0.githubusercontent.com/u/15778261?s=460&v=4'
    }}
    links={[
      { href: '/accounting', text: texts.accounting },
      { href: '/offerings', text: texts.offerings },
      { href: '/preferences', text: texts.preferences },
      { href: '/profile', text: texts.profile },
      { href: 'http://localhost:3000', text: texts.logout }
    ]}
  />
)

export default withText(SellerMenu)
