import Menu from '@company/components/organisms/menu'
import useText from '@company/components/_contexts/text_provider'
import useStore from '@company/components/_contexts/state_provider'

const SellerMenu = () => {
  const [{ user }] = useStore()
  const texts = useText()
  return (
    <Menu
      profile={user}
      links={[
        { href: '/', text: texts.home },
        { href: '/accounting', text: texts.accounting },
        { href: '/offerings', text: texts.offerings },
        { href: '/preferences', text: texts.preferences },
        { href: '/profile', text: texts.profile },
        { href: 'http://localhost:3000', text: texts.logout }
      ]}
    />
  )
}

export default SellerMenu
