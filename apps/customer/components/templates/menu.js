import Menu from '@company/components/organisms/menu'
import { getInitials } from '@company/shared'

const menuItems = [
  { text: 'My Profile', href: '/profile' },
  { text: 'My Preferences', href: '/preferences' },
  { text: 'Logout', onClick: () => alert('logged out') }
]

const WebCustomerMenu = ({ profile }) => (
  <>
    <Menu profile={profile} links={menuItems} />
    <div>{getInitials('asd', 'asd')}</div>
  </>
)

export default WebCustomerMenu
