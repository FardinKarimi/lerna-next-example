import Menu from '@company/components/organisms/menu'
import useText from '@company/components/_contexts/text_provider'
import useUser from '@company/components/_contexts/user_provider'

const BuyerMenu = () => {
  const user = useUser()
  const texts = useText()
  return (
    <Menu
      profile={user}
      links={[
        { href: '/', text: texts.home },
        { href: '/cart', text: texts.cart },
        { href: '/history', text: texts.shoppingHistory },
        { href: '/preferences', text: texts.preferences },
        { href: '/profile', text: texts.profile },
        { href: 'http://localhost:3000', text: texts.logout }
      ]}
    />
  )
}

export default BuyerMenu
