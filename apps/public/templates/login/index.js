import Menu from '@company/components/organisms/menu'
import useText from '@company/components/_contexts/text_provider'

const SellerMenu = () => {
  const texts = useText()
  return (
    <Menu
      links={[
        { href: 'http://localhost:3010', text: texts.loginAsSeller },
        { href: 'http://localhost:3020', text: texts.loginAsBuyer }
      ]}
    />
  )
}

export default SellerMenu
