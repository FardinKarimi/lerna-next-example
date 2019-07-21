import NotImplemented from '@company/components/molecules/not_implemented'
import ComponentWithMenu from '@company/components/organisms/component_with_menu'
import withHybridProfile from '@company/components/_hocs/with_hybrid_profile'

import SellerMenu from '../../templates/seller_menu'

const AccountingPage = () => (
  <ComponentWithMenu renderMenu={SellerMenu} renderContent={NotImplemented} />
)

export default withHybridProfile(AccountingPage)
