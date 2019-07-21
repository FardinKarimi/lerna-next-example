import NotImplemented from '@company/components/molecules/not_implemented'
import ComponentWithMenu from '@company/components/organisms/component_with_menu'
import withHybridProfile from '@company/components/_hocs/with_hybrid_profile'

import BuyerMenu from '../../templates/buyer_menu'

const ProfilePage = () => (
  <ComponentWithMenu renderMenu={BuyerMenu} renderContent={NotImplemented} />
)

export default withHybridProfile(ProfilePage)
