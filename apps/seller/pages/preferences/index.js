import NotImplemented from '@company/components/molecules/not_implemented'
import ComponentWithMenu from '@company/components/organisms/component_with_menu'

import SellerMenu from '../../templates/seller_menu'

const PreferencesPage = () => (
  <ComponentWithMenu renderMenu={SellerMenu} renderContent={NotImplemented} />
)

export default PreferencesPage
